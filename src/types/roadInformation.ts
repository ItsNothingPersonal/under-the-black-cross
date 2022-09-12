import { DateTime } from 'luxon'

export interface RoadInformation {
    id: number
    date_created?: DateTime
    date_updated?: DateTime
    status: string
    name: number
    score: number
    minimumWrongdoing: string
    rationale: string
}
