import { useState } from "react";
import Menu from "../components/Menu.jsx";
import { Link } from "react-router-dom";

const CHECKS = 4;
const checksArray = new Array(CHECKS).fill(false);

export default function PreInstall() {
  const [checks, setChecks] = useState(checksArray);

  function setCheck(index) {
    checks.splice(index,1,true);  //reemplazo el elemento ubicado en 'index' por true
    setChecks([...checks]);
  }

  // console.log(checks);

  return (
    <div className="container">
      <Menu />
      <div className="main-container">
        <main>
          <h1>Pre-Instalación</h1>

          <h2>Windows 10 LTSC</h2>
          <p>Descargar Windows 10 LTSC desde el <Link to="http://www.microsoft.com/es-es/evalcenter/download-windows-10-enterprise" target="_blank" onClick={()=>setCheck(0)}>sitio oficial <img className="img-link" src="ext-link.png"/></Link> de Microsoft. {checks[0]?<img className="img-ok" src="ok.png"/>:<></>}</p>

          <h2>NTLite (Parte 1)</h2>
          <p>Descargar <Link to="https://www.ntlite.com/download/" target="_blank" onClick={()=>setCheck(1)}>NTLite <img className="img-link" src="ext-link.png"/></Link> {checks[1]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>Descargar este archivo <a href="downloads/NTLite - Integrar Alto Rendimiento.reg" download onClick={() => setCheck(2)}>.reg</a> que vamos a integrar a nuestra ISO. {checks[2] ? <img className="img-ok" src="ok.png"/> : <></>}</p>
          <br />
          <p>Instalar y configurar NTLite.</p>
          <br />
          <p>Extraer la imagen ISO de Windows en una carpeta.</p>
          <br />
          <p>Añadir dicha carpeta a NTLite y montar la edición LTSC no <em>'N'</em>.</p>
          <br />
          <p>En la sección <em>Registry</em> integramos el archivo .reg que descargamos previamente.</p>
          <br />
          <p>En la sección <em>Apply</em> solicitamos aplicar los cambios a todas las ediciones y le damos a <em>Process</em>.</p>

          <h2>NTLite (Parte 2)</h2>
          <p>Volver a montar la edición LTSC no <em>'N'</em>.</p>

          {/* <p>Alternativamente, pueden usar mi preset de LTSC para NTLite.</p> */}

          <h2>Rufus</h2>
          <p>Descargar <Link to="https://rufus.ie/downloads/" target="_blank" onClick={()=>setCheck(3)}>Rufus <img className="img-link" src="ext-link.png"/></Link> {checks[3]?<img className="img-ok" src="ok.png"/>:<></>}</p>

          <h2>Accesos Directos</h2>
          <p>Descargar <a href="downloads/Accesos Directos.7z" download>Accesos Directos</a>.</p>

          <br />
          <br />
          <br />
        </main>
      </div>
    </div>
  );
}