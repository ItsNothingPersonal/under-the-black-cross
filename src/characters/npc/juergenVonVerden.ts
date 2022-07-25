import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/Juergen_von_Verden.webp'

export const juergenVonVerden: CharacterInfo = {
    prename: 'Jürgen',
    surname: 'von Verden',
    clan: Clan.VENTRUE,
    sex: Sex.MALE,
    position: 'Prinz von Magdeburg',
    apparentAge: 'Mitte 30',
    image: img,
    generation: 6,
    status: Status.ACTIVE,
    embrace: '989',
    sire: { prename: '', surname: 'Hardestadt' },
}
