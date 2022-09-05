import { NonPlayerCharacter } from './nonPlayerCharacter'

export type NonPlayerCharacterDirectus = Omit<NonPlayerCharacter, 'clan'> & {
    clan: number
}
