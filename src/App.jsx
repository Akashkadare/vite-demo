import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demofile from './Demofile'
import ComponentA from './useContext/ComponentA'
import Usememos from './usememo/Usememos'
// import ComponentB from './useContext/ComponentB'

function App() {
//   const [count, setCount] = useState(0)
//   let vite=useRef(null);
//   let react=useRef(null)
 
// // useEffect(() => {
// //   a.current=a.current+1;
// //   console.log(`item rendered....${a.current}`)

// // });
// useEffect(() => {
  
// react.current.style.backgroundColor="yellow"
// vite.current.style.display="block"

  
// });
// const changeback=()=>{

// }
  return (
    <>
      {/* <div> */}
        {/* <Demofile count={count}/>
        <a target="_blank">
          <img src={viteLogo} onClick={()=>changeback()} className="logo" alt="Vite logo" ref={vite} />
        </a>
        <a  target="_blank">
          <img src={reactLogo} ref={react} onClick={()=>react.current.style.backgroundColor="pink"} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ComponentA/> */}
      <Usememos/>
     
    </>
  )
}

export default App
