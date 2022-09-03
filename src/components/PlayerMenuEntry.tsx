import { StorySource } from 'enums/storySource'
import { Link } from 'solid-app-router'
import { Component } from 'solid-js'
import { NonPlayerCharacter } from 'types/nonPlayerCharacter'
import { PlayerCharacter } from 'types/playerCharacter'

const PlayerMenuEntry: Component<{
    character: PlayerCharacter | NonPlayerCharacter
}> = (props) => {
    const npcType = (character: NonPlayerCharacter) => {
        return character.storySource === StorySource.UNDER_THE_BLACK_CROSS
            ? 'npc'
            : 'npc/sevilla'
    }

    const link = () =>
        `/${
            isPlayerCharacter(props.character)
                ? 'character'
                : npcType(props.character)
        }/${props.character.surname ?? ''}/${props.character.prename}`

    return (
        <li>
            <Link class="btn btn-ghost rounded-btn justify-start" href={link()}>
                {props.character.prename} {props.character.surname ?? ''}
            </Link>
        </li>
    )
}

export default PlayerMenuEntry

function isPlayerCharacter(
    input: PlayerCharacter | NonPlayerCharacter
): input is PlayerCharacter {
    return !(input as any)['storySource']
}
