import { useState, useEffect } from "react";
import Dice from "./Dice";

export default function DiceContainer({ dice, pauseDice}) {

  let dices = dice.map((diceElement, index) => (
    <Dice key={`key${index}`} handleClick={() => pauseDice(index + 1) } dicee={diceElement}/>
  ))
  

  return (
    <> 
      <div className="flex h-80 w-full flex-col mt-4 p-4 gap-4">
        <ul className="flex-1 gap-5 flex">
          {dices.slice(0, dices.length / 2)}
        </ul>
        <ul className="flex-1 gap-5 flex">
          {dices.slice(dices.length / 2)}
        </ul>
      </div>
    </ >
  );
}