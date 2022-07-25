import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/Lucretia_von_Hartz.webp'

export const lucreatiaVonHartz: CharacterInfo = {
    prename: 'Lucretia',
    surname: 'von Hartz',
    clan: Clan.VENTRUE,
    sex: Sex.FEMALE,
    position: undefined,
    apparentAge: 'Anfang 30',
    image: img,
    generation: undefined,
    status: Status.ACTIVE,
    embrace: '1098',
    sire: { prename: 'Kuritz', surname: '' },
}
