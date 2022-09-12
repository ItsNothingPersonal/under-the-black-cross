import { StorySource } from 'enums/storySource'
import { getNonPlayerCharacters } from 'services/nonPlayerCharacterService'
import { getPlayerCharacters } from 'services/playerService'
import { getRoads } from 'services/roadService'
import { Link } from 'solid-app-router'
import { Component, createSignal, onMount } from 'solid-js'
import { For } from 'solid-js/web'
import { NonPlayerCharacter } from 'types/nonPlayerCharacter'
import { PlayerCharacter } from 'types/playerCharacter'
import MenuButtonDesktop from './MenuButtonDesktop'
import MenuButtonMobile from './MenuButtonMobile'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
import PlayerMenuEntry from './PlayerMenuEntry'
import SubMenuButtonDesktop from './SubMenuButtonDesktop'
import SubMenuButtonMobile from './SubMenuButtonMobile'

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

    const [localRoadNames, setLocalRoadNames] = createSignal<string[]>([])

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

        const allRoadNames = [...(await getRoads()).values()]
        setLocalRoadNames(allRoadNames.map((e) => e.name))
    })

    return (
        <div class="navbar bg-base-100 pl-0">
            <NavbarMobile>
                <SubMenuButtonMobile label="Charaktere">
                    <For each={localPlayerCharacters()}>
                        {(playerCharacter: PlayerCharacter) => (
                            <PlayerMenuEntry character={playerCharacter} />
                        )}
                    </For>
                </SubMenuButtonMobile>
                <MenuButtonMobile>
                    <Link
                        class="btn btn-ghost rounded-btn justify-start"
                        href="/journal"
                    >
                        Journal
                    </Link>
                </MenuButtonMobile>
                <MenuButtonMobile>
                    <Link
                        class="btn btn-ghost rounded-btn justify-start"
                        href="/exp-history"
                    >
                        Erfahrungspunkte
                    </Link>
                </MenuButtonMobile>
                <MenuButtonMobile>
                    <Link
                        class="btn btn-ghost rounded-btn justify-start"
                        href="/spotify-playlist"
                    >
                        Spotify-Playlist
                    </Link>
                </MenuButtonMobile>
                <SubMenuButtonMobile label="NPCs">
                    <For each={localNonPlayerCharactersUnderTheBlackCross()}>
                        {(nonPlayerCharacter: NonPlayerCharacter) => (
                            <PlayerMenuEntry character={nonPlayerCharacter} />
                        )}
                    </For>

                    <SubMenuButtonMobile label="Sevilla">
                        <For each={localNonPlayerCharactersSevilla()}>
                            {(nonPlayerCharacter: NonPlayerCharacter) => (
                                <PlayerMenuEntry
                                    character={nonPlayerCharacter}
                                />
                            )}
                        </For>
                    </SubMenuButtonMobile>
                </SubMenuButtonMobile>

                <SubMenuButtonMobile label="Regel Infos">
                    <MenuButtonMobile>
                        <Link
                            class="btn btn-ghost rounded-btn justify-start"
                            href="/rules-info/dice-and-difficulties"
                        >
                            Würfeln & Schwierigkeiten
                        </Link>
                    </MenuButtonMobile>
                    <MenuButtonMobile>
                        <Link
                            class="btn btn-ghost rounded-btn justify-start"
                            href="/rules-info/frenzy-and-roetschreck"
                        >
                            Frenzy & Roetschreck
                        </Link>
                    </MenuButtonMobile>
                    <SubMenuButtonMobile label="Roads & Degeneration">
                        <MenuButtonMobile>
                            <Link
                                class="btn btn-ghost rounded-btn justify-start"
                                href="/rules-info/degeneration"
                            >
                                Degeneration
                            </Link>
                        </MenuButtonMobile>
                        <For each={localRoadNames()}>
                            {(roadName: string) => (
                                <MenuButtonMobile>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href={`/rules-info/road/${roadName}`}
                                    >
                                        {roadName}
                                    </Link>
                                </MenuButtonMobile>
                            )}
                        </For>
                    </SubMenuButtonMobile>
                </SubMenuButtonMobile>

                <MenuButtonMobile>
                    <Link
                        class="btn btn-ghost rounded-btn justify-start"
                        href="/impressum"
                    >
                        Impressum
                    </Link>
                </MenuButtonMobile>
            </NavbarMobile>
            <NavbarDesktop>
                <MenuButtonDesktop label="Charaktere">
                    <For each={localPlayerCharacters()}>
                        {(playerCharacter: PlayerCharacter) => (
                            <PlayerMenuEntry character={playerCharacter} />
                        )}
                    </For>
                </MenuButtonDesktop>

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

                <MenuButtonDesktop label="NPCs">
                    <For each={localNonPlayerCharactersUnderTheBlackCross()}>
                        {(nonPlayerCharacter: NonPlayerCharacter) => (
                            <PlayerMenuEntry character={nonPlayerCharacter} />
                        )}
                    </For>

                    <SubMenuButtonDesktop label="Sevilla">
                        <For each={localNonPlayerCharactersSevilla()}>
                            {(nonPlayerCharacter: NonPlayerCharacter) => (
                                <PlayerMenuEntry
                                    character={nonPlayerCharacter}
                                />
                            )}
                        </For>
                    </SubMenuButtonDesktop>
                </MenuButtonDesktop>

                <MenuButtonDesktop label="Regel Infos">
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
                    <SubMenuButtonDesktop label="Roads & Degeneration">
                        <Link
                            class="btn btn-ghost rounded-btn justify-start"
                            href="/rules-info/degeneration"
                        >
                            Degeneration
                        </Link>
                        <For each={localRoadNames()}>
                            {(roadName: string) => (
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href={`/rules-info/road/${roadName}`}
                                >
                                    {roadName}
                                </Link>
                            )}
                        </For>
                    </SubMenuButtonDesktop>
                </MenuButtonDesktop>

                <Link class="btn btn-ghost rounded-btn" href="/impressum">
                    Impressum
                </Link>
            </NavbarDesktop>
        </div>
    )
}

export default Navbar
