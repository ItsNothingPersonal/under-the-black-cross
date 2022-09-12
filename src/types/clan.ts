import { ClanName } from 'enums/clanName'
import { DateTime } from 'luxon'

export interface Clan {
    id: number
    date_created?: DateTime
    date_updated?: DateTime
    status: string
    name: ClanName
}
