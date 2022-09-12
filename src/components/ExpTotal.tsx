import { Component } from 'solid-js'

const ExpTotal: Component<{ total: number }> = (props) => {
    return (
        <div class="stats shadow outline outline-2 outline-primary-content">
            <div class="stat">
                <div class="stat-title">Summe</div>
                <div class="stat-value">{props.total}</div>
            </div>
        </div>
    )
}

export default ExpTotal
