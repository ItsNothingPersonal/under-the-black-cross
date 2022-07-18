import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/Malekith.webp'

export const malekith: CharacterInfo = {
    prename: 'Malekith',
    surname: '',
    clan: Clan.ASSAMITE,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: undefined,
    image: img,
    generation: 7,
    status: Status.ACTIVE,
    embrace: undefined,
    sire: { prename: 'Isabel', surname: 'von Witten' },
}
