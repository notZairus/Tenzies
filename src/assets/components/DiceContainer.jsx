import { useState, useEffect } from "react";
import Dice from "./Dice";

export default function DiceContainer({ dice, pauseDice}) {
  

  return (
    <> 
      <div className="flex h-80 w-full flex-col mt-4 p-4 gap-4">
        <div className="flex-1 gap-5 flex">
          <Dice handleClick={() => pauseDice(1) } dicee={dice[0]}/>
          <Dice handleClick={() => pauseDice(2) } dicee={dice[1]}/>
          <Dice handleClick={() => pauseDice(3) } dicee={dice[2]}/>
          <Dice handleClick={() => pauseDice(4) } dicee={dice[3]}/>
          <Dice handleClick={() => pauseDice(5) } dicee={dice[4]}/>
        </div>
        <div className="flex-1 gap-5 flex">
          <Dice handleClick={() => pauseDice(6)} dicee={dice[5]}/>
          <Dice handleClick={() => pauseDice(7)} dicee={dice[6]}/>
          <Dice handleClick={() => pauseDice(8)} dicee={dice[7]}/>
          <Dice handleClick={() => pauseDice(9)} dicee={dice[8]}/>
          <Dice handleClick={() => pauseDice(10)} dicee={dice[9]}/>
        </div>
      </div>
    </ >
  );
}