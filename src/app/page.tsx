'use client'

import {ChecklistViewer} from "@/app/checklist/ChecklistViewer";
import {pegChecklist} from "@/app/checklist/pegChecklist";
import {CssBaseline} from "@mui/material";
import {ColorModeProvider} from "@/app/ColorModeProvider";
import {warChecklist} from "@/app/checklist/warChecklist";
import {useState} from "react";
import {dyxChecklist} from "@/app/checklist/dyxChecklist";
import { Checklist, Phase } from "./checklist/checklist-support";

const checklists = [pegChecklist, warChecklist, dyxChecklist]
// initialize check indexes
for (let checklistIndex = 0; checklistIndex < checklists.length; checklistIndex++) {
    const checklist: Checklist = checklists[checklistIndex];
    for (let phaseIndex = 0; phaseIndex < checklist.phases.length; phaseIndex++) {
        const phase: Phase = checklist.phases[phaseIndex];
        for (let checkIndex = 0; checkIndex < phase.checks.length; checkIndex++) {
            const check = phase.checks[checkIndex];
            check.index = checkIndex;
        }
    }    
}

export default function Home() {
    const [checklistIndex, setChecklistIndex] = useState(0);
    const activeChecklist = checklists[checklistIndex];

    return <>
        <ColorModeProvider>
            <CssBaseline enableColorScheme={true}/>
            <ChecklistViewer checklist={activeChecklist} checklistIndex={checklistIndex} setChecklistIndex={setChecklistIndex}/>
        </ColorModeProvider>
    </>
}
