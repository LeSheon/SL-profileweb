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

    return(
        <>
        <section className="monopoly">
            <h2>Monopoly Board in Test</h2>
            <div className="monopoly__board">

            </div>
            <button className="monopoly__dice-roll" onClick={() => rollDice()}>
                Roll Dice
            </button>
        </section>
        </>
    );
};

//   return (
//     <div className="monopoly-board">
//       <h2>Monopoly Game</h2>
//       <div className="board">
//         {/* Create a 2x2 grid */}
//         {[...Array(4)].map((_, index) => (
//           <div
//             key={index}
//             className={`board-space ${index === position ? "active" : ""}`}
//           >
//             {index + 1}
//           </div>
//         ))}
//       </div>
//       <button onClick={rollDice}>Roll Dice</button>
//     </div>
//   );
// };

// export default Monopoly;