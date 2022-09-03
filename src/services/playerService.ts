import { CharacterStatus } from 'enums/characterStatus'
import { ClanName } from 'enums/clan'
import { Status } from 'enums/status'
import { createSignal } from 'solid-js'
import { PlayerCharacter } from 'types/playerCharacter'
import { PlayerCharacterDirectus } from 'types/playerCharacterDirectus'
import { getClans } from './clanService'
import { getDirectus, getDirectusConnection } from './directusService'

const [playerCharacters] = createSignal<Map<string, PlayerCharacter>>(new Map())
const availableClans = await getClans()

const fetchAllPlayerCharacters = async (): Promise<PlayerCharacter[]> => {
    const directus = getDirectus()
    if (!directus) return []

    const connection = getDirectusConnection(directus)

    if (!connection) return []

    const result = await connection
        .then(async (): Promise<PlayerCharacter[]> => {
            return await directus
                .items('playerCharacter')
                .readByQuery({
                    filter: {
                        status: Status.PUBLISHED,
                        characterStatus: CharacterStatus.ACTIVE,
                    },
                })
                .then(async (response) =>
                    (response.data as PlayerCharacterDirectus[]).map(
                        mapServerToClient
                    )
                )
        })
        .catch(() => {
            console.error('Invalid credentials')
            return []
        })

    return result
}

const getPlayerCharacters = async (): Promise<Map<string, PlayerCharacter>> => {
    if (playerCharacters().size > 0) return playerCharacters()

    const allPlayerCharacters = await fetchAllPlayerCharacters()
    allPlayerCharacters.forEach((playerCharacter) => {
        playerCharacters().set(
            `${playerCharacter.surname?.toLowerCase()}_${playerCharacter.prename.toLowerCase()}`,
            playerCharacter
        )
    })

    return playerCharacters()
}

const getPlayerCharacterByName = (
    data: Map<string, PlayerCharacter>,
    surname: string,
    prename: string
): PlayerCharacter | undefined => {
    const result = data.get(
        `${surname?.toLowerCase()}_${prename.toLowerCase()}`
    )

    return result
}

const mapServerToClient = (
    playerServer: PlayerCharacterDirectus
): PlayerCharacter => {
    let playerCharacter: PlayerCharacter = {
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
    }

    return playerCharacter
}

export { getPlayerCharacters, playerCharacters, getPlayerCharacterByName }
