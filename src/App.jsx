import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainGame from '/src/assets/components/MainGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full bg-black flex items-center justify-center'>
      <MainGame />
    </div>
  );
}

export default App
