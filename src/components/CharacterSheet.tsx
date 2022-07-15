import { npcSevillaDB } from 'characters/npc/npcSevillaDB'
import { characterDB } from 'characters/pcDB'
import { CharacterType } from 'enums/characterType'
import { useLocation, useParams } from 'solid-app-router'
import { Component, createEffect, createMemo, createSignal } from 'solid-js'
import { CharacterInfo } from 'types/characterinfo'

const CharacterSheet: Component = () => {
    const [selectedCharacter, setSelectedCharacter] =
        createSignal<CharacterInfo>()

    const location = useLocation()
    const pathname = createMemo(() => parsePath(location.pathname))

    let [db, setDB] = createSignal<Map<string, CharacterInfo>>()

    createEffect(() => {
        switch (pathname()) {
            case CharacterType.NPC_SEVILLA:
                setDB(npcSevillaDB)
                break
            default:
                setDB(characterDB)
        }
    })

    createEffect(() => {
        const params = useParams()
        const db_local = db() ?? new Map<string, CharacterInfo>()

        setSelectedCharacter(
            db_local.get(
                `${params.surname?.toLowerCase()}_${params.prename.toLowerCase()}`
            )
        )
    })

    return (
        <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-6">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <label class="font-bold">Name:</label>
                {selectedCharacter()?.prename} {selectedCharacter()?.surname}
                <label class="font-bold">Clan:</label>
                {selectedCharacter()?.clan}
                <label class="font-bold">Erzeuger:</label>
                {selectedCharacter()?.sire
                    ? `${selectedCharacter()?.sire?.prename} ${
                          selectedCharacter()?.sire?.surname
                      }`
                    : '-'}
                <label class="font-bold">Geschlecht:</label>
                {selectedCharacter()?.sex}
                <label class="font-bold">Generation:</label>
                {selectedCharacter()?.generation ?? '?? '}th
                <label class="font-bold">Verwandelt:</label>
                {selectedCharacter()?.embrace ?? '-'}
                <label class="font-bold">Sichtbares Alter:</label>
                {selectedCharacter()?.apparentAge ?? '-'}
                <label class="font-bold">Position:</label>
                {selectedCharacter()?.position ?? '-'}
                <label class="font-bold">Status:</label>
                {selectedCharacter()?.status ?? '-'}
            </div>
            <img
                class="row-span-2 md:row-span-3 max-h-96 mt-0"
                src={selectedCharacter()?.image}
            />
        </div>
    )
}

export default CharacterSheet

function parsePath(pathname: string): CharacterType {
    if (pathname.match(/^\/npc\/sevilla/)) {
        return CharacterType.NPC_SEVILLA
    } else if (pathname.match(/^npc/)) {
        return CharacterType.NPC_CURRENT
    }

    return CharacterType.PC
}
