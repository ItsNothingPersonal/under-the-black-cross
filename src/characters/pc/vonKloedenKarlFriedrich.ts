import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const vonKloedenKarlFriedrich: CharacterInfo = {
    prename: 'Karl-Friedrich',
    surname: 'von Klöden',
    clan: Clan.VENTRUE,
    sex: Sex.MALE,
    position: undefined,
    apparentAge: undefined,
    image: '/src/assets/karl_friedrich.png',
    generation: 7,
    status: Status.ACTIVE,
    embrace: undefined,
    sire: { prename: 'Jürgen', surname: 'von Verden' },
}
