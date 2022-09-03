import { getExperienceHistoryEntries } from 'services/experienceHistoryService'
import { Component, createSignal, onMount } from 'solid-js'
import { For } from 'solid-js/web'
import { ExperienceHistoryEntry } from 'types/experienceHistoryEntry'

const ExpHistory: Component = () => {
    const [expHistory, setExpHistory] = createSignal<ExperienceHistoryEntry[]>()

    onMount(async () => {
        const allEntries = await getExperienceHistoryEntries()

        setExpHistory(allEntries)
    })

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
                        {(expEntry: ExperienceHistoryEntry) => {
                            return (
                                <tr>
                                    <td>
                                        {expEntry.gameDate.toFormat(
                                            'dd.MM.yyyy'
                                        )}
                                    </td>
                                    <td>{expEntry.experienceChange}</td>
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
