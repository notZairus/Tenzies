import { useState, useEffect, useRef } from "react";
import DiceContainer from "./DiceContainer.jsx";
import ShuffleButton from "./ShuffleButton.jsx";



export default function MainGame() {

  const [isGameOver, setIsGameOver] = useState(false);
  const [dice, setDice] = useState(getInitialDice());

  isGameOver && alert('Game Over');

  useEffect(() => {
    if (checkGameOver() && !isGameOver) {
      setIsGameOver(true);
    }
  }, [dice]);

  function getInitialDice()  {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: i+1,
        value: Math.floor(Math.random() * 9 + 1),
        paused: false
      })
    }
    return arr;
  };

  function checkGameOver() {
    return (dice.every(dicee => {
      if (dicee.paused && dicee.value == dice[0].value) {
        return true;
      }
      return false;
    }))
  }
    
  function pauseDice(id) {
    if (isGameOver) return;
    setDice(prevDice => (
        prevDice.map(dicee => {
          return dicee.id == id ? {...dicee, paused: !dicee.paused} : dicee;
        })
      )
    )
  }

  function shuffleDice() {

    if (isGameOver) {
      setIsGameOver(false);
      setDice(getInitialDice());
      return;
    }

    setDice(prevDice => (
      prevDice.map(singleDice => {
        return singleDice.paused ? singleDice : {...singleDice, value: Math.floor(Math.random() * 9) + 1}
      })
    ))
  }

  return (
    <main className='text-black w-1/2 bg-white rounded-lg flex flex-col items-center py-8 px-12'>
      <h1 className="text-5xl font-semibold">Tenzies</h1>
      <p className="text-center text-2xl mt-6">Roll until all dice are same. Click each die to freeze it at it's current value between rolls</p>
      <DiceContainer dice={dice} pauseDice={pauseDice} />
      <ShuffleButton shuffleDice={shuffleDice} isGameOver={isGameOver}/>
    </main>
  );
}