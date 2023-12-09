import {ReactElement} from "react";
import {Check} from "@/app/checklist/Check";

export interface PhaseProps {
    name: string
    children?: ReactElement<typeof Check> | Array<ReactElement<typeof Check>>
}

export const Phase = ({name, children} : PhaseProps) => {
    return <div>
        <h2>{name}</h2>
        {children}
    </div>
}