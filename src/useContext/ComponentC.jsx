
import ComponentB from './ComponentB'
import { NameContext } from './ComponentA'
import { useContext } from 'react'
const ComponentC = () => {
    const name =useContext(NameContext);

  return (
    <div>
       <h2>hello {`${name}`}</h2>
        <ComponentB/>
       
    </div>
  )
}

export default ComponentC