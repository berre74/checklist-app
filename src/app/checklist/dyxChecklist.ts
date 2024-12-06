import { check, Checklist } from "@/app/checklist/checklist-support";

export const dyxChecklist: Checklist = {
    name: 'PH-DYX',
    phases: [
        {
            name: 'ENGINE FAILURE During takeoff roll',
            isEmergency: true,
            checks: [
                check('Thrust Lever', 'IDLE'),
                check('Apply brakes and hold direction', 'Avoid obstructions'),
                check('Engine Master switch', 'OFF'),
                check('Battery and ALT switch', 'OFF'),
                check('Fuel selector', 'OFF'),
                check('Emergency ground egress', 'As required')
            ]
        },
        {
            name: 'ENGINE FAILURE Immediately after takeoff',
            isEmergency: true,
            checks: [
                check('Establish glide', '75-78 KIAS'),
                check('Land straight ahead', 'Avoid obstructions'),
                check('FADEC AlB Switch', 'Force B'),
                check('Battery and ALT switch', 'Check ON'),
                check('After landing', ''),
                check('Engine Master switch', 'OFF'),
                check('Battery and ALT switch', 'OFF'),
                check('Fuel selector', 'OFF'),
                check('Wing flaps', 'T/O or Landing recommended'),
                check('Touch down speed', 'minimum'),
                check('When aircraft has stopped', 'Emergency ground egress')
            ]
        },
        {
            name: 'FADEC malfunction',
            isEmergency: true,
            checks: [
                check('FADEC-Test knob', 'at least 2 seconds'),
                check('POH', 'Page 3-6')
            ]
        },
        {
            name: 'ENGINE SHUT-DOWN IN FLIGHT',
            isEmergency: true,
            checks: [
                check('Reduce speed', '<100 KIAS'),
                check('Engine Master switch', 'OFF'),
                check('Fuel selector', 'OFF'),
                check('Electric fuel pump', 'OFF'),
                check('If the propeller has also to be stopped', '<60-65 KIAS, Flaps TO'),
                check('When the propeller is stopped', 'Glide at 70- 75 KIAS/ Flaps TO')
            ]
        },
        {
            name: 'ENGINE FAILURE During Flight',
            isEmergency: true,
            alternate: 'Landing without engine power',
            checks: [
                check('Establish glide ratio 9', '78 KIAS'),
                check('Fuel selector', 'OPEN'),
                check('Electric fuel pump', 'ON'),
                check('FADEC AlB Switch', 'Force B'),
                check('if no help, FADEC', 'AUTO'),
                check('If no restart, ENGINE MASTER reset', 'OFF->ON'),
                check('Battery and ALT switch', 'check ON'),
                check('Engine and fuel level gauges /alarm panel', 'cause of failure?'),
                check('FADEC A, B circuit breakers', 'Check ON'),
                check('If low/no fuel', 'Open aux. tank transfer valve'),
                check('If propeller/engine not blocked: Starter', 'ON')
            ]
        },
        {
            name: 'Restart after engine failure',
            isEmergency: true,
            checks: [
                check('Establish glide ratio 9', '78 KIAS'),
                check('Reliable restart altitude', 'Bellow 13000ft'),
                check('Battery and ALT switch', 'Check ON'),
                check('Fuel selector', 'OPEN'),
                check('Electric fuel pump', 'ON'),
                check('Power lever', 'IDLE'),
                check('ENGINE MASTER reset', 'OFF->ON'),
                check('If propeller/engine not blocked: Starter', 'ON'),

                check('Engine parameters', 'Check'),
                check('Power lever, once engine runs smoothly at idle', 'Adjust'),
                check('Engine operation', 'Check available power / engine parameters')
            ]
        },
        {
            name: 'FIRE on the ground',
            isEmergency: true,
            checks: [
                check('Engine Master switch', 'OFF'),
                check('Fuel selector', 'OFF'),
                check('Electric fuel pump', 'OFF'),
                check('Battery + alternator switch', 'OFF'),
                check('Emergency ground egress', 'As required'),
                check('fire extinguisher', 'Extinguish the flames')
            ]
        },
        {
            name: 'FIRE in flight',
            isEmergency: true,
            alternate: 'Landing without engine power',
            checks: [
                check('Power lever', 'Reduce'),
                check('Reduce speed', '<100 KIAS'),


                check('Engine Master switch', 'OFF'),
                check('Fuel selector', 'OFF'),
                check('Electric fuel pump', 'OFF'),

                check('Battery + alternator switch', 'OFF'),
                check('Cabin heat', 'OFF'),
                check('Establish glide ratio 9', '78 KIAS'),
                check('Cabin ventilation', 'Adjust for lowest smoke in the cabin'),
                check('fire extinguisher', 'Use as required')
            ]
        },
        {
            name: 'Landing without engine power',
            isEmergency: true,
            checks: [
                check('Establish glide ratio 9', '78 KIAS'),
                check('Seat belts and harness', 'Tight'),
                check('Electric fuel pump', 'ON'),
                check('Fuel selector', 'OFF'),
                check('Engine Master switch', 'OFF'),
                check('Battery and ALT switch', 'OFF'),
                check('Flaps, when field can easily be reached', 'Full'),
                check('Speed', 'Minimum'),
                check('Brakes', 'As required'),
                check('When aircraft has stopped', 'Emergency ground egress')
            ]
        },
        {
            name: '1a. Preflight - interior',
            isReadAndDo: false,
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
                check('ELT', 'checked'),
                check('Battery switch', 'off'),
                check('Aircraft documents', 'on board'),
                check('Luggage', 'properly stowed')
            ]
        },
        {
            name: '1b. Preflight - exterior',
            isReadAndDo: false,
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
            name: '2. Before start',
            isReadAndDo: true,
            checks: [
                check('Tow Bar', 'Stowed'),
                check('POH', 'CHECK LATEST EDITION and WITHIN REACH'),
                check('Key', 'INSERTED'),
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
                check('All electrical switches and avionics', 'OFF'),
                check('Headset', 'on & bluetooth linked'),
                check('Passenger briefing', 'DONE'),
                check('Aerolync', 'Start new flight'),
                check('SafeSky', 'Take Off'),
                check('SkyDemon', 'Go Flying')
            ]
        },
        {
            name: '3. Engine start',
            isReadAndDo: true,
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
            name: '4. After Engine Start',
            isReadAndDo: false,
            checks: [
                check('Electrical fuel pump', 'OFF'),
                check('FADEC BACKUP BATTERY CHECK', 'SEE NEXT PAGE'),
                check('Avionics master switch', 'ON'),
                check('COM/NAV', 'ON and SET'),
                check('Heaset intercom', 'CHECK'),
                check('ATIS', 'Information *'),
                check('Altimeter', 'SET'),
                check('Standby Attitude Module', 'CHECK'),
                check('Transponder', 'STBY/2000'),
                check('Lights', 'ON')
            ]
        },
        {
            name: '4b. FADEC BACKUP BATTERY CHECK',
            isReadAndDo: false,
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
            name: '5. Taxi',
            checks: [
                check('Contact Antwerp Ground', 'Goodmoring'),
                check('@Hangar, Req Taxi for NAV to **** leaving via **** 1500ft', 'Repeat'),
                check('Engine Warm-up: All CED LEDs', 'GREEN'),
                check('Parking brakes', 'OFF'),
                check('Brakes', 'TEST'),
                check('Flight instr (DG’s, slip/skid, rate of turn, att steady)', 'READ'),
                check('QNH', 'SET'),
                check('PIC speech', 'FPL, Risks, Engine Failure')
            ]
        },
        {
            name: '6a. Before take-off',
            isReadAndDo: true,
            checks: [
                check('Parking brake', 'SET'),
                check('Flight controls', 'FREE & CORRECT'),
                check('Flight & navigation instruments', 'CHECK & SET'),
                check('Cabin heat', 'SET AS REQUIRED'),
                check('Fuel valve', 'ON'),
                check('Fuel quantity', 'VERIFY SUFFICIENT FOR FLIGHT'),
                check('Elevator Trim CB', 'ON'),
                check('Power lever', 'IDLE')
            ]
        },
        {
            name: '6b. FADEC TEST',
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
            name: '7. Line-up (FLIPT)',
            checks: [
                check('Flaps', 'Full down then to takeoff position'),
                check('Landing Lights', 'on'),
                check('Recognition Lights', 'on'),
                check('Strobe Lights', 'on'),
                check('Engine Instruments & voltmeter', 'CHECK'),
                check('Pitot heat', 'if required'),
                check('Trims', 'SET TO TAKEOFF'),
                check('Transponder', 'ALT'),
                check('Electrical Fuel pump', 'ON'),
                check('Radios & avionics', 'ON and SET'),
                check('Auto Pilot switch', 'OFF'),
                check('Power Lever friction', 'SET as desired'),
                check('Threshold elevation', 'checked'),
                check('RWY QFU', 'checked'),
                check('Approach area', 'clear'),
                check('Brakes', 'RELEASE')
            ]
        },
        {
            name: '7b. Take-off',
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
            name: '8a. Climb',
            checks: [
                check('Normal climb (right foot; flaps up + apply brakes)', 'check'),
                check('Best rate of climb', '78Kt'),
                check('Power Lever', 'FULL FORWARD'),
                check('Foots on the breaks', 'CHECK'),
                check('Positive climb rate; attitude check, speed check', 'CHECK')
            ]
        },
        {
            name: '8b. Cruise',
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
            name: '8c. THARIF',
            checks: [
                check('Timing', 'CHRONO CHECK'),
                check('Track/Heading', 'CHECK'),
                check('Altitude', 'CHECK'),
                check('Radio', 'PREPARE NEXT'),
                check('Instruments', 'CED + VOLTAGE CHECK'),
                check('Fuel', 'CHECK')
            ]
        },
        {
            name: '9a. Descent',
            checks: [
                check('Weather obtained', 'QNH Set'),
                check('Top Of Decent', 'CHECK'),
                check('Safe altitude & speed', 'CHECK'),
                check('Power', 'Adjust as required'),
                check('Pull cabin heat to keep the coolant warm if power setting is low. If coolant temperature in amber range & engine caution lamp illuminated, increase power to recover GREEN coolant temperature range', 'SET')
            ]
        },
        {
            name: '9b. Approach or Downwind',
            checks: [
                check('Electrical Fuel pump', 'ON'),
                check('Seats belts', 'CHECK'),
                check('Flaps', '1st NOTCH Below 92 KIAS'),
                check('Speed', 'Recommended 81 KIAS'),
                check('Trim', 'ADJUST'),
                check('Landing lights', 'ON')
            ]
        },
        {
            name: '9c. Final',
            checks: [
                check('Flaps', '2nd NOTCH Below 81 KIAS'),
                check('Approach speed', 'Recommended 70 KIAS'),
                check('Trim', 'SET')
            ]
        },
        {
            name: 'Landing OVERSHOOT / GO AROUND',
            isEmergency: true,
            checks: [
                check('Pitch attitude', 'TAKEOFF'),
                check('Power lever', 'FULL POWER'),
                check('Speed', 'Recommended 67 KIAS, Progressively raise flaps to 1st notch, then establish normal climb speed, Recommended 78 KIAS')
            ]
        },
        {
            name: '10. After Landing',
            checks: [
                check('Brakes', 'applied'),
                check('Electrical fuel pump', 'off'),
                check('Landing light', 'off'),
                check('Taxi lights', 'ON'),
                check('Flaps', 'up'),
                check('Pitot Heat', 'OFF'),
                check('Transponder', 'STDBY'),
                check('Engine pressures and temperatures', 'in limits')
            ]
        },
        {
            name: '11. Engine Shutdown',
            isReadAndDo: true,
            checks: [
                check('Parking brake', 'SET'),
                check('Power lever', 'IDLE (1 minute)'),
                check('Flaps', 'DOWN'),
                check('Avionics master switch', 'OFF'),
                check('Engine master switch', 'OFF'),
                check('SkyDemon', 'Log engine off'),
                check('Aerolync', 'Stop flight'),
                check('SafeSky', 'Stop flight'),
                check('Headset', 'Off')
            ]
        },
        {
            name: '12. After Engine Stop',
            alternate: 'Before start',
            checks: [
                check('Strobe light (Beacon)', 'OFF'),
                check('Battery switch', 'OFF'),
                check('Key', 'REMOVED'),
                check('Wheel shocks in place', 'Release parking brake'),
                check('Note time & Engine hours', 'CHECK'),
                check('Close FPL', 'CHECK'),
                check('Fill in logbook PH-DYX', 'CHECK'),
                check('Fill in logbook pilot', 'CHECK')
            ]
        }
    ]
}
