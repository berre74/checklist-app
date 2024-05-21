import { check, Checklist } from "@/app/checklist/checklist-support";

export const droneChecklist: Checklist = {
    name: 'DJI-Drone',
    phases: [
        {
            name: 'Preflight - drone',
            checks: [
                check('Download maps', 'checked'),
                check('Propellers', 'checked')
            ]
        },
        {
            name: 'Before start',
            checks: [
                check('Battery Drone', 'Sufficient for flight'),
                check('Battery RC', 'Sufficient for flight')
            ]
        }
    ]
}
