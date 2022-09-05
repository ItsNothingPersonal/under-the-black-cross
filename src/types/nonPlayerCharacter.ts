import { StorySource } from 'enums/storySource'
import { PlayerCharacter } from './playerCharacter'

export interface NonPlayerCharacter extends PlayerCharacter {
    storySource: StorySource
}
