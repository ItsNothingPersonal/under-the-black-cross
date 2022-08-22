import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/Myca_Vykos.webp'

export const mycaVykos: CharacterInfo = {
    prename: 'Myca',
    surname: 'Vykos',
    clan: Clan.TZIMISCE,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: 'Mitte 20',
    image: img,
    generation: 7,
    status: Status.ACTIVE,
    embrace: '1002',
    sire: { prename: 'Symeon', surname: '' },
}
