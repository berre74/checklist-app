import styles from './checklist.module.css'
import {useState} from "react"
import {Checklist, FlightCondition, Phase} from "@/app/checklist/checklist-support"
import {CheckView} from "@/app/checklist/CheckView"
import {Button, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import ModeNightIcon from '@mui/icons-material/ModeNight'

interface ChecklistProps {
    checklist: Checklist
}

export const ChecklistViewer = ({checklist}: ChecklistProps) => {
    const phases = checklist.phases

    const [index, setIndex] = useState(0)
    const [condition, setCondition] = useState<FlightCondition>('day')
    const [showPhaseSelection, setShowPhaseSelection] = useState(false)

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

    const toggleCondition = () => {
        if (condition === 'day') {
            setCondition('night')
        } else {
            setCondition('day')
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
        }
    }

    const next = () => {
        const newIndex = index + 1
        if (newIndex < phases.length) {
            setIndex(newIndex)
        }
    }

    const alt = () => {
        setIndex(altIndex)
    }

    return <div className={styles.checklist}>
        <div className={styles.header}>
            <IconButton onClick={togglePhaseSelection} ><MenuIcon /></IconButton>
            <h3 className={styles.title}>{checklist.name}</h3>
            <IconButton onClick={toggleCondition}>{condition === 'day' ? <LightModeIcon /> : <ModeNightIcon />}</IconButton>
        </div>
        {showPhaseSelection && <div className={styles.phaseSelection}>
            {phases.map((p, i) => <Button key={i} onClick={() => goTo(i)} className={styles.phaseSelectionButton} >{p.name}</Button>)}
        </div>}
        {!showPhaseSelection &&
            <>
            <div className={styles.phase}>
                <div className={styles.phaseTitleBar}>
                    <h3>{currentPhase.name}</h3>
                    <div>{index + 1}/{phases.length}</div>
                </div>
                <div className={styles.checks}>
                    {currentPhase.checks
                        .filter(check => check.conditions.includes(condition))
                        .map((check, index) => (<CheckView key={index} check={check}/>))}
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