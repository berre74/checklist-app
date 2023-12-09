'use client'

import Image from 'next/image'
import styles from './page.module.css'
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
  // return (
  //   <main className={styles.main}>
  //     <div className={styles.description}>
  //       <p>
  //         Get started by editing&nbsp;
  //         <code className={styles.code}>src/app/page.tsx</code>
  //       </p>
  //       <div>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{' '}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className={styles.vercelLogo}
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>
  //
  //     <div className={styles.center}>
  //       <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>
  //
  //     <div className={styles.grid}>
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Docs <span>-&gt;</span>
  //         </h2>
  //         <p>Find in-depth information about Next.js features and API.</p>
  //       </a>
  //
  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Learn <span>-&gt;</span>
  //         </h2>
  //         <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
  //       </a>
  //
  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Templates <span>-&gt;</span>
  //         </h2>
  //         <p>Explore starter templates for Next.js.</p>
  //       </a>
  //
  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Deploy <span>-&gt;</span>
  //         </h2>
  //         <p>
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // )
}
