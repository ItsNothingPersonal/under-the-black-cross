import { useRoutes } from 'solid-app-router'
import type { Component } from 'solid-js'
import Journal from './Journal'
import Home from './Home'
import ExpHistory from './ExpHistory'
import DiceAndDifficulties from './rules-infos/DiceAndDifficulties'
import FrenzyAndRoetschreck from './rules-infos/FrenzyAndRoetschreck'
import RoadsAndDegeneration from './rules-infos/RoadsAndDegeneration'
import SpotifyPlaylist from './SpotifyPlaylist'
import Impressum from './Impressum'
import CharacterSheet from 'components/CharacterSheet'

const routes = [
    {
        path: '/journal',
        component: Journal,
    },
    {
        path: '/exp-history',
        component: ExpHistory,
    },
    {
        path: '/spotify-playlist',
        component: SpotifyPlaylist,
    },
    {
        path: '/rules-info/dice-and-difficulties',
        component: DiceAndDifficulties,
    },
    {
        path: '/rules-info/frenzy-and-roetschreck',
        component: FrenzyAndRoetschreck,
    },
    {
        path: '/rules-info/roads-and-degeneration',
        component: RoadsAndDegeneration,
    },
    {
        path: '/character/:surname?/:prename',
        component: CharacterSheet,
    },
    {
        path: '/npc/sevilla/:surname?/:prename',
        component: CharacterSheet,
    },
    {
        path: '/npc/:surname?/:prename',
        component: CharacterSheet,
    },
    {
        path: '/impressum',
        component: Impressum,
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/*',
        component: Home,
    },
]

const App: Component = () => {
    const Routes = useRoutes(routes)

    return <Routes />
}

export default App
