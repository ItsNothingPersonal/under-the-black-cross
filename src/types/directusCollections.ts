import { Clan } from './clan'
import { ExperienceHistoryEntryDirectus } from './experienceHistoryEntryDirectus'
import { JournalEntry } from './journalEntry'
import { NonPlayerCharacterDirectus } from './nonPlayerCharacterDirectus'
import { PlayerCharacterDirectus } from './playerCharacterDirectus'
import { Road } from './road'
import { RoadInformation } from './roadInformation'

export type DirectusCollections = {
    playerCharacter: PlayerCharacterDirectus
    nonPlayerCharacter: NonPlayerCharacterDirectus
    clan: Clan
    journal: JournalEntry
    experienceHistory: ExperienceHistoryEntryDirectus
    road: Road
    roadInformation: RoadInformation
}
