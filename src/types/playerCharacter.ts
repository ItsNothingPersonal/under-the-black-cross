import { CharacterStatus } from 'enums/characterStatus'
import { ClanName } from 'enums/clanName'
import { RoadName } from 'enums/roadName'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { DateTime } from 'luxon'

export interface PlayerCharacter {
    sex?: Sex
    apparentAge?: string
    characterImage?: string
    characterStatus?: CharacterStatus
    clan?: ClanName | undefined
    date_created?: DateTime
    date_updated?: DateTime
    embraced?: string
    generation?: number
    position?: string
    prename: string
    surname?: string
    sire_prename?: string
    sire_surname?: string
    road?: RoadName | undefined
    status: Status
}
