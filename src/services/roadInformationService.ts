import { Status } from 'enums/status'
import { createSignal } from 'solid-js'
import { RoadInformation } from 'types/roadInformation'
import { getDirectus, getDirectusConnection } from './directusService'

const [roadInformations] = createSignal<Map<number, RoadInformation>>(new Map())

const fetchAllRoads = async (): Promise<RoadInformation[]> => {
    const directus = getDirectus()
    if (!directus) return []

    const connection = getDirectusConnection(directus)

    if (!connection) return []

    return await connection
        .then(async (): Promise<RoadInformation[]> => {
            return await directus
                .items('roadInformation')
                .readByQuery({
                    filter: {
                        status: Status.PUBLISHED,
                    },
                    sort: ['-score'],
                })
                .then((response) => response.data as RoadInformation[])
        })
        .catch(() => {
            console.error('Invalid credentials')
            return []
        })
}

const getRoadInformations = async (): Promise<Map<number, RoadInformation>> => {
    if (roadInformations().size === 0) {
        const allRoadInformation = await fetchAllRoads()
        allRoadInformation.forEach((road) =>
            roadInformations().set(road.id, road)
        )
    }
    return roadInformations()
}

const getRoadInformationById = async (
    id: number
): Promise<RoadInformation[] | undefined> => {
    const results = [...(await getRoadInformations()).values()]

    return results.filter((e) => e.name === id)
}

export { getRoadInformations, roadInformations, getRoadInformationById }
