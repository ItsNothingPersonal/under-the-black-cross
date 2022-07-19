import { Component, createSignal, onMount } from 'solid-js'
import { For } from 'solid-js/web'

const SpotifyPlaylist: Component = () => {
    interface SpotifyPlaylistLink {
        name: string
        id: string
    }

    const [spotifyIds] = createSignal<SpotifyPlaylistLink[]>([
        { name: 'Darkening Sky', id: '5mFf0a7cV4BiwrP0gNWy6r' },
        {
            name: 'Under The Black Cross',
            id: '1f1iBunsUV2RxmaES3HPJ8',
        },
    ])

    const [selectedId, setSelectedId] = createSignal<string>('')

    onMount(() => setSelectedId(spotifyIds()[spotifyIds().length - 1].id))

    return (
        <div class="flex flex-col gap-2">
            <select
                class="select select-bordered w-full max-w-xs"
                onChange={(e) => setSelectedId(e.currentTarget.value)}
                value={selectedId()}
            >
                <For each={spotifyIds()}>
                    {(spotifyLink: SpotifyPlaylistLink) => {
                        return (
                            <option value={spotifyLink.id}>
                                {spotifyLink.name}
                            </option>
                        )
                    }}
                </For>
            </select>

            <iframe
                style={{ 'border-radius': '12px' }}
                src={`https://open.spotify.com/embed/playlist/${selectedId()}`}
                width="100%"
                height="380"
                allowfullscreen={false}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
        </div>
    )
}

export default SpotifyPlaylist
