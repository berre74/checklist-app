'use client'

import {ChecklistViewer} from "@/app/checklist/ChecklistViewer";
import {pegChecklist} from "@/app/checklist/pegChecklist";
import {CssBaseline} from "@mui/material";

export default function Home() {
  return <>
    <CssBaseline enableColorScheme={true}/>
    <ChecklistViewer checklist={pegChecklist} />
  </>
}
