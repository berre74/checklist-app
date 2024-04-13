import {check, Checklist} from "@/app/checklist/checklist-support";

export const dyxChecklist: Checklist = {
    name: 'PH-DYX',
    phases: [
        {
            name: 'Preflight - interior',
            checks: [
                check('Engine master switch', 'off'),
                check('Avionics master switch', 'off'),
                check('Controls', 'free'),
                check('Battery switch', 'on'),
                check('Flaps', 'checked'),
                check('Trims', 'checked'),
                check('Fuel quantity', 'checked'),
                check('Fuel temperature', 'checked'),
                check('Coolant level light', 'off'),
                check('Strobe light', 'checked operational', ['night']),
                check('Navigation lights', 'checked operational', ['night']),
                check('Landing light', 'checked operational', ['night']),
                check('Taxi light', 'checked operational', ['night']),
                check('Internal lighting 1', 'checked operational', ['night']),
                check('Internal lighting 2', 'checked operational', ['night']),
                check('Day/Night selector switch', 'checked and set', ['night']),
                check('Emergency torchlight', 'on board', ['night']),
                check('Battery switch', 'off'),
                check('Aircraft documents', 'on board'),
                check('Luggage', 'properly stowed')
            ]
        },
        {
            name: 'Preflight - exterior',
            checks: [
                check('Fuel filler cap', 'in place & secured'),
                check('Fuel tank vents', 'free'),
                check('LH Static ', 'clear'),
                check('Main fuel tank', 'drained & checked'),
                check('Aux fuel tank', 'drained & checked'),
                check('Stabilator', 'checked'),
                check('Rudder', 'checked'),
                check('RH Static', 'clear'),
                check('RH Flap & aileron', 'checked'),
                check('RH navigation lights', 'checked'),
                check('Stall warner', 'checked'),
                check('RH landing gear', 'checked'),
                check('Fuel filter', 'drained & checked'),
                check('Exhaust pipe', 'rigid'),
                check('Engine cowl attachments', 'checked'),
                check('Propeller', 'checked'),
                check('Propeller hub', 'no play'),
                check('Spinner', 'checked'),
                check('Air inlets', 'clear'),
                check('Gear box oil level', 'checked'),
                check('Nose gear', 'checked'),
                check('Engine oil', 'checked'),
                check('Canopy', 'clean'),
                check('LH landing gear', 'checked'),
                check('Pitot', 'clean'),
                check('Lights', 'checked'),
                check('LH nav lights', 'checked'),
                check('LH flap & aileron', 'checked')
            ]
        },
        {
            name: 'Before start',
            checks: [
                check('POH', 'CHECK LATEST EDITION and WITHIN REACH'),
                check('Canopy', 'CLOSED & LOCKED'),
                check('Parking brake', 'ON'),
                check('Front seats', 'ADJUSTED & LOCKED'),
                check('Belts & harnesses', 'ADJUSTED & FASTENED'),
                check('Flight controls', 'FREE & CORRECT'),
                check('Battery Master switch', 'ON'),
                check('CED lights auto test', 'MONITOR'),
                check('ALTERNATOR CB switch', 'ON'),
                check('Annunciator panel', 'TEST, SET DAY/NIGHT'),
                check('Circuit breakers', 'IN'),
                check('Elevator trim', 'MOVEMENT AND DIRECTION, SET FOR TO'),
                check('Fuel quantity', 'CHECK SUFFUCIENT FOR FLIGHT'),
                check('All electrical switches and avionics', ''),
                check('Headset', 'on & bluetooth linked'),
                check('SkyDemon', 'Go Flying')
            ]
        },
        {
            name: 'Engine start',
            checks: [
                check('Strobe light (Beacon)', 'ON'),
                check('Fuel level and temperature', 'CHECK'),
                check('Fuel selector', 'ON'),
                check('Alternate induction air', 'CLOSED'),
                check('Electrical fuel pump', 'ON'),
                check('Power lever (Thrust)', 'IDLE'),
                check('Propeller area', 'CLEAR'),
                check('Engine Master switch', 'ON'),
                check('FADEC-lights', 'CHECK OFF'),
                check('Glow control light', 'WAIT UNTIL OFF'),
                check('Starter', 'ENGAGE '),
                check('Check', 'OIL TEMP + PRESSURE / IDLE RPM 890'),
                check('CED warning light', 'ACKNOWLEDGE and CANCEL'),
                check('ALT light ', 'CHECK OFF'),
                check('Voltage', 'CHECK 14 Volt'),
                check('FADEC lights', 'CHECK OFF'),
                check('SkyDemon', 'Log engine start')
            ]
        },
        {
            name: 'After start',
            checks: [
                check('Electrical fuel pump', 'OFF'),
                check('Avionics master switch', 'ON'),
                check('COM/NAV', 'ON and SET'),
                check('Altimeter', 'SET'),
                check('Standby Attitude Module', 'CHECK'),
                check('Transponder', 'STBY'),
                check('Lights', 'ON')
            ]
        },
        {
            name: 'FADEC BACKUP BATTERY CHECK',
            checks: [
                check('Alternator', 'OFF, engine must operate normally'),
                check('Battery', 'OFF for minimum 10 seconds, engine must operate normally and NO red FADEC lights illuminated'),
                check('Battery Master switch', 'on'),
                check('ALTERNATOR CB switch', 'on'),
                check('Alternator light', 'CHECK OFF'),
                check('Voltmeter', 'CHECK IN GREEN ZONE')
            ]
        },
        {
            name: 'Taxi',
            checks: [
                check('Engine Warm-up: All CED LEDs', 'GREEN'),
                check('Parking brakes', 'off'),
                check('Brakes', 'test'),
                check('Flight instr (DG’s, slip/skid, rate of turn)', 'checked'),
                check('QNH', 'checked')
            ]
        },
        {
            name: 'Before take-off',
            checks: [
                check('Parking brake', 'SET'),
                check('Flight controls', 'FREE & CORRECT'),
                check('Flight & navigation instruments', 'CHECK & SET'),
                check('Cabin heat', 'SET AS REQUIRED'),
                check('Fuel valve', 'ON'),
                check('Fuel quantity', 'VERIFY SUFFICIENT FOR FLIGHT'),
                check('Elevator Trim CB', 'ON'),
                check('Elevator Trim control', 'CHECK & SET TO TAKEOFF'),
                check('FADEC', 'TEST'),
                check('Power lever FULL FORWARD', 'min 94%, RPM 2240-2300'),
                check('Power lever', 'IDLE'),
                check('Engine instruments & voltmeter', 'CHECK'),
                check('Flaps', 'Full down then to takeoff position'),
                check('Electrical Fuel pump', 'ON'),
                check('Radios & avionics', 'ON and SET'),
                check('Auto Pilot switch', 'OFF'),
                check('Power Lever friction', 'SET as desired'),
                check('Brakes', 'RELEASE')
            ]
        },
        { 
            name: 'FADEC TEST',
            checks: [
                check('Power lever', 'IDLE (both FADEC lights OFF)'),
                check('FADEC test button', 'PRESS & HOLD until test completed'),
                check('Both FADEC lights', 'ON, RPM increases'),
                check('FADEC switches automatically to B', 'FADEC B light ON'),
                check('FADEC switches automatically to A', 'FADEC A light ON'),
                check('During test, propeller control is activated, RPM decreases momentarily', 'FADAC A-light: OFF, RPM returns to idle and the test is completed'),
                check('FADEC test button', 'release')
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
                check('Power lever', 'FULL FORWARD'),
                check('Engine RPM', '2300 RPM'),
                check('Vr - Rotation speed', '61 KIAS'),
                check('Vx - Initial climb speed', '68 KIAS'),
                check('Vy - After obstacle clearance', '78 KIAS'),
                check('Flaps', '1st Notch -> UP'),
                check('Electrical Fuel pump', 'OFF')
            ]
        },
        { 
            name: 'Climb',
            checks: [
                check('Normal climb (right foot; flaps up + apply brakes)', 'check'),
                check('Best rate of climb', '78Kt'),
                check('Power Lever', 'FULL FORWARD'),
                check('Foots on the breaks, Positive climb; attitude check, speed check, normal rate of climb', 'check')
            ]
        },
        {
            name: 'Cruise',
            checks: [
                check('Power', 'MAX 100 %, recommended 75 % or less'),
                check('Fuel pump', 'off'),
                check('Landing lights', 'off'),
                check('Trim', 'adjust'),
                check('CED 125 and annunciator panel', 'MONITOR'),
                check('Fuel quantity and temperature', 'MONITOR'),
                check('FADAC warning lights', 'MONITOR')
            ]
        },
        {
            name: 'Descent',
            checks: [
                check('Weather obtained', 'QNH Set'),
                check('Top Of Decent', 'CHECK'),
                check('Safe altitude & speed', 'CHECK'),
                check('Power', 'Adjust as required'),
                check('Pull cabin heat to keep the coolant warm if power setting is low. If coolant temperature in amber range & engine caution lamp illuminated, increase power to recover GREEN coolant temperature range', 'SET')
            ]
        },

        {
            name: 'After take-off',
            alternate: 'Landing',
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
                check('Carburetor heat', 'checked'),
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
            alternate: 'After take-off',
            checks: [
                check('Carburetor heat', 'off')
            ]
        },
        {
            name: 'After landing',
            checks: [
                check('Electrical fuel pump', 'off'),
                check('Pitot heat', 'off'),
                check('Landing light', 'off', ['day']),
                check('Recognition light', 'off', ['day']),
                check('Strobe light', 'fin'),
                check('Transponder', 'standby'),
                check('Flaps', 'up')
            ]
        },
        {
            name: 'Shutdown',
            alternate: 'Before start',
            checks: [
                check('Avionics master switch', 'off'),
                check('Mixture', 'cut off'),
                check('Throttle', 'closed'),
                check('Ignition', 'off & key removed'),
                check('Electrical switches', 'all off'),
                check('Parking brake', 'as required'),
                check('Trims', 'neutral'),
                check('Control lock', 'as required'),
                check('SkyDemon', 'Log engine off'),
                check('Headset', 'Off')
            ]
        }
    ]
}
