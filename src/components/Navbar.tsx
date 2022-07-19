import { Link } from 'solid-app-router'
import { Component } from 'solid-js'

const Navbar: Component = () => {
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
                                <li>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/character/von Klöden/Karl Friedrich"
                                    >
                                        Karl Friedrich von Klöden
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/character/Borgione/Lucretia"
                                    >
                                        Lucretia Borgione
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/character/Wanninger/Veronika"
                                    >
                                        Veronika Wanninger
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/character//Ulrich"
                                    >
                                        Ulrich
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/character//Malekith"
                                    >
                                        Malekith
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        class="btn btn-ghost rounded-btn justify-start"
                                        href="/character/Giovani de Florence/Bonefacio"
                                    >
                                        Bonefacio Giovani de Florence
                                    </Link>
                                </li>
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
                                <li>
                                    <a class="btn btn-ghost rounded-btn justify-start">
                                        TDB!
                                    </a>
                                </li>
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
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla/bint Aliyyah/Elisheba"
                                            >
                                                Elisheba bint Aliyyah
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla/bint Jifri/Ashiqa"
                                            >
                                                Ashiqa bint Jifri
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla/bint Mukhtar/Nashwa"
                                            >
                                                Nashwa bint Mukhtar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla/bint Yoav/Gerushah"
                                            >
                                                Gerushah bint Yoav
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla/de Landa/Alfonso"
                                            >
                                                Alfonso de Landa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla/de Toledo/Ordonio"
                                            >
                                                Ordonio de Toledo
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla//gotzon"
                                            >
                                                Gotzon
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla/Ibn Faiz/Hassan"
                                            >
                                                Hassan Ibn Faiz
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla//Mirabelle"
                                            >
                                                Mirabelle
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                class="btn btn-ghost rounded-btn justify-start"
                                                href="/npc/sevilla/Vermudez/Mansuara"
                                            >
                                                Mansuara Vermudez
                                            </Link>
                                        </li>
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
                            <li>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/character/von Klöden/Karl Friedrich"
                                >
                                    Karl Friedrich von Klöden
                                </Link>
                            </li>
                            <li>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/character/Borgione/Lucretia"
                                >
                                    Lucretia Borgione
                                </Link>
                            </li>
                            <li>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/character/Wanninger/Veronika"
                                >
                                    Veronika Wanninger
                                </Link>
                            </li>
                            <li>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/character//Ulrich"
                                >
                                    Ulrich
                                </Link>
                            </li>
                            <li>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/character//Malekith"
                                >
                                    Malekith
                                </Link>
                            </li>
                            <li>
                                <Link
                                    class="btn btn-ghost rounded-btn justify-start"
                                    href="/character/Giovani de Florence/Bonefacio"
                                >
                                    Bonefacio Giovani de Florence
                                </Link>
                            </li>
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
                            <li>
                                <label
                                    tabindex="0"
                                    class="btn btn-ghost rounded-btn justify-start"
                                >
                                    TDB!
                                </label>
                            </li>

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
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla/bint Aliyyah/Elisheba"
                                        >
                                            Elisheba bint Aliyyah
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla/bint Jifri/Ashiqa"
                                        >
                                            Ashiqa bint Jifri
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla/bint Mukhtar/Nashwa"
                                        >
                                            Nashwa bint Mukhtar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla/bint Yoav/Gerushah"
                                        >
                                            Gerushah bint Yoav
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla/de Landa/Alfonso"
                                        >
                                            Alfonso de Landa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla/de Toledo/Ordonio"
                                        >
                                            Ordonio de Toledo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla//gotzon"
                                        >
                                            Gotzon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla/Ibn Faiz/Hassan"
                                        >
                                            Hassan Ibn Faiz
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla//Mirabelle"
                                        >
                                            Mirabelle
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            class="btn btn-ghost rounded-btn justify-start"
                                            href="/npc/sevilla/Vermudez/Mansuara"
                                        >
                                            Mansuara Vermudez
                                        </Link>
                                    </li>
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
