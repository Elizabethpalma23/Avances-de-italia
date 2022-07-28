import { useState } from 'react'
import './App.css'
import{ useForm } from "react-hook-form"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="imagen">
      
      </div>
      <h1>RESTAURANTE ITALIANO</h1><div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Pedidos {count}
          </button>
          <p>
            <code>La mejor comida de europa </code>
          </p>
        </div><div>
            <p>
              <code>Click para mas informacion</code>
            </p>
          </div></>
         )
  }


export default App
