import { children, Component, JSXElement } from 'solid-js'

const SubMenuButtonDesktop: Component<{
    label: string
    children: JSXElement
}> = (props) => {
    const c = children(() => props.children)

    return (
        <li tabindex="0" class="pl-0">
            <label
                tabindex="0"
                class="btn btn-ghost rounded-btn justify-start w-full"
            >
                {props.label}
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
                {c()}
            </ul>
        </li>
    )
}

export default SubMenuButtonDesktop
