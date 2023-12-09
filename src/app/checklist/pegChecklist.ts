import {check, Checklist} from "@/app/checklist/checklist-support";

export const pegChecklist: Checklist = {
    name: 'OO-PEG',
    phases: [
        {
            name: 'Before start',
            checks: [
                check('Documents', 'on-board & checked'),
                check('Seats & belts', 'adjusted & locked'),
                check('Doors', 'closed & locked'),
                check('ELT switch', 'armed'),
                check('STBY instrument', 'armed'),
                check('Electrical switches', 'off'),
                check('Avionics master switch', 'off'),
                check('Throttle', 'closed'),
                check('Mixture', 'full rich'),
                check('Carburator heat', 'off'),
                check('Circuit breakers', 'all in'),
                check('Ignition', 'off & key ready'),
                check('Fuel selector ', 'lowest tank'),
                check('Alternate static', 'checked & off'),
                check('Flaps', 'checked & set'),
                check('Master switch, alternator & standby alternator', 'on'),
                check('Annunciator panel', 'tested'),
                check('Multifunction display', 'set up'),
                check('Fuel & Engine page', 'set & checked')
            ]
        },
        {
            name: 'Engine start',
            checks: [
                check('Brakes', 'set'),
                check('Electrical fuel pump', 'on'),
                check('Fin strobe light', 'on'),
                check('Throtlle', '1 cm open'),
                check('Primer', 'as required'),
                check('Propeller area', 'clear'),
                check('Starter', 'engage'),
                check('Engine rpm', 'adjust to 1000-1200'),
                check('Oil pressure', 'rising'),
                check('Alternator output', 'checked')
            ]
        },
        {
            name: 'After start',
            checks: [
                check('Electrical fuel pump', 'off'),
                check('Avionics master switch', 'on'),
                check('Annunciator panel', 'checked'),
                check('Engine instruments', 'checked'),
                check('PFD instruments', 'checked & set'),
                check('STBY attitude indicator', 'tested'),
                check('Trim interrupt & overpower', 'checked'),
                check('Radios and navaids', 'on & set')
            ]
        },
        {
            name: 'Taxi',
            checks: [
                check('Brakes', 'checked'),
                check('Flight instruments', 'checked')

                // Flight instruments is probably the old
                // - Pin in
                // - Ball out
                // - Horizon stable
                // - Gyro and compass increasing / decreasing
                // - ADF tracking
            ]
        },
        {
            name: 'Engine run-up',
            checks: [
                check('Fuel selector', 'fullest tank'),
                check('Throttle', '2000 rpm'),
                check('Engine instruments', 'in limits'),
                check('Heading indicator', 'aligned'),
                check('Ignition', 'checked 175/50'),
                check('Carburator heat', 'checked'),
                check('Throttle', 'full'),
                check('STBY alternator', 'checked'),
                check('Throttle', 'idle, then 1000 rpm')
            ]
        },
        {
            name: 'Before take-off',
            checks: [
                check('Engine run-ip', 'performed'),
                check('Doors & windows', 'locked'),
                check('Seats & belts', 'locked and tight'),
                check('Flight controls', 'free and correct'),
                check('PFD, MFD', 'correct'),
                check('Electrical fuel pump', 'on'),
                check('Fuel selector', 'fullest tank'),
                check('Ignition', 'both'),
                check('Mixture', 'full rich'),
                check('Carburator heat', 'off'),
                check('Flaps', 'set'),
                check('Trims', 'set'),
                check('Departure briefing', 'reviewed')

                // Departure briefing includes:
                // Engine failure before take-off -> throttle idle & stop
                // Engine failure after take-off
                //   Best glide 73 kts
                //   No turns below 800 ft
                //   No turns more than 30 degrees left or right
                //   Nose in the wind, which is left/right
                // Normal procedure
                //   Rotate at 60
                //   Climb at 70 (until 10000 ft)
                //   First turn and direction, clearance
            ]
        },
        {
            name: 'Line-up',
            checks: [
                check('Approach area', 'clear'),
                check('Pitot heat', 'as required'),
                check('Landing light', 'on'),
                check('Recognition lights', 'on'),
                check('Strobe lights', 'on'),
                check('Transponder', 'ALT'),
                check('Threshold elevation', 'checked'),
                check('QFU', 'checked')
            ]
        },
        {
            name: 'Take-off',
            checks: [
                check('Engine parameters', 'checked'),
                check('Carburator heat', 'off'),
                check('Airspeed indication', 'checked')
            ]
        },
        {
            name: 'After take-off',
            checks: [
                check('Brakes', 'applied'),
                check('Engine pressures and temperatures', 'in limits'),
                check('Electrical fuel pump', 'off'),
                check('Landing light', 'off'),
                check('Flaps', 'up')
            ]
        },
        {
            name: 'Approach',
            checks: [
                check('Heading indicator', 'checked'),
                check('Altimeters', 'set'),
                check('Landing light', 'on'),
                check('Electrical fuel pump', 'on'),
                check('Engine instruments', 'checked'),
                check('Mixture', 'as required'),
                check('Carburator heat', 'checked'),
                check('Fuel selector', 'fullest tank'),
                check('Approach briefing', 'reviewed')

                // What constitutes the approach briefing ?
                // Runway in use ? Approach clearance ?
            ]
        },
        {
            name: 'Landing',
            checks: [
                check('Approach area', 'clear'),
                check('Brakes', 'checked'),
                check('Mixture', 'full rich'),
                check('Flaps', 'set')
            ]
        },
        {
            name: 'Short final',
            alternate: 'Take-off',
            checks: [
                check('Carburator heat', 'off')
            ]
        },
        {
            name: 'After landing',
            checks: [
                check('Electrical fuel pump', 'off'),
                check('Pitot heat', 'off'),
                check('Landing light', 'off'),
                check('Recognition light', 'off'),
                check('Strobe light', 'fin'),
                check('Transponder', 'standby'),
                check('Flaps', 'up')
            ]
        },
        {
            name: 'Shutdown',
            checks: [
                check('Avionics master switch', 'off'),
                check('Throttle', 'closed'),
                check('Mixture', 'cut off'),
                check('Ignition', 'off & key removed'),
                check('Electrical switches', 'all off'),
                check('Parking brake', 'as required'),
                check('Trims', 'neutral'),
                check('Control lock', 'as required')
            ]
        }
    ]
}
