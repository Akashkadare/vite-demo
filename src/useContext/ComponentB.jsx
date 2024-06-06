import { NameContext } from './ComponentA'
import { useContext } from 'react'
const ComponentB = () => {
    const name =useContext(NameContext);
  return (
    <div>
        <h1>{`Welcome ${name}`}</h1>
    </div>
  )
}

export default ComponentB