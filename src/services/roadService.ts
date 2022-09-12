import { Status } from 'enums/status'
import { createSignal } from 'solid-js'
import { Road } from 'types/road'
import { getDirectus, getDirectusConnection } from './directusService'

const [roads] = createSignal<Map<number, Road>>(new Map())

const fetchAllRoads = async (): Promise<Road[]> => {
    const directus = getDirectus()
    if (!directus) return []

    const connection = getDirectusConnection(directus)

    if (!connection) return []

    return await connection
        .then(async (): Promise<Road[]> => {
            return await directus
                .items('road')
                .readByQuery({
                    filter: {
                        status: Status.PUBLISHED,
                    },
                    sort: ['name'],
                })
                .then((response) => response.data as Road[])
        })
        .catch(() => {
            console.error('Invalid credentials')
            return []
        })
}

const getRoads = async (): Promise<Map<number, Road>> => {
    if (roads().size === 0) {
        const allRoads = await fetchAllRoads()
        allRoads.forEach((road) => roads().set(road.id, road))
    }
    return roads()
}

const getRoadByName = async (name: string): Promise<Road | undefined> => {
    const directus = getDirectus()
    if (!directus) return

    const connection = getDirectusConnection(directus)

    if (!connection) return

    return await connection
        .then(async (): Promise<Road | undefined> => {
            return await directus
                .items('road')
                .readByQuery({
                    limit: 1,
                    filter: {
                        status: Status.PUBLISHED,
                        name,
                    },
                })
                .then((response) => {
                    const data = response.data as Road[]
                    if (data?.length !== 1) {
                        return
                    }

                    return data[0] as Road
                })
        })
        .catch(() => {
            console.error('Invalid credentials')
            return undefined
        })
}

export { getRoads, roads, getRoadByName }
