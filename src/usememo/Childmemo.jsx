import { memo } from "react"

const Childmemo = (props) => {
    console.log("hello child component")
  return (
    <div>
      <h1>Child demo</h1>
       <h1 style={{backgroundColor:"blue"}}>childcomponet {props.adds}</h1>
    </div>
  )
}

export default memo(Childmemo)