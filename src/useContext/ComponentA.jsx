import { useState } from "react"
import { createContext } from "react"
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"
export const NameContext=createContext()
const ComponentA = () => {
    const[name,setname]=useState("akash")
  return (
    <>
    <div>
     <h1>hello {name}</h1>
    </div>
    <NameContext.Provider value={name}>
        <ComponentC/>
    <ComponentB/>
    </NameContext.Provider>
    </>
  )

}

export default ComponentA