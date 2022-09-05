import { Status } from 'enums/status'
import { DateTime } from 'luxon'
import { createSignal } from 'solid-js'
import { ExperienceHistoryEntry } from 'types/experienceHistoryEntry'
import { ExperienceHistoryEntryDirectus } from 'types/experienceHistoryEntryDirectus'
import { getDirectus, getDirectusConnection } from './directusService'

const [experienceHistoryEntries] = createSignal<ExperienceHistoryEntry[]>([])

const fetchAllExperienceHistoryEntries = async (): Promise<
    ExperienceHistoryEntry[]
> => {
    const directus = getDirectus()
    if (!directus) return []

    const connection = getDirectusConnection(directus)

    if (!connection) return []

    const result = await connection
        .then(async (): Promise<ExperienceHistoryEntry[]> => {
            return await directus
                .items('experienceHistory')
                .readByQuery({
                    filter: {
                        status: Status.PUBLISHED,
                    },
                })
                .then(async (response) => {
                    return (
                        response.data as ExperienceHistoryEntryDirectus[]
                    ).map(mapServerToClient)
                })
        })
        .catch(() => {
            console.error('Invalid credentials')
            return []
        })

    return result
}

const getExperienceHistoryEntries = async (): Promise<
    ExperienceHistoryEntry[]
> => {
    if (experienceHistoryEntries().length > 0) return experienceHistoryEntries()

    const allExperienceHistoryEntries = await fetchAllExperienceHistoryEntries()
    allExperienceHistoryEntries.forEach((entry) =>
        experienceHistoryEntries().push(entry)
    )

    return experienceHistoryEntries()
}

const mapServerToClient = (
    experienceHistoryEntryServer: ExperienceHistoryEntryDirectus
): ExperienceHistoryEntry => {
    let experienceHistoryEntry: ExperienceHistoryEntry = {
        status: experienceHistoryEntryServer.status,
        date_created: experienceHistoryEntryServer.date_created,
        date_updated: experienceHistoryEntryServer.date_updated,
        gameDate: DateTime.fromISO(experienceHistoryEntryServer.gameDate),
        experienceChange: experienceHistoryEntryServer.experienceChange,
    }

    return experienceHistoryEntry
}

export { getExperienceHistoryEntries, experienceHistoryEntries }
