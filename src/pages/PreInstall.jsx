import { useState } from "react";
import Menu from "../components/Menu.jsx";

export default function PreInstall() {
  const [ltsc, setLtsc] = useState(false);
  const [ntlite, setNtlite] = useState(false);
  const [reg, setReg] = useState(false);

  return (
    <div className="container">
      <Menu />
      <div className="main-container">
        <main>
          <h1>Pre-Instalación</h1>

          <h2>Windows 10 LTSC</h2>
          <p>Descargar Windows 10 LTSC desde el <a href="http://www.microsoft.com/es-es/evalcenter/download-windows-10-enterprise" target="_blank" onClick={() => setLtsc(true)}>sitio oficial <img className="img-link" src="ext-link.png"/></a> de Microsoft. {ltsc ? <img className="img-ok" src="ok.png"/> : <></>}</p>

          <h2>NTLite (Parte 1)</h2>
          <p>Descargar <a href="https://www.ntlite.com/download/" target="_blank" onClick={() => setNtlite(true)}>NTLite <img className="img-link" src="ext-link.png"/></a> {ntlite ? <img className="img-ok" src="ok.png"/> : <></>}</p>
          <p>Instalar y configurar NTLite.</p>
          <p>Extraer la imagen ISO de Windows en una carpeta.</p>
          <p>Añadir dicha carpeta a NTLite y montar la edición de LTSC no "N".</p>
          <p>Descargar este archivo <a href="NTLite - Integrar Alto Rendimiento.reg" download onClick={() => setReg(true)}>.reg</a> que vamos a integrar a nuestra ISO. {reg ? <img className="img-ok" src="ok.png"/> : <></>}</p>
          <p>En la sección <em>Registry</em> integramos el archivo .reg que acabamos de descargar.</p>
          <p>En la sección <em>Apply</em> solicitamos aplicar los cambios a todas las ediciones y le damos a <em>Process</em>.</p>

          <h2>NTLite (Parte 2)</h2>

          <h2>Rufus</h2>

          <h2>Accesos Directos</h2>

          <br />
          <br />
          <br />
        </main>
      </div>
    </div>
  );
}