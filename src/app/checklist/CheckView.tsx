import React from 'react';
import styles from './checklist.module.css'
import {Check} from "@/app/checklist/checklist-support";

export interface CheckProps {
    check: Check
    updateChecksCompleted: () => void
}

export const CheckView = ({check, updateChecksCompleted} : CheckProps) => {

    if (!check.isChecked) check.isChecked = false;
    const [isChecked, setIsChecked] = React.useState(check.isChecked);
    
    const checkItem = () => {
        console.log("checkItem " + check.item + " switching to " + !isChecked);
        check.isChecked = !check.isChecked;
        setIsChecked(!isChecked);
        updateChecksCompleted();
    }

    return <div className={styles.check}>
        <div>{check.item}</div>
        <div className={styles.confirm}>{check.confirm}   <input type="checkbox" checked={check.isChecked} onChange={checkItem}/></div>
    </div>
}