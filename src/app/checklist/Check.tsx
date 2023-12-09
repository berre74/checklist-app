import styles from './checklist.module.css'
import {FlightCondition} from "@/app/checklist/checklist-support";

export interface CheckProps {
    item: string
    confirm: string
    conditions?: FlightCondition[]
}

export const Check = ({item, confirm} : CheckProps) => {
    return <div className={styles.check}>
        <div>{item}</div>
        <div className={styles.confirm}>{confirm}</div>
    </div>
}