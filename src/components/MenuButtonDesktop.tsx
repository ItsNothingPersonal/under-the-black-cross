import { children, Component, JSXElement } from 'solid-js'

const MenuButtonDesktop: Component<{ label: string; children: JSXElement }> = (
    props
) => {
    const c = children(() => props.children)

    return (
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost rounded-btn">
                {props.label}
            </label>
            <ul
                tabindex="0"
                class="menu dropdown-content p-2 shadow rounded-box w-72 mt-4 bg-secondary text-secondary-content"
            >
                {c()}
            </ul>
        </div>
    )
}

export default MenuButtonDesktop
