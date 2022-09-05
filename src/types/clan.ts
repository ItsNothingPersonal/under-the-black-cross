import { ClanName } from 'enums/clan'
import { DateTime } from 'luxon'

export interface Clan {
    id: number
    date_created?: DateTime
    date_updated?: DateTime
    status: string
    name: ClanName
}
