import { useState } from "react";
import Menu from "../components/Menu.jsx";

const CHECKS = 3;
const checksArray = new Array(CHECKS).fill(false);

export default function PreInstall() {
  const [checks, setChecks] = useState(checksArray);

  function setCheck(index) {
    checks.splice(index,1,true);  //reemplazo el elemento ubicado en 'index' por true
    setChecks([...checks]);
  }

  return (
    <div className="container">
      <Menu />
      <div className="main-container">
        <main>
          <h1>Pre-Instalación</h1>

          <h2>Windows 10 LTSC</h2>
          <p>Descargar Windows 10 LTSC desde el <a href="http://www.microsoft.com/es-es/evalcenter/download-windows-10-enterprise" target="_blank" onClick={() => setCheck(0)}>sitio oficial <img className="img-link" src="ext-link.png"/></a> de Microsoft. {checks[0] ? <img className="img-ok" src="ok.png"/> : <></>}</p>

          <h2>NTLite (Parte 1)</h2>
          <p>Descargar <a href="https://www.ntlite.com/download/" target="_blank" onClick={() => setCheck(1)}>NTLite <img className="img-link" src="ext-link.png"/></a> {checks[1] ? <img className="img-ok" src="ok.png"/> : <></>}</p>
          <p>Descargar este archivo <a href="NTLite - Integrar Alto Rendimiento.reg" download onClick={() => setCheck(2)}>.reg</a> que vamos a integrar a nuestra ISO. {checks[2] ? <img className="img-ok" src="ok.png"/> : <></>}</p>
          <p>Instalar y configurar NTLite.</p>
          <p>Extraer la imagen ISO de Windows en una carpeta.</p>
          <p>Añadir dicha carpeta a NTLite y montar la edición LTSC no <em>'N'</em>.</p>
          <p>En la sección <em>Registry</em> integramos el archivo .reg que descargamos previamente.</p>
          <p>En la sección <em>Apply</em> solicitamos aplicar los cambios a todas las ediciones y le damos a <em>Process</em>.</p>

          <h2>NTLite (Parte 2)</h2>
          <p>Volver a montar la edición LTSC no <em>'N'</em>.</p>

          {/* <p>Alternativamente, pueden usar mi preset de LTSC para NTLite.</p> */}

          <h2>Rufus</h2>
          <p>Descargar Rufus</p>

          <h2>Accesos Directos</h2>
          <p>Descargar Accesos Directos</p>

          <br />
          <br />
          <br />
        </main>
      </div>
    </div>
  );
}