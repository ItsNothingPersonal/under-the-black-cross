import { RoadName } from 'enums/roadName'
import { DateTime } from 'luxon'

export interface Road {
    id: number
    date_created?: DateTime
    date_updated?: DateTime
    status: string
    name: RoadName
    aura: string
    pathVirtueA: string
    pathVirtueB: string
    sobriquet: string
}
