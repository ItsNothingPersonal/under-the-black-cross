import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'

export const wanningerVeronika: CharacterInfo = {
    prename: 'Veronika',
    surname: 'Wanninger',
    clan: Clan.TOREADOR,
    sex: Sex.FEMALE,
    position: undefined,
    apparentAge: undefined,
    image: '/src/assets/veronika_wanninger.jpg',
    generation: 8,
    status: Status.ACTIVE,
    embrace: undefined,
    sire: undefined,
}
