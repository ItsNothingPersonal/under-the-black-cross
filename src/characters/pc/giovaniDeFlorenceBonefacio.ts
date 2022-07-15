import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const giovaniDeFlorenceBonefacio: CharacterInfo = {
    prename: 'Bonefacio',
    surname: 'Giovani de Florence',
    clan: Clan.GIOVANNI,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: undefined,
    image: undefined,
    generation: 8,
    status: Status.ACTIVE,
    embrace: undefined,
    sire: { prename: 'Justus', surname: 'Giovanni' },
}
