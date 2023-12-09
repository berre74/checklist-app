import styles from './checklist.module.css'
import {useState} from "react";
import {Checklist, Phase} from "@/app/checklist/checklist-support";
import {CheckView} from "@/app/checklist/CheckView";

interface ChecklistProps {
    checklist: Checklist
}

export const ChecklistViewer = ({checklist}: ChecklistProps) => {
    const phases = checklist.phases

    const [index, setIndex] = useState(0)

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
        <h1>{checklist.name}</h1>
        <div className={styles.phase}>
            <h2>{currentPhase.name}</h2>
            <div className={styles.checks}>
                {currentPhase.checks.map((check, index) => (<CheckView key={index} check={check} />))}
            </div>
        </div>
        <div className={styles.navButtons}>
            <button onClick={prev} disabled={!hasPrev}>{previousPhase?.name || '-Start-'}</button>
            {altPhase && <button onClick={alt}>{altPhase.name}</button>}
            <button onClick={next} disabled={!hasNext}>{nextPhase?.name || '-Finish-'}</button>
        </div>
    </div>
}