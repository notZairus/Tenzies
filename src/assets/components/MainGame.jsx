import { useState, useEffect, useRef } from "react";
import DiceContainer from "./DiceContainer.jsx";
import ShuffleButton from "./ShuffleButton.jsx";



export default function MainGame() {

  const [dice, setDice] = useState((() => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        id: i+1,
        value: Math.floor(Math.random() * 9 + 1),
        paused: false
      })
    }
    return arr;
  })());

  function pauseDice(id) {
    setDice(prevDice => (
      prevDice.map(dicee => {
        return dicee.id == id ? {...dicee, paused: !dicee.paused} : dicee;
      })
    )
  )}

  function shuffleDice() {
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
      <DiceContainer dice={dice} pauseDice={pauseDice}/>
      <ShuffleButton shuffleDice={shuffleDice}/>
    </main>
  );
}