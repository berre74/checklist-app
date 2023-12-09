'use client'

import {ChecklistViewer} from "@/app/checklist/ChecklistViewer";
import {pegChecklist} from "@/app/checklist/pegChecklist";

export default function Home() {
  return <ChecklistViewer checklist={pegChecklist} />
}
