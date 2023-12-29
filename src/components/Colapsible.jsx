import { useState } from "react"
import { Tooltip } from "react-tooltip";

export default function Colapsible(props) {
  const [active, setActive] = useState(false);

  return (
    <div className={active ? "colapsible open" : "colapsible closed"}>
      <h2 onClick={() => setActive(!active)} data-tooltip-id="colap" data-tooltip-content="Click para expandir" data-tooltip-variant="info" data-tooltip-offset="14">{props.header}</h2>
      {props.children}
      <Tooltip id="colap"/>
    </div>
  )
}
