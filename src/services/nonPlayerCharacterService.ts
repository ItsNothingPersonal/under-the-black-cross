import { ClanName } from 'enums/clanName'
import { Status } from 'enums/status'
import { StorySource } from 'enums/storySource'
import { createSignal } from 'solid-js'
import { NonPlayerCharacter } from 'types/nonPlayerCharacter'
import { NonPlayerCharacterDirectus } from 'types/nonPlayerCharacterDirectus'
import { getClans } from './clanService'
import { getDirectus, getDirectusConnection } from './directusService'

const [nonPlayerCharacters] = createSignal<Map<string, NonPlayerCharacter>>(
    new Map()
)
const availableClans = await getClans()

const fetchAllNonPlayerCharacters = async (
    storySource = StorySource.UNDER_THE_BLACK_CROSS
): Promise<NonPlayerCharacter[]> => {
    const directus = getDirectus()
    if (!directus) return []

    const connection = getDirectusConnection(directus)

    if (!connection) return []

    const result = await connection
        .then(async (): Promise<NonPlayerCharacter[]> => {
            return await directus
                .items('nonPlayerCharacter')
                .readByQuery({
                    filter: {
                        status: Status.PUBLISHED,
                        storySource,
                    },
                    sort: ['prename'],
                })
                .then(async (response) => {
                    return (response.data as NonPlayerCharacterDirectus[]).map(
                        mapServerToClient
                    )
                })
        })
        .catch(() => {
            console.error('Invalid credentials')
            return []
        })

    return result
}

const getNonPlayerCharacters = async (
    storySource = StorySource.UNDER_THE_BLACK_CROSS
): Promise<Map<string, NonPlayerCharacter>> => {
    const allNonPlayerCharacters = await fetchAllNonPlayerCharacters(
        storySource
    )

    allNonPlayerCharacters.forEach((nonPlayerCharacter) => {
        nonPlayerCharacters().set(
            `${nonPlayerCharacter.surname?.toLowerCase()}_${nonPlayerCharacter.prename.toLowerCase()}`,
            nonPlayerCharacter
        )
    })

    return nonPlayerCharacters()
}

const getNonPlayerCharacterByName = (
    data: Map<string, NonPlayerCharacter>,
    surname: string,
    prename: string
): NonPlayerCharacter | undefined => {
    const result = data.get(
        `${surname?.toLowerCase()}_${prename.toLowerCase()}`
    )

    return result
}

const mapServerToClient = (
    playerServer: NonPlayerCharacterDirectus
): NonPlayerCharacter => {
    let nonPlayerCharacter: NonPlayerCharacter = {
        prename: playerServer.prename,
        surname: playerServer.surname,
        status: playerServer.status,
        apparentAge: playerServer.apparentAge,
        characterImage: playerServer.characterImage,
        characterStatus: playerServer.characterStatus,
        clan: playerServer.clan
            ? (availableClans.get(playerServer.clan) as ClanName)
            : undefined,
        date_created: playerServer.date_created,
        date_updated: playerServer.date_updated,
        embraced: playerServer.embraced,
        generation: playerServer.generation,
        position: playerServer.position,
        sex: playerServer.sex,
        sire: playerServer.sire,
        storySource: playerServer.storySource,
    }

    return nonPlayerCharacter
}

export {
    getNonPlayerCharacters,
    nonPlayerCharacters,
    getNonPlayerCharacterByName,
}
