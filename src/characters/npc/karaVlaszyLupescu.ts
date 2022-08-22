import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../assets/Kara_Lupescu.webp'

export const karaVlaszyLupescu: CharacterInfo = {
    prename: 'Kara',
    surname: 'Vlaszy Lupescu',
    clan: Clan.TZIMISCE,
    sex: Sex.FEMALE,
    position: undefined,
    apparentAge: 'Mitte 30',
    image: img,
    generation: 7,
    status: Status.ACTIVE,
    embrace: '975',
    sire: { prename: 'Vladimir', surname: 'Rustovitch' },
}
