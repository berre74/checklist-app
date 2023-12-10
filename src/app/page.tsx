'use client'

import {ChecklistViewer} from "@/app/checklist/ChecklistViewer";
import {pegChecklist} from "@/app/checklist/pegChecklist";
import {CssBaseline} from "@mui/material";
import {ColorModeProvider} from "@/app/ColorModeProvider";

export default function Home() {
  return <>
    <ColorModeProvider>
      <CssBaseline enableColorScheme={true}/>
      <ChecklistViewer checklist={pegChecklist} />
    </ColorModeProvider>
  </>
}
