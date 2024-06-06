import { useCallback, useState } from "react";
import Childmemo from "./Childmemo";

const Usememos = () => {
    const [count, setcount] = useState(0);
    const[adds,setadds]=useState(1);
    const demofunction = useCallback(()=>{

    },[adds])
  return (
    <div style={{backgroundColor:"yellow"}}>
        <h1>Count is :: {count}</h1>
        <button onClick={()=>setcount(count+1)}>Click to increase</button>
        <Childmemo function={demofunction} adds={adds} />
    <button onClick={()=>setadds(adds+1)} >increase child</button>
    </div>
  )
}

export default Usememos