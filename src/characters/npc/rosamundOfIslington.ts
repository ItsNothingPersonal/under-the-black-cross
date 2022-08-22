import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/Rosamund_of_Islington.webp'

export const rosamundOfIslington: CharacterInfo = {
    prename: 'Rosamund',
    surname: 'of Islington',
    clan: Clan.TOREADOR,
    sex: Sex.FEMALE,
    position: 'Gesandte der Höfe der Liebe',
    apparentAge: 'späte Teenagerjahre',
    image: img,
    generation: 8,
    status: Status.ACTIVE,
    embrace: '1189',
    sire: { prename: 'Isouda', surname: 'de Blaise' },
}
