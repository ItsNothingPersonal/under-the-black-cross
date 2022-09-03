import { Status } from 'enums/status'
import { DateTime } from 'luxon'

export interface ExperienceHistoryEntry {
    date_created?: DateTime
    date_updated?: DateTime
    status: Status
    gameDate: DateTime
    experienceChange: number
}
