import { NonPlayerCharacter } from './nonPlayerCharacter'

export type NonPlayerCharacterDirectus = Omit<
    NonPlayerCharacter,
    'clan' | 'road'
> & {
    clan: number
    road: number
}
