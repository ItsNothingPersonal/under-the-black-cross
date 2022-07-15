import { Link } from 'solid-app-router'
import { Component } from 'solid-js'

const Navbar: Component = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <li class="btn btn-ghost normal-case text-xl">
                    <Link class="no-underline" href="/">
                        Under The Black Cross
                    </Link>
                </li>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li tabindex="0">
                        <a>Charaktere</a>
                        <ul class="p-2 bg-base-100 z-10">
                            <li>
                                <Link href="/character/von Klöden/Karl Friedrich">
                                    Karl Friedrich von Klöden
                                </Link>
                            </li>
                            <li>
                                <Link href="/character/Borgione/Lucretia">
                                    Lucretia Borgione
                                </Link>
                            </li>
                            <li>
                                <Link href="/character/Wanninger/Veronika">
                                    Veronika Wanninger
                                </Link>
                            </li>
                            <li>
                                <Link href="/character//Ulrich">Ulrich</Link>
                            </li>
                            <li>
                                <Link href="/character//Malekith">
                                    Malekith
                                </Link>
                            </li>
                            <li>
                                <Link href="/character/Giovani de Florence/Bonefacio">
                                    Bonefacio Giovani de Florence
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/journal">Journal</Link>
                    </li>
                    <li>
                        <Link href="/exp-history">Erfahrungspunkte</Link>
                    </li>
                    <li>
                        <Link href="/spotify-playlist">Spotify-Playlist</Link>
                    </li>
                    <li tabindex="0">
                        <a>NPCs</a>
                        <ul class="p-2 bg-base-100 z-10">
                            <ul class="menu menu-vertical">
                                <li>
                                    <a>TDB!</a>
                                </li>
                                <li tabindex="0">
                                    <a>Sevilla</a>
                                    <ul class="menu menu-vertical bg-base-100 w-56 p-2 rounded-box">
                                        <li>
                                            <Link href="/npc/sevilla/bint Aliyyah/Elisheba">
                                                Elisheba bint Aliyyah
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla/bint Jifri/Ashiqa">
                                                Ashiqa bint Jifri
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla/bint Mukhtar/Nashwa">
                                                Nashwa bint Mukhtar
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla/bint Yoav/Gerushah">
                                                Gerushah bint Yoav
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla/de Landa/Alfonso">
                                                Alfonso de Landa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla/de Toledo/Ordonio">
                                                Ordonio de Toledo
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla//gotzon">
                                                Gotzon
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla/Ibn Faiz/Hassan">
                                                Hassan Ibn Faiz
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla//Mirabelle">
                                                Mirabelle
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/npc/sevilla/Vermudez/Mansuara">
                                                Mansuara Vermudez
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </li>
                    <li tabindex="0">
                        <a>Regel Infos</a>
                        <ul class="p-2 bg-base-100 z-10">
                            <li>
                                <Link href="/rules-info/dice-and-difficulties">
                                    Würfeln & Schwierigkeiten
                                </Link>
                                <Link href="/rules-info/frenzy-and-roetschreck">
                                    Frenzy & Roetschreck
                                </Link>
                                <Link href="/rules-info/roads-and-degeneration">
                                    Roads & Degeneration
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/impressum">Impressum</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
