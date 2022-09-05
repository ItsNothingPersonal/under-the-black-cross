import { getJournalEntries } from 'services/journalService'
import { Component, createSignal, onMount, Show } from 'solid-js'
import SolidMarkdown from 'solid-markdown'

const Journal: Component = () => {
    const [markdown, setMarkdown] = createSignal<string>()

    onMount(async () => {
        const allEntries = await getJournalEntries()
        const combinedEntries = allEntries
            .map((entry) => entry.content)
            .join('\n')

        setMarkdown(combinedEntries)
    })

    return (
        <>
            <h1>Tagebuch des Klüngels</h1>
            <Show when={markdown()}>
                <SolidMarkdown class="text-justify" children={markdown()} />
            </Show>
        </>
    )
}

export default Journal
