import { PlayerCharacter } from './playerCharacter'

export type PlayerCharacterDirectus = Omit<PlayerCharacter, 'clan' | 'road'> & {
    clan: number
    road: number
}
