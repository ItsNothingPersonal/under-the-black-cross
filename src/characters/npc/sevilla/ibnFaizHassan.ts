import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const ibnFaizHassan: CharacterInfo = {
    prename: 'Hassan',
    surname: 'ibn Faiz',
    clan: Clan.ASSAMITE_SORCERER,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: 22,
    image: undefined,
    generation: undefined,
    status: Status.DESTROYED,
    embrace: '1011',
    sire: { prename: 'Faiz', surname: '' },
}
