import { Status } from 'enums/status'
import { createSignal } from 'solid-js'
import { JournalEntry } from 'types/journalEntry'
import { getDirectus, getDirectusConnection } from './directusService'

const [journalEntries] = createSignal<JournalEntry[]>([])

const fetchAllJournalEntries = async (): Promise<JournalEntry[]> => {
    const directus = getDirectus()
    if (!directus) return []

    const connection = getDirectusConnection(directus)

    if (!connection) return []

    const result = await connection
        .then(async (): Promise<JournalEntry[]> => {
            return await directus
                .items('journal')
                .readByQuery({
                    filter: {
                        status: Status.PUBLISHED,
                    },
                    sort: ['-date_created'],
                })
                .then(async (response) => response.data as JournalEntry[])
        })
        .catch(() => {
            console.error('Invalid credentials')
            return []
        })

    return result
}

const getJournalEntries = async (): Promise<JournalEntry[]> => {
    if (journalEntries().length > 0) return journalEntries()

    const allJournalEntries = await fetchAllJournalEntries()
    allJournalEntries.forEach((entry) => journalEntries().push(entry))

    return journalEntries()
}

export { getJournalEntries, journalEntries }
