import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const bintAliyyahElisheba: CharacterInfo = {
    prename: 'Elisheba',
    surname: 'bint Aliyyah',
    clan: Clan.CAPPADOCIAN,
    sex: Sex.FEMALE,
    position: undefined,
    apparentAge: 'Ende 20',
    image: undefined,
    generation: undefined,
    status: Status.ACTIVE,
    embrace: '987',
    sire: { prename: 'Aliyyah', surname: '' },
}
