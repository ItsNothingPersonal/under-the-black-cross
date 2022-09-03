import { Clan } from './clan'
import { ExperienceHistoryEntryDirectus } from './experienceHistoryEntryDirectus'
import { JournalEntry } from './journalEntry'
import { NonPlayerCharacterDirectus } from './nonPlayerCharacterDirectus'
import { PlayerCharacterDirectus } from './playerCharacterDirectus'

export type DirectusCollections = {
    playerCharacter: PlayerCharacterDirectus
    nonPlayerCharacter: NonPlayerCharacterDirectus
    clan: Clan
    journal: JournalEntry
    experienceHistory: ExperienceHistoryEntryDirectus
}
