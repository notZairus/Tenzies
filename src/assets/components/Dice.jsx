

export default function Dice({ dicee, handleClick }) {

  return (
    <button 
      onClick={handleClick} 
      className={dicee.paused ? "transition-all duration-300 flex-1 rounded-lg shadow-lg flex items-center justify-center bg-slate-700 text-white" 
                              : "transition-all duration-300 flex-1 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-400 hover:text-white"}
    >
      <p className="text-4xl">{dicee.value}</p>
    </button>
  )
}