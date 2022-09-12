import {
    getRoadInformationById,
    roadInformations,
} from 'services/roadInformationService'
import { getRoadByName, roads } from 'services/roadService'
import { useLocation, useParams } from 'solid-app-router'
import {
    Component,
    createEffect,
    createMemo,
    createSignal,
    onMount,
} from 'solid-js'
import { For } from 'solid-js/web'
import { Road } from 'types/road'
import { RoadInformation } from 'types/roadInformation'

const RoadInformationSheet: Component = () => {
    const params = useParams()
    const location = useLocation()
    const pathname = createMemo(() => location.pathname)

    const [selectedRoad, setSelectedRoad] = createSignal<Road>({} as Road)
    const [selectedRoadInformation, setSelectedRoadInformation] = createSignal<
        RoadInformation[]
    >([])

    onMount(async () => {
        const road = await getRoadByName(params.name)
        if (road) {
            setSelectedRoad(road)
        }

        const roadInformation = await getRoadInformationById(selectedRoad().id)
        if (roadInformation) {
            setSelectedRoadInformation(roadInformation)
        }
    })

    createEffect(() => {
        if (!pathname()) return

        if (roads()) {
            const roadValues = [...roads().values()]
            const z = roadValues.find((e) => e.name === params.name)
            if (z) {
                setSelectedRoad(z)
            }
        }

        const roadInformation = [...roadInformations().values()].filter(
            (e) => e.name === selectedRoad().id
        )
        if (roadInformation) {
            setSelectedRoadInformation(roadInformation)
        }
    })

    return (
        <div class="overflow-x-auto">
            <h1>{selectedRoad().name}</h1>
            <p>
                <b>Virtues:</b> {selectedRoad().pathVirtueA} and{' '}
                {selectedRoad().pathVirtueB}
            </p>
            <p>
                <b>Aura:</b> {selectedRoad().aura}
            </p>
            <p>
                <b>Sobriquet:</b> {selectedRoad().sobriquet}
            </p>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Rang</th>
                        <th>Minimale Verfehlung</th>
                        <th>Rationale</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={selectedRoadInformation()}>
                        {(roadInformation: RoadInformation) => {
                            return (
                                <tr>
                                    <td>{roadInformation.score}</td>
                                    <td>{roadInformation.minimumWrongdoing}</td>
                                    <td>{roadInformation.rationale}</td>
                                </tr>
                            )
                        }}
                    </For>
                </tbody>
            </table>
        </div>
    )
}

export default RoadInformationSheet
