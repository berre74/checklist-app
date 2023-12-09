import styles from './checklist.module.css'

export interface CheckProps {
    item: string
    confirm: string
}

export const Check = ({item, confirm} : CheckProps) => {
    return <div className={styles.check}>
        <div>{item}</div>
        <div className={styles.confirm}>{confirm}</div>
    </div>
}