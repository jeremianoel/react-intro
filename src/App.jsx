import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  const handleMultiply = () => {
    setResult(num1 * num2)
  }

  return (
    <>
      <h1>Perkalian Dua Angka</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Masukkan angka pertama"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Masukkan angka kedua"
      />
      
      <br />
      <button onClick={handleMultiply}>Kalikan</button>

      {result !== null && (
        <h2>Hasil: {result}</h2>
      )}
    </>
  )
}

export default App
