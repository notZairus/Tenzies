import { useState } from 'react'
import MainGame from '/src/assets/components/MainGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-full bg-slate-700 flex items-center justify-center flex-col space-y-4'>
      <MainGame />
    </div>
  );
}

export default App
