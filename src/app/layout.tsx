import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css'

import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Checklist',
    description: 'Flight checklists made comfortable',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Checklist</title>
            <meta name="application-name" content="Bert's Checklist"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
            <meta name="apple-mobile-web-app-title" content="Bert's Checklist"/>
            <meta name="description" content="Flight checklists made comfortable"/>
            <meta name="mobile-web-app-capable" content="yes"/>

            <link rel="apple-touch-icon" href="/checklist.png"/>

            <link rel="icon" type="image/png" sizes="512x512" href="/checklist.png"/>
            <link rel="icon" type="image/ico" sizes="256x256" href="/checklist.ico"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="shortcut icon" href="/favicon.ico"/>

            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Bert's Checklist"/>
            <meta property="og:description" content="Flight checklists made comfortable"/>
            <meta property="og:site_name" content="Bert's Checklist"/>
            <meta property="og:url" content="https://checklist.witspirit.be"/>
            <meta property="og:image" content="https://checklist.witspirit.be/checklist.png"/>
        </head>

        <body>{children}</body>
        </html>
    )
}
