import { StorySource } from 'enums/storySource'
import { getNonPlayerCharacters } from 'services/nonPlayerCharacterService'
import { getPlayerCharacters } from 'services/playerService'
import { Link } from 'solid-app-router'
import { Component, createSignal, onMount } from 'solid-js'
import { For } from 'solid-js/web'
import { NonPlayerCharacter } from 'types/nonPlayerCharacter'
import { PlayerCharacter } from 'types/playerCharacter'
import PlayerMenuEntry from './PlayerMenuEntry'

const Navbar: Component = () => {
    const [localPlayerCharacters, setLocalPlayerCharacters] = createSignal<
        PlayerCharacter[]
    >([])

    const [
        localNonPlayerCharactersUnderTheBlackCross,
        setLocalNonPlayerCharactersUnderTheBlackCross,
    ] = createSignal<NonPlayerCharacter[]>([])

    const [
        localNonPlayerCharactersSevilla,
        setLocalNonPlayerCharactersSevilla,
    ] = createSignal<NonPlayerCharacter[]>([])

    onMount(async () => {
        const allPlayerCharacters = [...(await getPlayerCharacters()).values()]
        setLocalPlayerCharacters(allPlayerCharacters)

        const allNonPlayerCharactersUnderTheBlackCross = [
            ...(
                await getNonPlayerCharacters(StorySource.UNDER_THE_BLACK_CROSS)
            ).values(),
        ].filter(
            (item) => item.storySource === StorySource.UNDER_THE_BLACK_CROSS
        )
        setLocalNonPlayerCharactersUnderTheBlackCross(
            allNonPlayerCharactersUnderTheBlackCross
        )

        const allNonPlayerCharactersUnderSevilla = [
            ...(await getNonPlayerCharacters(StorySource.SEVILLA)).values(),
        ].filter((item) => item.storySource === StorySource.SEVILLA)
        setLocalNonPlayerCharactersSevilla(allNonPlayerCharactersUnderSevilla)
    })

    return (
        <div class="navbar bg-base-100 pl-0">
            <div class="navbar-start w-fit">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden pl-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-secondary text-secondary-content"
                    >
                        <li class="justify-between" tabindex="0">
                            <label
                                tabindex="0"
                                class="btn btn-ghost rounded-btn justify-between"
                            >
                                Charaktere
                                <svg
                                    class="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </label>
                            <ul class="p-2 z-10 bg-secondary text-secondary-content">
                                <For each={localPlayerCharacters()}>
                                    {(playerCharacter: PlayerCharacter) => (
                                        <PlayerMenuEntry
                                            character={playerCharacter}
                                        />
                                    )}
                                </For>
                            </ul>
                        </li>
                        <li>
                            <Link
                                class="btn btn-ghost rounded-btn justify-start"
                                href="/journal"
                            >
                                Journal
                            </Link>
                        </li>
                        <li>
                            <Link
                                class="btn btn-ghost rounded-btn justify-start"
                                href="/exp-history"
                            >
                                Erfahrungspunkte
                            </Link>
                        </li>
                        <li>
                            <Link
                                class="btn btn-ghost rounded-btn justify-start"
                                href="/spotify-playlist"
                            >
                                Spotify-Playlist
                            </Link>
                        </li>
                        <li tabindex="0">
                            <label
                                tabindex="0"
                                class="btn btn-ghost rounded-btn justify-between"
                            >
                                NPCs
                                <svg
                                    class="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </label>
                            <ul
                                tabindex="0"
                                class="menu dropdown-content p-2 shadow rounded-box w-72 mt-4 bg-secondary text-secondary-content"
                            >
                                <For
                                    each={localNonPlayerCharactersUnderTheBlackCross()}
                                >
                                    {(
                                        nonPlayerCharacter: NonPlayerCharacter
                                    ) => (
                                        <PlayerMenuEntry
                                            character={nonPlayerCharacter}
                                        />
                                    )}
                                </For>
                                <li tabindex="0">
                                    <label
                                        tabindex="0"
                                        class="btn btn-ghost rounded-btn justify-between"
                                    >
                                        Sevilla
                                        <svg
                                            class="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                        </svg>
                                    </label>
                                    <ul class="menu menu-vertical bw-56 p-2 rounded-box bg-secondary text-secondary-content">
                                        <For
                                            each={localNonPlayerCharactersSevilla()}
                                        >
                                            {(
                                                nonPlayerCharacter: NonPlayerCharacter
                                            ) => (
                                                <PlayerMenuEntry
                                                    character={
                                                        nonPlayerCharacter
                                                    }
                                                />
                                            )}
                                        </For>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <label
                                tabindex="0"
                                class="btn btn-ghost rounded-btn justify-between"
                            >
                                Regel Infos
                                <svg
                                    class="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </label>
                            <ul class="p-2 z-10 bg-secondary text-secondary-content">
                                <li>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/rules-info/dice-and-difficulties"
                                    >
                                        Würfeln & Schwierigkeiten
                                    </Link>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/rules-info/frenzy-and-roetschreck"
                                    >
                                        Frenzy & Roetschreck
                                    </Link>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/rules-info/roads-and-degeneration"
                                    >
                                        Roads & Degeneration
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                class="btn btn-ghost rounded-btn justify-start"
                                href="/impressum"
                            >
                                Impressum
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="btn btn-ghost normal-case text-xl pl-0">
                    <Link class="no-underline" href="/">
                        Under The Black Cross
                    </Link>
                </div>
            </div>
            <div class="justify-end flex-1 px-2 hidden lg:flex">
                <div class="flex items-stretch">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost rounded-btn">
                            Charaktere
                        </label>
                        <ul
                            tabindex="0"
                            class="menu dropdown-content p-2 shadow rounded-box w-72 mt-4 bg-secondary text-secondary-content"
                        >
                            <For each={localPlayerCharacters()}>
                                {(playerCharacter: PlayerCharacter) => (
                                    <PlayerMenuEntry
                                        character={playerCharacter}
                                    />
                                )}
                            </For>
                        </ul>
                    </div>

                    <Link class="btn btn-ghost rounded-btn" href="/journal">
                        Journal
                    </Link>

                    <Link class="btn btn-ghost rounded-btn" href="/exp-history">
                        Erfahrungspunkte
                    </Link>

                    <Link
                        class="btn btn-ghost rounded-btn"
                        href="/spotify-playlist"
                    >
                        Spotify-Playlist
                    </Link>

                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost rounded-btn">
                            NPCs
                        </label>
                        <ul
                            tabindex="0"
                            class="menu dropdown-content p-2 shadow rounded-box w-52 mt-4 bg-secondary text-secondary-content"
                        >
                            <For
                                each={localNonPlayerCharactersUnderTheBlackCross()}
                            >
                                {(nonPlayerCharacter: NonPlayerCharacter) => (
                                    <PlayerMenuEntry
                                        character={nonPlayerCharacter}
                                    />
                                )}
                            </For>

                            <li tabindex="0">
                                <label
                                    tabindex="0"
                                    class="btn btn-ghost rounded-btn justify-between"
                                >
                                    Sevilla
                                    <svg
                                        class="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </label>
                                <ul class="menu menu-vertical w-56 p-2 rounded-box bg-secondary text-secondary-content">
                                    <For
                                        each={localNonPlayerCharactersSevilla()}
                                    >
                                        {(
                                            nonPlayerCharacter: NonPlayerCharacter
                                        ) => (
                                            <PlayerMenuEntry
                                                character={nonPlayerCharacter}
                                            />
                                        )}
                                    </For>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost rounded-btn">
                            Regel Infos
                        </label>
                        <ul
                            tabindex="0"
                            class="menu dropdown-content p-2 shadow rounded-box w-72 mt-4 bg-secondary text-secondary-content"
                        >
                            <li>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/rules-info/dice-and-difficulties"
                                >
                                    Würfeln & Schwierigkeiten
                                </Link>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/rules-info/frenzy-and-roetschreck"
                                >
                                    Frenzy & Roetschreck
                                </Link>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/rules-info/roads-and-degeneration"
                                >
                                    Roads & Degeneration
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Link class="btn btn-ghost rounded-btn" href="/impressum">
                        Impressum
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
