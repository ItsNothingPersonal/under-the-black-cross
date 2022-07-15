/* eslint-disable solid/no-innerhtml */
import { Component } from 'solid-js'
import { html } from './assets/journal.md'

const Journal: Component = () => {
    return (
        <>
            <h1>Tagebuch des Klüngels</h1>
            <div innerHTML={html} />
        </>
    )
}

export default Journal
