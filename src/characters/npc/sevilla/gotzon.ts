import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const gotzon: CharacterInfo = {
    prename: '',
    surname: 'Gotzon',
    clan: Clan.LASOMBRA,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: undefined,
    image: undefined,
    generation: undefined,
    status: Status.ACTIVE,
    embrace: undefined,
    sire: undefined,
}
