export const allFlightConditions = ['day', 'night'] as const
export type FlightCondition = (typeof allFlightConditions)[number]

export interface Check {
    item: string
    confirm: string
    conditions: FlightCondition[]
}

export const check = (item: string, confirm: string, conditions: FlightCondition[] = ['day', 'night']) => ({
    item,
    confirm,
    conditions
})


export interface Phase {
    name: string
    alternate?: string
    checks: Check[]
}

export interface Checklist {
    name: string
    phases: Phase[]
}
