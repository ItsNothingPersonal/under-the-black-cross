import { Component, createSignal } from 'solid-js'
import { For } from 'solid-js/web'
import { NumberToMeaningEntry } from 'types/numberToMeaningEntry'

const FrenzyAndRoetschreck: Component = () => {
    const [frenzyTrigger] = createSignal<NumberToMeaningEntry[]>([
        { meaning: 'Smell of blood when hungry', number: '3' },
        { meaning: 'Sight of blood when hungry', number: '4' },
        { meaning: 'Being harassed', number: '4' },
        { meaning: 'Life-threatening situation', number: '4' },
        { meaning: 'Malicious taunts', number: '4' },
        { meaning: 'Physical provocation', number: '6' },
        { meaning: 'Taste of blood when hungry', number: '6' },
        { meaning: 'Loved one in danger', number: '7' },
        { meaning: 'Outright public humiliation', number: '8' },
    ])

    const [roetschreckTrigger] = createSignal<NumberToMeaningEntry[]>([
        { meaning: 'Lighting a lamp', number: '3' },
        { meaning: 'Sight of a torch', number: '5' },
        { meaning: 'Bonfire', number: '6' },
        { meaning: 'Obscured sunlight', number: '7' },
        { meaning: 'Being burned', number: '7' },
        { meaning: 'Direct sunlight', number: '8' },
        { meaning: 'Trapped in burning building', number: '9' },
    ])

    return (
        <div class="overflow-x-auto">
            <h1>Frenzy-Trigger</h1>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Provokation</th>
                        <th>Schwierigkeit</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={frenzyTrigger()}>
                        {(numberToMeaning: NumberToMeaningEntry) => {
                            return (
                                <tr>
                                    <td>{numberToMeaning.meaning}</td>
                                    <td>{numberToMeaning.number}</td>
                                </tr>
                            )
                        }}
                    </For>
                </tbody>
            </table>

            <h1>Rötschreck</h1>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Provokation</th>
                        <th>Schwierigkeit</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={roetschreckTrigger()}>
                        {(numberToMeaning: NumberToMeaningEntry) => {
                            return (
                                <tr>
                                    <td>{numberToMeaning.meaning}</td>
                                    <td>{numberToMeaning.number}</td>
                                </tr>
                            )
                        }}
                    </For>
                </tbody>
            </table>
        </div>
    )
}

export default FrenzyAndRoetschreck
