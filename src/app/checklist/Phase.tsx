import styles from './checklist.module.css'
import {isValidElement, PropsWithChildren, ReactElement} from "react";
import {CheckProps} from "@/app/checklist/Check";

export interface PhaseProps extends PropsWithChildren{
    name: string
    alternate?: string
}

type CheckElem = ReactElement<CheckProps>

const isCheck = (reactElem: any): reactElem is CheckElem => {
    return isValidElement<CheckProps>(reactElem)
}

export const Phase = ({name, children} : PhaseProps) => {
    return <div className={styles.phase}>
        <h2>{name}</h2>
        <div className={styles.checksContainer}>
            {children}
        </div>
    </div>
}