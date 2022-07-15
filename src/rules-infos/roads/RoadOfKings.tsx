import { Component, createSignal } from 'solid-js'
import { For } from 'solid-js/web'
import { NumberToMeaningEntry } from 'types/numberToMeaningEntry'

const RoadOfKings: Component = () => {
    const [roadOfKings] = createSignal<NumberToMeaningEntry[]>([
        {
            number: '10',
            meaning: 'Forgoing your duty',
            description:
                'Those who do not maintain responsibilities often lose them.',
        },
        {
            number: '9',
            meaning: 'Treating a peer with disrespect',
            description: 'Respect must be given to earn it from others.',
        },
        {
            number: '8',
            meaning: 'Placing personal desires over duty',
            description:
                'A leader must do what is best for the many, not the one.',
        },
        {
            number: '7',
            meaning: 'Treating an inferior as an equal',
            description: 'Everyone should know their place, including you.',
        },
        {
            number: '6',
            meaning: 'Killing without purpose',
            description: 'Displays of power should inspire fear or respect.',
        },
        {
            number: '5',
            meaning: 'Showing weakness in front of inferiors',
            description: 'A leader must be strong at all times.',
        },
        {
            number: '4',
            meaning: 'Failing to answer a challenge to your honor',
            description: 'Honor and reputation are everything.',
        },
        {
            number: '3',
            meaning: 'Treating your superior with disrespect',
            description: 'Superiors must be given the respect they are due.',
        },
        {
            number: '2',
            meaning: 'Breaking your word or oath',
            description:
                'Your word is your honor. If you have no honor, you have no worth.',
        },
        {
            number: '1',
            meaning: 'Giving in to your Beast, such as frenzy',
            description:
                'If you cannot control yourself, how can you control others?',
        },
    ])

    return (
        <div class="overflow-x-auto">
            <h1>Road of Kings</h1>
            <p>
                <b>Virtues:</b> Conviction and Self-Control
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
                    <For each={roadOfKings()}>
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

export default RoadOfKings
