import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const bintYoavGerushah: CharacterInfo = {
    prename: 'Gerushah',
    surname: 'bint Yoav',
    clan: Clan.LASOMBRA,
    sex: Sex.FEMALE,
    position: 'Sultana von Sevilla',
    apparentAge: 'Ende 30, Anfang 40',
    image: undefined,
    generation: 8,
    status: Status.DESTROYED,
    embrace: '953',
    sire: { prename: 'Yoav', surname: 'ben Ezra' },
}
