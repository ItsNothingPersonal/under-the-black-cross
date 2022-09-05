import { PlayerCharacter } from './playerCharacter'

export type PlayerCharacterDirectus = Omit<PlayerCharacter, 'clan'> & {
    clan: number
}
