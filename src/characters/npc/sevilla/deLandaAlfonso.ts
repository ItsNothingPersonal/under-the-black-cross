import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const deLandaAlfonso: CharacterInfo = {
    prename: 'Alfonso',
    surname: 'de Landa',
    clan: Clan.LASOMBRA,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: 22,
    image: undefined,
    generation: undefined,
    status: Status.DESTROYED,
    embrace: '1011',
    sire: { prename: 'Osrico', surname: 'de Borja' },
}
