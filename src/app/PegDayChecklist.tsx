import {Phase} from "@/app/checklist/Phase";
import {Check} from "@/app/checklist/Check";
import {Checklist} from "@/app/checklist/Checklist";

export const PegDayChecklist = () => (
    <Checklist title={'OO-PEG Day'}>

        <Phase name={'Before start'}>
            <Check item={'Documents'} confirm={'on-board & checked'}/>
            <Check item={'Seats & belts'} confirm={'adjusted & locked'}/>
            <Check item={'Doors'} confirm={'closed & locked'}/>
            <Check item={'ELT switch'} confirm={'armed'}/>
            <Check item={'STBY instrument'} confirm={'armed'}/>
            <Check item={'Electrical switches'} confirm={'off'}/>
            <Check item={'Avionics master switch'} confirm={'off'}/>
            <Check item={'Throttle'} confirm={'closed'}/>
            <Check item={'Mixture'} confirm={'full rich'}/>
            <Check item={'Carburator heat'} confirm={'off'}/>
            <Check item={'Circuit breakers'} confirm={'all in'}/>
            <Check item={'Ignition'} confirm={'off & key ready'}/>
            <Check item={'Fuel selector '} confirm={'owest tank'}/>
            <Check item={'Alternate static'} confirm={'checked & off'}/>
            <Check item={'Flaps'} confirm={'checked & set'}/>
            <Check item={'Master switch, alternator & standby alternator'} confirm={'on'}/>
            <Check item={'Annunciator panel'} confirm={'tested'}/>
            <Check item={'Multifunction display'} confirm={'set up'}/>
            <Check item={'Fuel & Engine page'} confirm={'set & checked'}/>
        </Phase>

        <Phase name={'Engine start'}>
            <Check item={'Brakes'} confirm={'set'}/>
            <Check item={'Electrical fuel pump'} confirm={'on'}/>
            <Check item={'Fin strobe light'} confirm={'on'}/>
            <Check item={'Throttle'} confirm={'1 cm open'}/>
            <Check item={'Primer'} confirm={'as required'}/>
            <Check item={'Propeller area'} confirm={'clear'}/>
            <Check item={'Starter'} confirm={'engage'}/>
            <Check item={'Engine rpm'} confirm={'adjust to 1000-1200'}/>
            <Check item={'Oil pressure'} confirm={'rising'}/>
            <Check item={'Alternator output'} confirm={'checked'}/>
        </Phase>

        <Phase name={'After start'}>
            <Check item={'Electrical fuel pump'} confirm={'off'}/>
            <Check item={'Avionics master switch'} confirm={'on'}/>
            <Check item={'Annunciator panel'} confirm={'checked'}/>
            <Check item={'Engine instruments'} confirm={'checked'}/>
            <Check item={'PFD instruments'} confirm={'checked & set'}/>
            <Check item={'STBY attitude indicator'} confirm={'tested'}/>
            <Check item={'Trim interrupt & overpower'} confirm={'checked'}/>
            <Check item={'Radios and navaids'} confirm={'on & set'}/>
        </Phase>

        <Phase name={'Taxi'}>
            <Check item={'Brakes'} confirm={'checked'}/>
            <Check item={'Flight instruments'} confirm={'checked'}/>

            {/*
            Flight instruments is probably the old
            - Pin in
            - Ball out
            - Horizon stable
            - Gyro and compass increasing / decreasing
            - ADF tracking
            */}
        </Phase>

        <Phase name={'Engine run-up'}>
            <Check item={'Fuel selector'} confirm={'fullest tank'}/>
            <Check item={'Throttle'} confirm={'2000 rpm'}/>
            <Check item={'Engine instruments'} confirm={'in limits'}/>
            <Check item={'Heading indicator'} confirm={'aligned'}/>
            <Check item={'Ignition'} confirm={'checked 175/50'}/>
            <Check item={'Carburator heat'} confirm={'checked'}/>
            <Check item={'Throttle'} confirm={'full'}/>
            <Check item={'STBY alternator'} confirm={'checked'}/>
            <Check item={'Throttle'} confirm={'idle, then 1000 rpm'}/>
        </Phase>

        <Phase name={'Before take-off'}>
            <Check item={'Engine run-up'} confirm={'performed'}/>
            <Check item={'Doors & windows'} confirm={'locked'}/>
            <Check item={'Seats & belts'} confirm={'locked and tight'}/>
            <Check item={'Flight controls'} confirm={'free and correct'}/>
            <Check item={'Primary flight display, Multifunction display'} confirm={'correct'}/>
            <Check item={'Electrical fuel pump'} confirm={'on'}/>
            <Check item={'Fuel selector'} confirm={'fullest tank'}/>
            <Check item={'Ignition'} confirm={'both'}/>
            <Check item={'Mixture'} confirm={'full rich'}/>
            <Check item={'Carburator heat'} confirm={'off'}/>
            <Check item={'Flaps'} confirm={'set'}/>
            <Check item={'Trims'} confirm={'set'}/>
            <Check item={'Departure briefing'} confirm={'reviewed'}/>

            {/*
            Departure briefing includes:
            Engine failure before take-off -> throttle idle & stop
            Engine failure after take-off
              Best glide 73 kts
              No turns below 800 ft
              No turns more than 30 degrees left or right
              Nose in the wind, which is left/right
            Normal procedure
              Rotate at 60
              Climb at 70 (until 10000 ft)
              First turn and direction, clearance
            */}
        </Phase>

        <Phase name={'Line-up'}>
            <Check item={'Approach area'} confirm={'clear'}/>
            <Check item={'Pitot heat'} confirm={'as required'}/>
            <Check item={'Landing light'} confirm={'on'}/>
            <Check item={'Recognition lights'} confirm={'on'}/>
            <Check item={'Strobe lights'} confirm={'on'}/>
            <Check item={'Transponder'} confirm={'ALT'}/>
            <Check item={'Threshold elevation'} confirm={'checked'}/>
            <Check item={'QFU'} confirm={'checked'}/>
        </Phase>

        <Phase name={'Take-off'}>
            <Check item={'Engine parameters'} confirm={'checked'}/>
            <Check item={'Carburator heat'} confirm={'off'}/>
            <Check item={'Airspeed indication'} confirm={'checked'}/>
        </Phase>

        <Phase name={'After take-off'}>
            <Check item={'Brakes'} confirm={'applied'}/>
            <Check item={'Engine pressures and temperatures'} confirm={'in limits'}/>
            <Check item={'Electrical fuel pump'} confirm={'off'}/>
            <Check item={'Landing light'} confirm={'off'}/>
            <Check item={'Flaps'} confirm={'up'}/>
        </Phase>

        <Phase name={'Approach'}>
            <Check item={'Heading indicator'} confirm={'checked'}/>
            <Check item={'Altimeters'} confirm={'set'}/>
            <Check item={'Landing light'} confirm={'on'}/>
            <Check item={'Electrical fuel pump'} confirm={'on'}/>
            <Check item={'Engine instruments'} confirm={'checked'}/>
            <Check item={'Mixture'} confirm={'as required'}/>
            <Check item={'Carburator heat'} confirm={'checked'}/>
            <Check item={'Fuel selector'} confirm={'fullest tank'}/>
            <Check item={'Approach briefing'} confirm={'reviewed'}/>

            {/*
            What constitutes the approach briefing ?
            Runway in use ? Approach clearance ?
            */}
        </Phase>

        <Phase name={'Landing'}>
            <Check item={'Approach area'} confirm={'clear'}/>
            <Check item={'Brakes'} confirm={'checked'}/>
            <Check item={'Mixture'} confirm={'full rich'}/>
            <Check item={'Flaps'} confirm={'set'}/>
        </Phase>

        <Phase name={'Short final'} alternate={'Take-off'}>
            <Check item={'Carburator heat'} confirm={'off'}/>
        </Phase>

        <Phase name={'After landing'}>
            <Check item={'Electrical fuel pump'} confirm={'off'}/>
            <Check item={'Pitot heat'} confirm={'off'}/>
            <Check item={'Landing light'} confirm={'off'}/>
            <Check item={'Recognition light'} confirm={'off'}/>
            <Check item={'Strobe light'} confirm={'fin'}/>
            <Check item={'Transponder'} confirm={'standby'}/>
            <Check item={'Flaps'} confirm={'up'}/>
        </Phase>

        <Phase name={'Shutdown'}>
            <Check item={'Avionics master switch'} confirm={'off'}/>
            <Check item={'Throttle'} confirm={'closed'}/>
            <Check item={'Mixture'} confirm={'cut off'}/>
            <Check item={'Ignition'} confirm={'off & key removed'}/>
            <Check item={'Electrical switches'} confirm={'all off'}/>
            <Check item={'Parking brake'} confirm={'as required'}/>
            <Check item={'Trims'} confirm={'neutral'}/>
            <Check item={'Control lock'} confirm={'as required'}/>
        </Phase>

    </Checklist>
)