import { Component, createSignal } from 'solid-js'
import { For } from 'solid-js/web'
import { NumberToMeaningEntry } from 'types/numberToMeaningEntry'

const RoadOfHumanity: Component = () => {
    const [roadOfHumanity] = createSignal<NumberToMeaningEntry[]>([
        {
            number: '10',
            meaning: 'Selfish thoughts',
            description: 'If it can be thought, it can be done.',
        },
        {
            number: '9',
            meaning: 'Minor selfish acts',
            description: 'Putting oneself first lets the Beast in.',
        },
        {
            number: '8',
            meaning: 'Injury to another',
            description:
                'Accidental or not, there is still blood on your hands.',
        },
        {
            number: '7',
            meaning: 'Theft',
            description: 'Only an animal takes without thought of consequence.',
        },
        {
            number: '6',
            meaning: 'Accidental violation of another',
            description:
                'Humanity is a shared condition, his suffering is your own.',
        },
        {
            number: '5',
            meaning: 'Wanton destruction',
            description: 'Are you a person or an animal?',
        },
        {
            number: '4',
            meaning: 'Impassioned violation of another',
            description:
                'Passion behind violence is the whispering of the Beast.',
        },
        {
            number: '3',
            meaning: 'Planned violation of another',
            description: 'To be so cold is to reject the warmth of humanity.',
        },
        {
            number: '2',
            meaning: 'Casual violation of another',
            description: 'Even wild animals know better.',
        },
        {
            number: '1',
            meaning: 'The most monstrous, vile acts',
            description: 'Are you a person or a monster?',
        },
    ])

    return (
        <div class="overflow-x-auto">
            <h1>Road of Humanity</h1>
            <p>
                <b>Virtues:</b> Conscience and Self-Control
            </p>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Rang</th>
                        <th>Minimale Verfehlung</th>
                        <th>Rationale</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={roadOfHumanity()}>
                        {(numberToMeaning: NumberToMeaningEntry) => {
                            return (
                                <tr>
                                    <td>{numberToMeaning.number}</td>
                                    <td>{numberToMeaning.meaning}</td>
                                    <td>{numberToMeaning.description}</td>
                                </tr>
                            )
                        }}
                    </For>
                </tbody>
            </table>
        </div>
    )
}

export default RoadOfHumanity
