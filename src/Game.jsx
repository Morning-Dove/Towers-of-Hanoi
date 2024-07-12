import { useState, useEffect } from 'react';
import { DndContext } from '@dnd-kit/core';
import { toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

import Tower from './Tower';
import { discs } from "./assets/discs";
import styles from "./Game.module.css";


function Game() {
  const [parent, setParent] = useState(null);
  const [moves, setMoves] = useState(0);
  const [towerState, setTowerState] = useState({
    t1: [...discs],
    t2: [],
    t3: [],
  });


// Check for the win condition, which is if discs are all on the right tower.
  useEffect(() => {
    if (towerState.t3.length === discs.length) {
      alert(`You Win! It took you ${moves} moves.`);
    }
  }, [towerState]);

  const message = "You can't stack a small disc on top of a largers disc silly!";

  const notify = () => toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });


  // Check for the win condition, which is if discs are all on the right tower.
  function handleDragEnd({ active, over }) {
    setParent(over ? over.id : null);

    const newT1 = towerState.t1.filter((disc) => disc.id !== active.id);
    const newT2 = towerState.t2.filter((disc) => disc.id !== active.id);
    const newT3 = towerState.t3.filter((disc) => disc.id !== active.id);

    // Get the disc
    const movedDisc = discs.find(disc => disc.id === active.id);

    // Get discs from target tower (the "over" tower)
    const targetDiscs = towerState[over.id];
    if (targetDiscs.length > 0) {
      // Get last disc in target tower
      const lastDisc = targetDiscs[targetDiscs.length - 1];

    // Check if current disc we have above has a larger ID than the last
    // disc in the target tower array of discs. If the disc ID is largert then deny the move,
    // put the disc back where it came from then yell at the user.
  
    // smaller ID == bigger Disc, so the smaller ID should not be allowed on top of the larger ID.

      if (movedDisc.id < lastDisc.id) {
        // Deny the move
        console.log("Invalid Move");
        notify();
        return;
      }
    }

    if (over.id === "t1") newT1.push(movedDisc);
    else if (over.id === "t2") newT2.push(movedDisc);
    else if (over.id === "t3") newT3.push(movedDisc);

    // Counter for amount of moves
    setMoves(moves => moves + 1);

    setTowerState({
      t1: newT1,
      t2: newT2,
      t3: newT3,
    });
  }

  return (
    <main className={styles.game}>
      <DndContext onDragEnd={handleDragEnd}>
        <Tower towerId={"t1"} discs={towerState.t1} />
        <Tower towerId={"t2"} discs={towerState.t2} />
        <Tower towerId={"t3"} discs={towerState.t3} />
      </DndContext>
    </main>
  );
}

export default Game;

