export const allFlightConditions = ['day', 'night'] as const
export type FlightCondition = (typeof allFlightConditions)[number]

export interface Check {
    item: string
    confirm: string
    conditions?: FlightCondition[]
    isChecked?: boolean
    index?: number
}

export const check = (item: string, confirm: string, conditions: FlightCondition[] = ['day', 'night'], isChecked?: boolean) => ({
    item,
    confirm,
    conditions,
    isChecked
})


export interface Phase {
    name: string
    alternate?: string
    isReadAndDo?: boolean
    isEmergency?: boolean
    checks: Check[]
}

export interface Checklist {
    name: string
    phases: Phase[]
}
