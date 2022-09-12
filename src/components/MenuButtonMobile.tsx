import { children, Component, JSXElement } from 'solid-js'

const MenuButtonMobile: Component<{ children: JSXElement }> = (props) => {
    const c = children(() => props.children)

    return <li class="pl-0 justify-between">{c()}</li>
}

export default MenuButtonMobile
