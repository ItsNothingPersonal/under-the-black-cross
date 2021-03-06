import { Clan } from 'enums/clan'
import { Sex } from 'enums/sex'
import { Status } from 'enums/status'
import { CharacterInfo } from 'types/characterinfo'
import img from './../../../assets/Ashiqa_bint_Jifri.webp'

export const bintJifriAshiqa: CharacterInfo = {
    prename: 'Ashiqa',
    surname: 'bint Jifri',
    clan: Clan.LASOMBRA_ANGELLIS_ATER,
    sex: Sex.FEMALE,
    position: undefined,
    apparentAge: 'Mitte 20',
    image: img,
    generation: 7,
    status: Status.DESTROYED,
    embrace: '983',
    sire: { prename: 'Roderick', surname: '' },
}
