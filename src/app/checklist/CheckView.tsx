import styles from './checklist.module.css'
import {Check} from "@/app/checklist/checklist-support";

export interface CheckProps {
    check: Check
}

export const CheckView = ({check} : CheckProps) => {
    return <div className={styles.check}>
        <div>{check.item}</div>
        <div className={styles.confirm}>{check.confirm}   <input type="checkbox" /></div>
    </div>
}