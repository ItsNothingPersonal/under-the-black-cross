import { CharacterInfo } from 'types/characterinfo'
import { borgioneLucretia } from './pc/borgioneLucretia'
import { giovaniDeFlorenceBonefacio } from './pc/giovaniDeFlorenceBonefacio'
import { malekith } from './pc/malekith'
import { ulrich } from './pc/ulrich'
import { vonKloedenKarlFriedrich } from './pc/vonKloedenKarlFriedrich'
import { wanningerVeronika } from './pc/wanningerVeronika'

export const characterDB = new Map<string, CharacterInfo>([
    ['von klöden_karl friedrich', vonKloedenKarlFriedrich],
    ['undefined_ulrich', ulrich],
    ['borgione_lucretia', borgioneLucretia],
    ['wanninger_veronika', wanningerVeronika],
    ['undefined_malekith', malekith],
    ['giovani de florence_bonefacio', giovaniDeFlorenceBonefacio],
])
