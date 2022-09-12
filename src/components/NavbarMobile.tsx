import { Link } from 'solid-app-router'
import { children, Component, JSXElement } from 'solid-js'

const NavbarMobile: Component<{ children: JSXElement }> = (props) => {
    const c = children(() => props.children)

    return (
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
                    {c()}
                </ul>
            </div>
            <div class="btn btn-ghost normal-case text-xl pl-0">
                <Link class="no-underline" href="/">
                    Under The Black Cross
                </Link>
            </div>
        </div>
    )
}

export default NavbarMobile
