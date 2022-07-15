import { Component, createSignal } from 'solid-js'
import { For } from 'solid-js/web'
import { NumberToMeaningEntry } from 'types/numberToMeaningEntry'

const RoadOfBlood: Component = () => {
    const [roadOfBlood] = createSignal<NumberToMeaningEntry[]>([
        {
            number: '10',
            meaning: 'Acting impulsively in any situation',
            description: 'Discipline is strength.',
        },
        {
            number: '9',
            meaning: 'Allowing actions to be dictated by emotion',
            description: 'Passion is the first stirring of the Beast.',
        },
        {
            number: '8',
            meaning: 'Succumbing to frenzy',
            description: 'Our will must be unshakable.',
        },
        {
            number: '7',
            meaning: 'Failing to diablerize an unworthy vampire',
            description: 'Return the blood of the unworthy to Haqim.',
        },
        {
            number: '6',
            meaning: 'Acting cowardly or dishonorably',
            description: 'Our actions reflect on our father, Haqim.',
        },
        {
            number: '5',
            meaning: 'Allowing the unworthy to go unpunished',
            description: 'We are the judges of the unliving.',
        },
        {
            number: '4',
            meaning: 'Showing weakness before the unworthy',
            description: 'We represent Haqim in all things.',
        },
        {
            number: '3',
            meaning: 'Failing to honor an oath',
            description: 'Our honor is what sets us apart.',
        },
        {
            number: '2',
            meaning: 'Submitting to the will of an unworthy prince or elder',
            description:
                'Nothing in this world may sway us from our sacred purpose.',
        },
        {
            number: '1',
            meaning: 'Becoming oathbound to another Cainite',
            description: 'We serve Haqim and no other.',
        },
    ])

    return (
        <div class="overflow-x-auto">
            <h1>Road of Blood</h1>
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
                    <For each={roadOfBlood()}>
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

export default RoadOfBlood
