import { children, Component, JSXElement } from 'solid-js'

const NavbarDesktop: Component<{ children: JSXElement }> = (props) => {
    const c = children(() => props.children)

    return (
        <div class="justify-end flex-1 px-2 hidden lg:flex">
            <div class="flex items-stretch">{c()}</div>
        </div>
    )
}

export default NavbarDesktop
