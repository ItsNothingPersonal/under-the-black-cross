import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const vermudezMansuara: CharacterInfo = {
    prename: 'Mansuara',
    surname: 'Vermudez',
    clan: Clan.LASOMBRA,
    sex: Sex.FEMALE,
    position: 'Sultana von Sevilla',
    apparentAge: 25,
    image: undefined,
    generation: undefined,
    status: Status.ACTIVE,
    embrace: '725',
    sire: { prename: 'Enrico', surname: 'de Alcazar' },
}
