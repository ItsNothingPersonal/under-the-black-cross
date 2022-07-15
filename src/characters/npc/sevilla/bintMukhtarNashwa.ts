import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const bintMukhtarNashwa: CharacterInfo = {
    prename: 'Nashwa',
    surname: 'bint Mukhtar',
    clan: Clan.GANGREL,
    sex: Sex.FEMALE,
    position: undefined,
    apparentAge: 19,
    image: undefined,
    generation: 8,
    status: Status.ACTIVE,
    embrace: '1029',
    sire: { prename: 'Mukhtar', surname: 'ibn Ali' },
}
