

export default function Dice({ dicee, handleClick }) {

  return (
    <button onClick={handleClick} className={dicee.paused ? "flex-1 rounded-lg shadow-lg flex items-center justify-center bg-slate-400 text-white" : "flex-1 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-100"}>
      <p className="text-4xl">{dicee.value}</p>
    </button>
  )
}