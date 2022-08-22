import { CharacterInfo } from 'types/characterinfo'
import { heinrichVonAchern } from './npc/heinrichVonAchern'
import { juergenVonVerden } from './npc/juergenVonVerden'
import { karaVlaszyLupescu } from './npc/karaVlaszyLupescu'
import { lucreatiaVonHartz } from './npc/lucretiaVonHartz'
import { mycaVykos } from './npc/mycaVykos'
import { rosamundOfIslington } from './npc/rosamundOfIslington'

export const npcDB = new Map<string, CharacterInfo>([
    ['von hartz_lucretia', lucreatiaVonHartz],
    ['von verden_jürgen', juergenVonVerden],
    ['vlaszy lupescu_kara', karaVlaszyLupescu],
    ['of islington_rosamund', rosamundOfIslington],
    ['von achern_heinrich', heinrichVonAchern],
    ['vykos_myca', mycaVykos],
])
