import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/ulrich.webp'

export const ulrich: CharacterInfo = {
    prename: 'Ulrich',
    surname: '',
    clan: Clan.TREMERE,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: undefined,
    image: img,
    generation: 8,
    status: Status.ACTIVE,
    embrace: undefined,
    sire: undefined,
}
