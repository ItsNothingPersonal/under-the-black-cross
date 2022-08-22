import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/Heinrich_von_Achern.webp'

export const heinrichVonAchern: CharacterInfo = {
    prename: 'Heinrich',
    surname: 'von Achern',
    clan: Clan.VENTRUE,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: 'Mitte 40',
    image: img,
    generation: 7,
    status: Status.ACTIVE,
    embrace: '1090',
    sire: { prename: 'Jürgen', surname: 'von Verden' },
}
