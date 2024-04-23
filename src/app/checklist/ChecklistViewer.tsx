import styles from './checklist.module.css'
import {useState} from "react"
import React from 'react'
import Select, { ActionMeta } from 'react-select';
import {Checklist, FlightCondition, Phase} from "@/app/checklist/checklist-support"
import {CheckView} from "@/app/checklist/CheckView"
import {Button, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'
import {useColorMode} from "@/app/ColorModeProvider";

interface PlaneOption {
    value: number,
    label: string,
    selected?: string
}
interface ChecklistProps {
    checklist: Checklist
    checklistIndex: number
    setChecklistIndex: (newVal: number) => void
}

export const ChecklistViewer = ({checklist, checklistIndex, setChecklistIndex}: ChecklistProps) => {

    const planes: PlaneOption[] = [
        { value: 0, label: 'OO-PEG', selected: 'selected' }, 
        { value: 1, label: 'OO-WAR' },
        { value: 2, label: 'PH-DYX' }
    ]
    const [planeIndex, setPlaneIndex] = useState(0)


    const phases = checklist.phases

    const [index, setIndex] = useState(0)
    const [condition, setCondition] = useState<FlightCondition>('day')
    const [showPhaseSelection, setShowPhaseSelection] = useState(false)
    const colorMode = useColorMode()

    const hasPrev = index > 0
    const hasNext = index < phases.length - 1

    const previousPhase = hasPrev ? phases[index - 1] : null
    const currentPhase = phases[index]
    const nextPhase = hasNext ? phases[index + 1] : null

    let altPhase: Phase | null = null
    let altIndex = -1
    if (currentPhase.alternate) {
        altIndex = phases.findIndex(phase => phase.name === currentPhase.alternate)
        if (altIndex > -1) {
            altPhase = phases[altIndex]
        }
    }

    const togglePhaseSelection = () => {
        setShowPhaseSelection(!showPhaseSelection)
    }

    const [checksCompleted, setChecksCompleted] = useState(0)

    const updateChecksCompleted = () => {
        setChecksCompleted(currentPhase.checks.filter(check => check.conditions?.includes(condition)).filter(check => check.isChecked).length);
    }

    const toggleCondition = () => {
        if (condition === 'day') {
            setCondition('night')
            setChecksCompleted(currentPhase.checks.filter(check => check.conditions?.includes('night')).filter(check => check.isChecked).length);
        } else {
            setCondition('day')
            setChecksCompleted(currentPhase.checks.filter(check => check.conditions?.includes('day')).filter(check => check.isChecked).length);
        }
    }

    const goTo = (target: number) => {
        setIndex(target)
        setShowPhaseSelection(false)
    }

    const prev = () => {
        const newIndex = index - 1
        if (newIndex >= 0) {
            setIndex(newIndex)
            setChecksCompleted(phases[newIndex].checks.filter(check => check.conditions?.includes(condition)).filter(check => check.isChecked).length);
        }
    }

    const next = () => {
        const newIndex = index + 1
        if (newIndex < phases.length) {
            setIndex(newIndex)
            setChecksCompleted(phases[newIndex].checks.filter(check => check.conditions?.includes(condition)).filter(check => check.isChecked).length);
        }
    }

    const alt = () => {
        setIndex(altIndex)
    }

    return <div className={styles.checklist}>
        <div className={styles.header}>
            <IconButton onClick={togglePhaseSelection} ><MenuIcon />&nbsp;&nbsp;Plane: </IconButton>
            <h3 className={styles.title}>
                <div style={{width: '200px'}}>
                    <Select 
                        id="planeSelector"
                        name="planeSelector"
                        defaultValue={planes.filter(function(plane) {
                            return plane.value === planeIndex;
                        })}
                        onChange={ (selectedPlane: PlaneOption | null, actionMeta: ActionMeta<PlaneOption>) => {setChecklistIndex((selectedPlane?.value || 0))} }                        
                        options={planes}
                    />
                </div>
            </h3>
            <IconButton onClick={toggleCondition}>{condition === 'day' ? <LightModeIcon /> : <ModeNightIcon />}</IconButton>
            {colorMode.ToggleButton}
        </div>
        {showPhaseSelection && <div className={styles.phaseSelection}>
            {phases.map((p, i) => <Button key={i} onClick={() => goTo(i)} className={styles.phaseSelectionButton} >{p.name}</Button>)}
        </div>}
        {!showPhaseSelection &&
            <>
            <div className={styles.phase}>
                <div className={styles.phaseTitleBar}>
                    <h3>{currentPhase.name}</h3>
                    <div>Checklist {index + 1} of {phases.length} - {checksCompleted} of {currentPhase.checks.filter(check => check.conditions?.includes(condition)).length} checks completed</div>
                </div>
                <div className={styles.checks}>
                    {currentPhase.checks
                        .filter(check => check.conditions?.includes(condition))
                        .map((check, index) => (<CheckView key={index} check={check} updateChecksCompleted={updateChecksCompleted} />))}
                </div>
            </div>
                <div className={styles.navButtons}>
                    <Button onClick={prev} disabled={!hasPrev} variant={'contained'} color={'secondary'}>{previousPhase?.name || '-Start-'}</Button>
                    {altPhase && <Button onClick={alt} variant={'contained'} color={'info'}>{altPhase.name}</Button>}
                    <Button onClick={next} disabled={!hasNext} variant={'contained'}>{nextPhase?.name || '-Finish-'}</Button>
                </div>
            </>
        }
    </div>

}