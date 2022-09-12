import { CharacterType } from 'enums/characterType'
import { StorySource } from 'enums/storySource'
import { parsePath, translateSex, translateStatus } from 'helpers/utils'
import { getDirectusUrl, getFileById } from 'services/directusService'
import {
    getNonPlayerCharacterByName,
    getNonPlayerCharacters,
    nonPlayerCharacters,
} from 'services/nonPlayerCharacterService'
import {
    getPlayerCharacterByName,
    getPlayerCharacters,
    playerCharacters,
} from 'services/playerService'
import { Link, useLocation, useParams } from 'solid-app-router'
import {
    Component,
    createEffect,
    createMemo,
    createResource,
    createSignal,
    onMount,
    Show,
} from 'solid-js'
import { NonPlayerCharacter } from 'types/nonPlayerCharacter'
import { PlayerCharacter } from 'types/playerCharacter'
import WarningMessage from './WarningMessage'

const CharacterSheet: Component = () => {
    const params = useParams()

    const location = useLocation()
    const pathname = createMemo(() => parsePath(location.pathname))

    const [selectedCharacter, setSelectedCharacter] = createSignal<
        PlayerCharacter | NonPlayerCharacter
    >()

    const [imageId, setImageId] = createSignal<string>()
    const getImageUrl = async (id: string) => {
        if (!id) return

        const file = await getFileById(id)

        return `${getDirectusUrl()}/assets/${file.filename_disk}`
    }
    const [image] = createResource(imageId, getImageUrl)

    onMount(async () => {
        let z: Map<string, PlayerCharacter | NonPlayerCharacter>

        if (pathname() === CharacterType.PC) {
            z = await getPlayerCharacters()
        } else if (pathname() === CharacterType.NPC_SEVILLA) {
            z = await getNonPlayerCharacters(StorySource.SEVILLA)
        } else {
            z = await getNonPlayerCharacters(StorySource.UNDER_THE_BLACK_CROSS)
        }

        mapPathToCharacter(z, pathname())
    })

    createEffect(() => {
        let z: Map<string, PlayerCharacter | NonPlayerCharacter>

        if (pathname() === CharacterType.PC) {
            z = playerCharacters()
        } else {
            z = nonPlayerCharacters()
        }

        mapPathToCharacter(z, pathname())
    })

    const mapPathToCharacter = (
        data: Map<string, PlayerCharacter | NonPlayerCharacter>,
        path: CharacterType
    ) => {
        if (!path) return

        let entityInfo: PlayerCharacter | NonPlayerCharacter | undefined

        switch (path) {
            case CharacterType.PC:
                entityInfo = getPlayerCharacterByName(
                    data as Map<string, PlayerCharacter>,
                    params.surname,
                    params.prename
                )
                break
            case CharacterType.NPC_CURRENT:
            case CharacterType.NPC_SEVILLA:
                entityInfo = getNonPlayerCharacterByName(
                    data as Map<string, NonPlayerCharacter>,
                    params.surname,
                    params.prename
                )
                break
            default:
                break
        }

        if (!entityInfo) return

        setSelectedCharacter(entityInfo)
        setImageId(selectedCharacter()?.characterImage ?? '')
    }

    return (
        <Show
            when={selectedCharacter()}
            fallback={
                <div class="grid grid-cols-1 grid-rows-1">
                    <WarningMessage message="Keine Daten vorhanden" />
                </div>
            }
        >
            <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-6">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <label class="font-bold">Name:</label>
                    {selectedCharacter()?.prename}{' '}
                    {selectedCharacter()?.surname}
                    <label class="font-bold">Clan:</label>
                    {selectedCharacter()?.clan}
                    <label class="font-bold">Erzeuger:</label>
                    <Show
                        when={selectedCharacter()?.sire_prename}
                        fallback={'-'}
                    >
                        <Link
                            href={`/npc/${
                                selectedCharacter()?.sire_surname ?? ''
                            }/${selectedCharacter()?.sire_prename}/`}
                        >
                            {selectedCharacter()?.sire_prename}{' '}
                            {selectedCharacter()?.sire_surname}
                        </Link>
                    </Show>
                    <label class="font-bold">Geschlecht:</label>
                    {translateSex(selectedCharacter()?.sex)}
                    <label class="font-bold">Generation:</label>
                    {selectedCharacter()?.generation ?? '?? '}th
                    <label class="font-bold">Verwandelt:</label>
                    {selectedCharacter()?.embraced ?? '-'}
                    <label class="font-bold">Sichtbares Alter:</label>
                    {selectedCharacter()?.apparentAge ?? '-'}
                    <label class="font-bold">Position:</label>
                    {selectedCharacter()?.position ?? '-'}
                    <label class="font-bold">Road:</label>
                    <Show when={selectedCharacter()?.road} fallback={'-'}>
                        <Link
                            href={`/rules-info/road/${
                                selectedCharacter()?.road
                            }`}
                        >
                            {selectedCharacter()?.road}
                        </Link>
                    </Show>
                    <label class="font-bold">Status:</label>
                    {translateStatus(selectedCharacter()?.characterStatus) ??
                        '-'}
                </div>
                <Show when={image()}>
                    <img
                        class="row-span-2 md:row-span-3 max-h-96 ml-0 md:ml-4 lg:ml-0 mt-4 md:mt-0"
                        src={image()}
                        loading="eager"
                        alt={`Charakterbild von ${
                            selectedCharacter()?.prename
                        } ${selectedCharacter()?.surname}`}
                    />
                </Show>
            </div>
        </Show>
    )
}

export default CharacterSheet
