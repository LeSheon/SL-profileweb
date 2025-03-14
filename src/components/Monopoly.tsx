import "./monopoly.scss";
import { useState } from "react";

export default function Monopoly() {
    const [position, setPosition] = useState(0);

    function rollDice() {
        const dice = Math.floor(Math.random()*2)+1;
        // most likely prev holds same value as position.
        // but, there is possibility where position is not up-to-date so use prev.
        setPosition((prev) => (prev + dice) %4);
    }

    const boardArray = new Array(4).fill(0);

    return(
        <>
        <section className="monopoly">
            <h2>Monopoly Board in Test</h2>
            <div className="monopoly__board">
                {
                    // Map the key and render 4 items in 2x2 board
                    boardArray.map((_, i) => (
                        <div className={`monopoly__board-item${(i === position ? "--active" : "")}`} key={i}>
                            item {i}
                        </div>
                    ))
                }
            </div>
            <button className="monopoly__dice-roll" onClick={() => rollDice()}>
                Roll Dice
            </button>
        </section>
        </>
    );
};