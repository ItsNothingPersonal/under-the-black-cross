import { CharacterStatus } from 'enums/characterStatus'
import { ClanName } from 'enums/clanName'
import { Sex } from 'enums/sex'

export interface CharacterInfo {
    prename: string
    surname: string
    sex: Sex
    clan: ClanName
    position: string | undefined
    apparentAge: string | number | undefined
    image: string | undefined
    generation: number | undefined
    status: CharacterStatus
    embrace: string | undefined
    sire: { prename: string; surname: string } | undefined
}
