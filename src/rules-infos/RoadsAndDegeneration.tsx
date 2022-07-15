import { Component } from 'solid-js'
import RoadOfBlood from './roads/RoadOfBlood'
import RoadOfBones from './roads/RoadOfBones'
import RoadOfHumanity from './roads/RoadOfHumanity'
import RoadOfKings from './roads/RoadOfKings'

const RoadsAndDegeneration: Component = () => {
    return (
        <div class="overflow-x-auto">
            <div class="mb-10">
                <h1 id="wuerfeln-bei-road-verstoessen">
                    Wie würfelt man bei Road-Verstößen?
                </h1>
                <div class="text-justify">
                    <p>
                        Verstoß gegen die eigene Road auf Stufe des eigenen
                        Road-Wertes oder niedriger?
                        <br />
                        Würfeln auf Conscience oder Conviction (Schwierigkeit 6
                        + 1 pro Unterschied zwischen eigenem Road-Wert und der
                        Stufe des Verstoßes).
                    </p>

                    <p>
                        Alternativ kann ein Punkt von Conscience, Conviction,
                        Instinct oder Self-Control aufgegeben werden. Das ist
                        nötig um einer neuen Road zu folgen, da man eine
                        Tugend/Virtue nicht wechseln kann ohne den Wert vorher
                        auf eins zu reduzieren.
                    </p>

                    <p>
                        Im Sinne der Story bedeutet ein Erfolg beim Würfeln hier
                        das der Charakter seinen Verstoß rationalisieren kann,
                        darüber nachdenkt und es nicht sein/ihr moralisches
                        Bollwerk dauerhaft beschädigt. Ein verlorener Wurf
                        bedeutet das der Charakter näher auf die Monströsität
                        des Tiers zu schlittert da die Road sich aufzulösen
                        beginnt.
                    </p>
                </div>
            </div>

            <RoadOfHumanity />

            <RoadOfKings />

            <RoadOfBones />

            <RoadOfBlood />
        </div>
    )
}

export default RoadsAndDegeneration
