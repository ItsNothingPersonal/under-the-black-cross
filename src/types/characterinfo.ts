import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'

export interface CharacterInfo {
    prename: string
    surname: string
    sex: Sex
    clan: Clan
    position: string | undefined
    apparentAge: string | number | undefined
    image: string | undefined
    generation: number | undefined
    status: Status
    embrace: string | undefined
    sire: { prename: string; surname: string } | undefined
}
