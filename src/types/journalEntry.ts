import { Status } from 'enums/status'
import { DateTime } from 'luxon'

export interface JournalEntry {
    date_created?: DateTime
    date_updated?: DateTime
    status: Status
    heading: string
    content: string
}
