import React from 'react';
import styles from './checklist.module.css'
import {Check} from "@/app/checklist/checklist-support";

export interface CheckProps {
    check: Check
    updateChecksCompleted: () => void
    checkIndex: number
    setCheckIndex: (index: number) => void
}

export const CheckView = ({check, updateChecksCompleted, checkIndex, setCheckIndex} : CheckProps) => {

    if (!check.isChecked) check.isChecked = false;
    const [isChecked, setIsChecked] = React.useState(check.isChecked);
    
    const checkItem = () => {
        console.log("Switching '" + check.item + "' switching to " + !isChecked);
        check.isChecked = !check.isChecked;
        setIsChecked(!isChecked);
        updateChecksCompleted();
        setCheckIndex(check.index || 0); 
    }

    return <div className={(check.index==checkIndex)?styles.checking:styles.check}>
        <div>{check.item}</div>
        <div className={styles.confirm}>{check.confirm}   <input type="checkbox" checked={check.isChecked} onChange={checkItem}/></div>
    </div>
}