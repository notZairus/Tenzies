


export default function ShuffleButton({ shuffleDice, isGameOver }) {
  return (
    <>
      <div className="w-full flex mt-5 justify-center">
        <button onClick={shuffleDice} className="transition-all duration-300 px-10 py-2 bg-blue-500 text-white rounded-lg text-4xl font-semibold hover:bg-blue-700">
          {isGameOver ? "RESTART GAME" : "SHUFFLE"}
        </button>
      </div>
    </>
  )
};