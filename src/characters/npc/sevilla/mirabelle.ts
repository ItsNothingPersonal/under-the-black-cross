import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const mirabelle: CharacterInfo = {
    prename: 'Mirabelle',
    surname: '',
    clan: Clan.BAALI,
    sex: Sex.FEMALE,
    position: undefined,
    apparentAge: 'Ende 20',
    image: '/src/assets/Mirabelle.jpg',
    generation: 6,
    status: Status.VERY_MUCH_ALIVE,
    embrace: undefined,
    sire: { prename: 'Azaneal', surname: '' },
}
