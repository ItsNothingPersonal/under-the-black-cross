import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const deToledoOrdonio: CharacterInfo = {
    prename: 'Ordonio',
    surname: 'de Toledo',
    clan: Clan.LASOMBRA_ANGELLIS_ATER,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: 'Anfang 40',
    image: undefined,
    generation: 8,
    status: Status.DESTROYED,
    embrace: '1149',
    sire: { prename: 'Medina', surname: 'bint Augustin' },
}
