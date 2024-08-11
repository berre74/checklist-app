import { check, Checklist } from "@/app/checklist/checklist-support";

export const parapenteChecklist: Checklist = {
    name: 'Parapente',
    phases: [
        {
            name: 'Before TO',
            checks: [
                check('Glider surfaces', 'checked'),

                check('Helmet', 'secured'),
                check('Sun glasses', 'on'),
                check('Seat', 'connected'),
                check('Accelerator', 'connected'),
                check('Glider lines w/o twists', 'checked'),
                check('Seat & accelerator', 'no twists'),

                check('Parachute grip', 'secured'),
                check('Gloves', 'on'),

                check('Wind direction', 'checked'),
                check('Wind speed', '<20km/h'),
                check('Thermal conditions', 'calm'),

                check('Vario', 'ON'),
                check('Battery Vario', 'Sufficient for flight'),

                check('Radio 143.9875', 'Listening'),
                check('Battery Radio', 'Sufficient for flight'),

                check('Vertical Flight Limit', 'checked'),
                check('Distance Flight Mimit', 'checked')
            ]
        },
        {
            name: 'TO',
            checks: [
                check('Wind', '100% head'),
                check('Free space', 'clear'),
                check('Other obstacles', 'checked'),
                check('Nobody else TO', 'checked'),
                check('Enough TO distance to run', 'checked'),
                check('Inflation visual control', 'checked')
            ]
        },
        {
            name: 'After TO',
            checks: [
                check('Chrono', 'started'),
                check('Distance from relief', 'enough'),
                check('Installation in seat', 'comfortable')
            ]
        },
        {
            name: 'Before Landing',
            checks: [
                check('Wind direction', 'checked'),
                check('Wind speed', 'checked'),
                check('Free space / obstacles', 'checked'),
                check('Colison avoidance', 'checked')
            ]
        },
        {
            name: 'After Landing',
            checks: [
                check('Other parapent landing behind', 'vacate landing area'),
                check('Folding area', 'checked'),
                check('Chrono', 'stopped')
            ]
        }
    ]
}
