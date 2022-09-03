import { Status } from 'enums/status'
import { createSignal } from 'solid-js'
import { Clan } from 'types/clan'
import { getDirectus, getDirectusConnection } from './directusService'

const [clans] = createSignal<Map<number, string>>(new Map())

const fetchAllClans = async (): Promise<Clan[]> => {
    const directus = getDirectus()
    if (!directus) return []

    const connection = getDirectusConnection(directus)

    if (!connection) return []

    return await connection
        .then(async (): Promise<Clan[]> => {
            return await directus
                .items('clan')
                .readByQuery({
                    filter: {
                        status: Status.PUBLISHED,
                    },
                })
                .then((response) => response.data as Clan[])
        })
        .catch(() => {
            console.error('Invalid credentials')
            return []
        })
}

const getClans = async (): Promise<Map<number, string>> => {
    if (clans().size === 0) {
        const allClans = await fetchAllClans()
        allClans.forEach((clan) => clans().set(clan.id, clan.name))
    }

    return clans()
}

export { getClans, clans }
