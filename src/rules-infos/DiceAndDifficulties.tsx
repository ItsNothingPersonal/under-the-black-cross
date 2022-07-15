import { Component, createSignal } from 'solid-js'
import { For } from 'solid-js/web'
import { NumberToMeaningEntry } from 'types/numberToMeaningEntry'

const DiceAndDifficulties: Component = () => {
    const [difficulties] = createSignal<NumberToMeaningEntry[]>([
        { number: '3', meaning: 'Trivial, probably not worth rolling' },
        { number: '4', meaning: 'Easy (following a clear and present trail)' },
        {
            number: '5',
            meaning: 'Straightforward (convincing the sympathetic)',
        },
        { number: '6', meaning: 'Standard (most average actions)' },
        {
            number: '7',
            meaning: 'Challenging (finding something on short time)',
        },
        { number: '8', meaning: 'Difficult (convincing an enemy)' },
        { number: '9', meaning: 'Extremely difficult (juggling weapons)' },
    ])

    const [successes] = createSignal<NumberToMeaningEntry[]>([
        {
            number: '1',
            meaning:
                'Marginal; you get what you want, but at a cost, with potential consequences or imperfections',
        },
        {
            number: '2',
            meaning:
                'Moderate; you get what you want, but with a cost, consequence, or imperfection',
        },
        {
            number: '3',
            meaning: 'Complete; you get what you want within reason',
        },
        {
            number: '4',
            meaning: 'Exceptional; you get what you want, beyond expectations',
        },
        {
            number: '5',
            meaning:
                'Phenomenal; you perform with perfection, or you’ve created lasting greatness',
        },
    ])

    return (
        <div class="overflow-x-auto">
            <h1>Schwierigkeiten</h1>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Schwierigkeit</th>
                        <th>Bedeutung</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={difficulties()}>
                        {(numberToMeaning: NumberToMeaningEntry) => {
                            return (
                                <tr>
                                    <td>{numberToMeaning.number}</td>
                                    <td>{numberToMeaning.meaning}</td>
                                </tr>
                            )
                        }}
                    </For>
                </tbody>
            </table>

            <h1>Grad des Erfolges</h1>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Erfolge</th>
                        <th>Bedeutung</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={successes()}>
                        {(numberToMeaning: NumberToMeaningEntry) => {
                            return (
                                <tr>
                                    <td>{numberToMeaning.number}</td>
                                    <td>{numberToMeaning.meaning}</td>
                                </tr>
                            )
                        }}
                    </For>
                </tbody>
            </table>
        </div>
    )
}

export default DiceAndDifficulties
