import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <NavLink to="/intro" className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""}>Introducción</NavLink>
      <NavLink to="/preinstall">Pre-Instalación</NavLink>
      <NavLink to="/postinstall">Post-Instalación</NavLink>
      <NavLink to="/extras">Extras</NavLink>
      <NavLink to="/fixes">Solución de Problemas</NavLink>
    </nav>
  );
}
