import styles from './checklist.module.css'
import {PhaseProps} from "@/app/checklist/Phase";
import {Children, isValidElement, PropsWithChildren, ReactElement, useState} from "react";

interface ChecklistProps extends PropsWithChildren {
    title: string
}

type PhaseElem = ReactElement<PhaseProps>

const isPhase = (reactElem: any): reactElem is PhaseElem => {
    return isValidElement<PhaseProps>(reactElem)
}

export const Checklist = ({title, children}: ChecklistProps) => {
    // Why does this have to be so hard ?
    const phases = Children.toArray(children).filter<PhaseElem>(isPhase)

    const [index, setIndex] = useState(0)

    const hasPrev = index > 0
    const hasNext = index < phases.length-1

    const previousPhase = hasPrev ? phases[index-1] : null
    const currentPhase = phases[index]
    const nextPhase = hasNext ? phases[index+1] : null

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

    return <div className={styles.checklist}>
        <h1>{title}</h1>
        <div className={styles.phaseContainer}>
            {currentPhase}
        </div>
        <div className={styles.navButtons}>
            <button className={styles.navButton} onClick={prev} disabled={!hasPrev}>{previousPhase?.props.name || '-Start-'}</button>
            <button className={styles.navButton} onClick={next} disabled={!hasNext}>{nextPhase?.props.name || '-Finish-'}</button>
        </div>
    </div>
}