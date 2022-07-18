/* @refresh reload */
import Navbar from 'components/Navbar'
import { hashIntegration, Router } from 'solid-app-router'
import { render } from 'solid-js/web'
import App from './App'
import './index.css'

render(
    () => (
        <div class="md:container md:mx-auto prose prose-slate px-4">
            <Router source={hashIntegration()}>
                <Navbar />
                <App />
            </Router>
        </div>
    ),
    document.getElementById('root') as HTMLElement
)
