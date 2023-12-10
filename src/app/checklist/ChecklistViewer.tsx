import styles from './checklist.module.css'
import {useState} from "react";
import {Checklist, FlightCondition, Phase} from "@/app/checklist/checklist-support";
import {CheckView} from "@/app/checklist/CheckView";

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
            <button onClick={togglePhaseSelection}>Q</button>
            <h1>{checklist.name}</h1>
            <button onClick={toggleCondition}>{condition}</button>
        </div>
        {showPhaseSelection && <div className={styles.phaseSelection}>
            {phases.map((p, i) => <button onClick={() => goTo(i)}>{p.name}</button>)}
        </div>}
        {!showPhaseSelection &&
            <>
            <div className={styles.phase}>
                <div className={styles.phaseTitleBar}>
                    <h2>{currentPhase.name}</h2>
                    <div>{index + 1}/{phases.length}</div>
                </div>
                <div className={styles.checks}>
                    {currentPhase.checks
                        .filter(check => check.conditions.includes(condition))
                        .map((check, index) => (<CheckView key={index} check={check}/>))}
                </div>
            </div>
                <div className={styles.navButtons}>
                    <button onClick={prev} disabled={!hasPrev}>{previousPhase?.name || '-Start-'}</button>
                    {altPhase && <button onClick={alt}>{altPhase.name}</button>}
                    <button onClick={next} disabled={!hasNext}>{nextPhase?.name || '-Finish-'}</button>
                </div>
            </>
        }
    </div>

}