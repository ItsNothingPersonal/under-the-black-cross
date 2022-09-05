import { CharacterStatus } from 'enums/characterStatus'
import { CharacterType } from 'enums/characterType'
import { Sex } from 'enums/sex'

function toTitleCase(str: string | undefined) {
    if (!str) return '-'
    return str.toLowerCase().replace(/\b(\w)/g, (s) => s.toUpperCase())
}

function translateSex(input: Sex | undefined): string {
    if (!input) return '-'

    let result: string

    switch (input) {
        case Sex.MALE:
            result = 'Männlich'
            break
        case Sex.FEMALE:
            result = 'Weiblich'
            break
        case Sex.OTHER:
            result = 'Divers'
            break
        default:
            result = '-'
            break
    }

    return result
}

function translateStatus(input: CharacterStatus | undefined): string {
    if (!input) return '-'

    let result: string
    switch (input) {
        case CharacterStatus.ACTIVE:
            result = 'Aktiv'
            break
        case CharacterStatus.DESTROYED:
            result = 'Vernichtet'
            break
        case CharacterStatus.INACTIVE:
            result = 'Inaktiv'
            break
        case CharacterStatus.TORPOR:
            result = 'Torpor'
            break
        default:
            result = '-'
            break
    }

    return result
}

function parsePath(pathname: string): CharacterType {
    if (pathname.match(/^\/npc\/sevilla/)) {
        return CharacterType.NPC_SEVILLA
    } else if (pathname.match(/^\/npc/)) {
        return CharacterType.NPC_CURRENT
    }

    return CharacterType.PC
}

export { translateStatus, translateSex, toTitleCase, parsePath }
