'use client'

import {Checklist} from "@/app/checklist/Checklist";
import {Phase} from "@/app/checklist/Phase";
import {Check} from "@/app/checklist/Check";

export default function Home() {
  return <Checklist title={'OO-PEG Day'}>
    <Phase name={'Before start'}>
      <Check item={'Documents'} confirm={'on-board & checked'} />
      <Check item={'Seats & belts'} confirm={'adjusted & locked'} />
      <Check item={'Doors'} confirm={'closed & locked'} />
      <Check item={'ELT switch'} confirm={'armed'} />
      <Check item={'STBY instrument'} confirm={'armed'} />
      <Check item={'Electrical switches'} confirm={'off'} />
      <Check item={'Avionics master switch'} confirm={'off'} />
      <Check item={'Throttle'} confirm={'closed'} />
      <Check item={'Mixture'} confirm={'full rich'} />
      <Check item={'Carburator heat'} confirm={'off'} />
      <Check item={'Circuit breakers'} confirm={'all in'} />
      <Check item={'Ignition'} confirm={'off & key ready'} />
      <Check item={'Fuel selector '} confirm={'owest tank'} />
      <Check item={'Alternate static'} confirm={'checked & off'} />
      <Check item={'Flaps'} confirm={'checked & set'} />
      <Check item={'Master switch, alternator & standby alternator'} confirm={'on'} />
      <Check item={'Annunciator panel'} confirm={'tested'} />
      <Check item={'Multifunction display'} confirm={'set up'} />
      <Check item={'Fuel & Engine page'} confirm={'set & checked'} />
    </Phase>
    <Phase name={'Engine start'}>
      <Check item={'Brakes'} confirm={'set'} />
      <Check item={'Electrical fuel pump'} confirm={'on'} />
      <Check item={'Fin strobe light'} confirm={'on'} />
      <Check item={'Throttle'} confirm={'1 cm open'} />
      <Check item={'Primer'} confirm={'as required'} />
      <Check item={'Propeller area'} confirm={'clear'} />
      <Check item={'Starter'} confirm={'engage'} />
      <Check item={'Engine rpm'} confirm={'adjust to 1000-1200'} />
      <Check item={'Oil pressure'} confirm={'rising'} />
      <Check item={'Alternator output'} confirm={'checked'} />
    </Phase>

  </Checklist>
}
