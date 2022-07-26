import { CharacterInfo } from 'types/characterinfo'
import { bermúdezIbai } from './sevilla/bermúdezIbai'
import { bintAliyyahElisheba } from './sevilla/bintAliyyahElisheba'
import { bintJifriAshiqa } from './sevilla/bintJifriAshiqa'
import { bintMukhtarNashwa } from './sevilla/bintMukhtarNashwa'
import { bintYoavGerushah } from './sevilla/bintYoavGerushah'
import { deLandaAlfonso } from './sevilla/deLandaAlfonso'
import { deToledoOrdonio } from './sevilla/deToledoOrdonio'
import { gotzon } from './sevilla/gotzon'
import { ibnFaizHassan } from './sevilla/ibnFaizHassan'
import { mirabelle } from './sevilla/mirabelle'
import { vermudezMansuara } from './sevilla/vermudezMansuara'

export const npcSevillaDB = new Map<string, CharacterInfo>([
    ['bint aliyyah_elisheba', bintAliyyahElisheba],
    ['bint jifri_ashiqa', bintJifriAshiqa],
    ['bint mukhtar_nashwa', bintMukhtarNashwa],
    ['bint yoav_gerushah', bintYoavGerushah],
    ['de landa_alfonso', deLandaAlfonso],
    ['de toledo_ordonio', deToledoOrdonio],
    ['undefined_gotzon', gotzon],
    ['ibn faiz_hassan', ibnFaizHassan],
    ['undefined_mirabelle', mirabelle],
    ['vermudez_mansuara', vermudezMansuara],
    ['bermúdez_ibai', bermúdezIbai],
])
