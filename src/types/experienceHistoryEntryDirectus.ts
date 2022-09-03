import { ExperienceHistoryEntry } from './experienceHistoryEntry'

export type ExperienceHistoryEntryDirectus = Omit<
    ExperienceHistoryEntry,
    'gameDate'
> & {
    gameDate: string
}
