import { check, Checklist } from "@/app/checklist/checklist-support";

export const droneChecklist: Checklist = {
    name: 'DJI-Drone',
    phases: [
        {
            name: 'Before TO',
            checks: [
                check('Propellers', 'checked'),
                check('Gimbal protection', 'off'),
                check('Wind direction', 'checked'),
                check('Wind speed', '<20km/h'),
                check('ID-tag', 'applied'),
                check('ATC clearance', 'OK'),
                check('Rain', 'none'),
                check('RC', 'ON'),
                check('iPhone WIFI hotspot', 'connected'),
                check('Local maps', 'downloaded'),
                check('Drone', 'ON'),
                check('Battery Drone', 'Sufficient for flight'),
                check('Battery RC', 'Sufficient for flight'),
                check('Vertical Flight Limit', '120m AGL'),
                check('Distance Flight Mimit', 'max'),
                check('RTH height', '120m AGL'),
                check('Colison avoidance', 'OFF'),
                check('Connection lost', 'RTH')
            ]
        },
        {
            name: 'After TO',
            checks: [
                check('Colison avoidance', 'ON'),
                check('RTH Home point', 'updated'),
                check('Compass on map', 'checked'),
                check('Chrono / Countdown', 'started'),
                check('Cine mode', 'ON'),
                check('Record video', 'started')
            ]
        },
        {
            name: 'Before Landing',
            checks: [
                check('Colison avoidance', 'OFF'),
                check('Record video', 'stopped'),
                check('Normal/Sport mode', 'ON')
            ]
        },
        {
            name: 'After Landing',
            checks: [
                check('Drone files', 'copied'),
                check('SD card', 'empty')
            ]
        }
    ]
}
