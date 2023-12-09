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

    const phase = phases[index]

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
            {phase}
        </div>
        <div className={styles.navButtons}>
            <button className={styles.navButton} onClick={prev}>Prev</button>
            <button className={styles.navButton} onClick={next}>Next</button>
        </div>
    </div>
}