import { CharacterStatus } from 'enums/characterStatus'
import { ClanName } from 'enums/clan'
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
    sire?: string
    status: Status
    surname?: string
}
