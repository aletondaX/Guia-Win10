import { useEffect, useState } from "react";
import Menu from "../components/Menu.jsx";
import { Link } from "react-router-dom";

const CHECKS = 1;
const checksArray = new Array(CHECKS).fill(false);

export default function Extras() {
  const [checks, setChecks] = useState(checksArray);

  useEffect(() => {
    const checksLS = JSON.parse(localStorage.getItem("checksExtra"));
    if (checksLS !== null) {
      setChecks(checksLS);
    }
    const lastViewLS = JSON.parse(localStorage.getItem("lastView"));
    if (lastViewLS !== null) {
      if (lastViewLS[0] === 3) {
        document
          .getElementById(lastViewLS[1])
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, []);

  function setCheck(index) {
    checks.splice(index, 1, true); //reemplazo el elemento ubicado en 'index' por true
    setChecks([...checks]);
    localStorage.setItem("checksExtra", JSON.stringify(checks));
    localStorage.setItem("lastView", JSON.stringify([3, index]));
  }

  return (
    <div className="container">
      <Menu />
      <div className="main-container">
        <main>
          <h1>Extras</h1>

          <h2>1. Utilidad & Aplicaciones</h2>
          <p>qttabbar</p>
          <p>xmplay</p>
          <p>k-lite</p>
          <p>office 2007</p>

          <h2>2. Personalización</h2>
          <p>Borrar menú contextual WMP</p>
          <p>Mejorar menú contextual xmplay</p>
          <p>Borrar "Anclar a Acceso Rápido"</p>
          <p>Borrar "Anclar a Inicio"</p>
          <p>Easy Context Menu</p>
          <p>Menú "Enviar a"</p>
          <p>Configuración cmd & PowerShell</p>
          <p>Menú contextual "Nuevo"</p>
          <p>Carpetas favoritas + íconos</p>

          <h2>3. Firefox</h2>
          <p>Extensiones</p>
          <p>Desplazamiento suave</p>
          <p>Tweaks barra direcciones / búsqueda</p>
          <p>Motores de búsqueda custom</p>

          <h2>4. Rendimiento</h2>
          <p>Deshabilitar HPET</p>
          <p>Instalar servicio STR</p>
          <p>Tweaks adicionales</p>
          <p>Deshabilitar Control Flow Guard & +</p>
          <p>MSI Mode</p>
          <p>Deshabilitar GameBarPresenceWriter</p>
          <p>SysMain / Superfetch</p>
          <p>Deshabilitar dispositivos</p>
          <p>Configurar IP fija</p>
          <p>Deshabilitar Logs etl</p>

          <h2>5. Solución de problemas</h2>
          <p>shellexview para responsividad</p>
          <p>Visor de Eventos</p>
          <p>Programador de tareas</p>
          <p>Defender Control</p>
          
        </main>
      </div>
    </div>
  );
}
