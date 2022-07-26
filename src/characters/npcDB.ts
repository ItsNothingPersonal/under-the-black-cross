import { CharacterInfo } from 'types/characterinfo'
import { juergenVonVerden } from './npc/juergenVonVerden'
import { lucreatiaVonHartz } from './npc/lucretiaVonHartz'

export const npcDB = new Map<string, CharacterInfo>([
    ['von hartz_lucretia', lucreatiaVonHartz],
    ['von verden_jürgen', juergenVonVerden],
])
