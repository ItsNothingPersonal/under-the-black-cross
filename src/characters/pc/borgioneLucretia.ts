import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/lucretia.jpg'

export const borgioneLucretia: CharacterInfo = {
    prename: 'Lucretia',
    surname: 'Borgione',
    clan: Clan.MALKAVIAN,
    sex: Sex.FEMALE,
    position: undefined,
    apparentAge: 15,
    image: img,
    generation: 8,
    status: Status.ACTIVE,
    embrace: undefined,
    sire: undefined,
}
