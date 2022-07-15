import { Component, createSignal } from 'solid-js'
import { For } from 'solid-js/web'
import { NumberToMeaningEntry } from 'types/numberToMeaningEntry'

const RoadOfBones: Component = () => {
    const [roadOfBones] = createSignal<NumberToMeaningEntry[]>([
        {
            number: '10',
            meaning: 'Refusing to share knowledge with a worthy recipient',
            description: 'Scholarship is improved with informed review.',
        },
        {
            number: '9',
            meaning: 'Wanton destruction and cruelty',
            description:
                'Beasts and idiots will discover nothing but the stake.',
        },
        {
            number: '8',
            meaning: 'Refusing to kill when useful or necessary',
            description: 'Let no mortal squeamishness impede your quest.',
        },
        {
            number: '7',
            meaning: 'Being swayed by emotion',
            description:
                'Study emotion as an expression of the soul, but do not let it guide your hand.',
        },
        {
            number: '6',
            meaning: 'Succumbing to frenzy',
            description: 'A raging Beast is a poor observer.',
        },
        {
            number: '5',
            meaning:
                'Pursuing power, prestige, or mortal attachments instead of knowledge',
            description: 'These things are means to an end and nothing more.',
        },
        {
            number: '4',
            meaning: 'Allowing compassion or pity to influence you',
            description:
                'Affecting compassion may be useful to manipulate your enemies, but don’t let it enter your heart.',
        },
        {
            number: '3',
            meaning: 'Needlessly preventing a death',
            description: 'All flesh is dust.',
        },
        {
            number: '2',
            meaning: 'Showing fear of death',
            description: 'Be not afraid of the truth.',
        },
        {
            number: '1',
            meaning: 'Destroying irreplaceable sources of knowledge',
            description: 'Destroying an artifact destroys an entire world.',
        },
    ])

    return (
        <div class="overflow-x-auto">
            <h1>Road of Bones</h1>
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
                    <For each={roadOfBones()}>
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

export default RoadOfBones
