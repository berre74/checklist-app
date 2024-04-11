'use client'

import {ChecklistViewer} from "@/app/checklist/ChecklistViewer";
import {pegChecklist} from "@/app/checklist/pegChecklist";
import {CssBaseline} from "@mui/material";
import {ColorModeProvider} from "@/app/ColorModeProvider";
import {warChecklist} from "@/app/checklist/warChecklist";
import {useState} from "react";
import {dyxChecklist} from "@/app/checklist/dyxChecklist";

const checklists = [pegChecklist, warChecklist, dyxChecklist]

export default function Home() {
    const [checklistIndex, setChecklistIndex] = useState(0);
    const activeChecklist = checklists[checklistIndex];

    const toggleChecklist = (selectedPlane) => {
        setChecklistIndex(selectedPlane.value)
    }

    return <>
        <ColorModeProvider>
            <CssBaseline enableColorScheme={true}/>
            <ChecklistViewer checklist={activeChecklist} toggleChecklist={toggleChecklist}/>
        </ColorModeProvider>
    </>
}
