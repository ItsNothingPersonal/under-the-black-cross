import { Component, createSignal } from 'solid-js'
import { For } from 'solid-js/web'

const ExpHistory: Component = () => {
    interface ExpHistoryEntry {
        date: string
        change: string
    }

    const [expHistory] = createSignal<ExpHistoryEntry[]>([
        { date: '14.02.2022', change: '+3' },
        { date: '28.02.2022', change: '+4' },
        { date: '21.03.2022', change: '+5' },
        { date: '04.04.2022', change: '+5' },
        { date: '02.05.2022', change: '+5' },
        { date: '16.05.2022', change: '+6' },
        { date: '30.05.2022', change: '+5' },
        { date: '13.06.2022', change: '+5' },
        { date: '27.06.2022', change: '+7' },
        { date: '11.07.2022', change: '+10' },
        { date: '25.07.2022', change: '+4' },
        { date: '08.08.2022', change: '+5' },
    ])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Datum</th>
                        <th>Veränderung</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={expHistory()}>
                        {(expEntry: ExpHistoryEntry) => {
                            return (
                                <tr>
                                    <td>{expEntry.date}</td>
                                    <td>{expEntry.change}</td>
                                </tr>
                            )
                        }}
                    </For>
                </tbody>
            </table>
        </div>
    )
}

export default ExpHistory
