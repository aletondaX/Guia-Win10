import { useState } from "react"

export default function Colapsible(props) {
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "colapsible open" : "colapsible closed"}>
      <h2 onClick={() => setActive(!active)}>{props.header}</h2>
      {/* {active ? props.children : <></>} */}
      {props.children}
    </div>
  )
}
