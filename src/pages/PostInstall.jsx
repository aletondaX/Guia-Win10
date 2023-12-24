import { useEffect, useState } from "react";
import Menu from "../components/Menu.jsx";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from 'react-tooltip';
// import Colapsible from "../components/Colapsible.jsx";

const CHECKS = 7;
const checksArray = new Array(CHECKS).fill(false);

export default function PostInstall() {
  const [checks, setChecks] = useState(checksArray);

  useEffect(() => {
    const checksLS = JSON.parse(localStorage.getItem("checksPost"));
    if (checksLS != null) {
      setChecks(checksLS);
    }
    const lastViewLS = JSON.parse(localStorage.getItem("lastView"));
    // console.log(lastViewLS);
    if (lastViewLS != null) {
      if (lastViewLS[0] == 2) {
        // console.log("existe en local storage indice guardado y corresponde a pag 2");
        document.getElementById(lastViewLS[1]).scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } 
  }, []);

  function setCheck(index) {
    checks.splice(index,1,true);  //reemplazo el elemento ubicado en 'index' por true
    setChecks([...checks]);
    localStorage.setItem("checksPost",  JSON.stringify(checks));
    localStorage.setItem("lastView",  JSON.stringify([2, index]));
  }

  return (
    <div className="container">
      <Menu />
      <div className="main-container">
        <main>
          <h1>Post-Instalación</h1>
          
          <br />
          <p><em>Reanudar reproducción del video:</em></p>
          <p><em><Link to="http://www.youtube.com/watch?v=2RC1d4_dW3Q" target="_blank">http://www.youtube.com/watch?v=2RC1d4_dW3Q <img className="img-link" src="ext-link.png"/> <img className="img-yt" src="yt.png"/></Link></em></p>
          <br />
          <br />
          {/* <p className="click-to-expand"><small>(click en cada sección para expandir ↓)</small></p> */}
          {/* <Colapsible key={0} header="Instalar un Navegador"> */}
          {/* </Colapsible> */}
          <h2>1. Navegador & Drivers</h2>
          <p>Instalar un navegador utilizando los accesos directos proporcionados previamente. En caso de preferir un navegador diferente, usar Edge para descargarlo.</p>
          <br />
          <p id="0">Instalar uBlock Origin, bloqueador de anuncios por excelencia <Link to="http://addons.mozilla.org/es/firefox/addon/ublock-origin/" target="_blank" onClick={()=>setCheck(0)}>para Firefox</Link> o <Link to="http://chromewebstore.google.com/search/ublock?hl=es" target="_blank" onClick={()=>setCheck(0)}>para Chrome</Link>. {checks[0]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p id="1">Desinstalar Edge usando este <a href="downloads/Desinstalar Edge.bat" download onClick={()=>setCheck(1)}>script</a>. (credits to <Link to="https://github.com/AveYo" target="_blank">AveYo</Link>) {checks[1]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>Instalar drivers pertinentes.</p>
          <br />
          <p>Reiniciar.</p>

          <h2>2. WinRAR & dependientes de Windows Update</h2>
          <p>Ajustar los efectos visuales mediante el acceso directo, o bien ejecutando <CopyToClipboard text="SystemPropertiesPerformance"><em className="pointer" data-tooltip-id="copy" data-tooltip-content="Click para copiar" data-tooltip-variant="info">SystemPropertiesPerformance</em></CopyToClipboard>.</p>
          <br />
          <p>Seleccionar la opción de rendimiento y luego habilitar:</p>
          <ul>
            <li>Mostrar vistas en miniatura</li>
            <li>Suavizar bordes para fuentes</li>
          </ul>
          <br />
          <p id="2">Descargar <Link to="http://www.winrar.es/descargas/winrar" target="_blank">WinRAR <img className="img-link" src="ext-link.png"/></Link> y también su <a href="downloads/rarreg.key" download onClick={()=>setCheck(2)}>licencia</a>. Instalar. {checks[2]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p id="3">Descargar e instalar <Link to="http://www.mediafire.com/file/zevsc78xiatv8gs/dotnetfx35.exe/file" target="_blank" onClick={()=>setCheck(3)}>.NET Framework 3.5</Link>. {checks[3]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p id="4">Descargar e instalar <Link to="http://www.mediafire.com/file/5kas7ghc2tpd312/dotnet_4.8.1_-_KB5011048_x64.msu/file" target="_blank" onClick={()=>setCheck(4)}>.NET Framework 4.8.1</Link>. {checks[4]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p id="5">Deshabilitar UAC utilizando este archivo <a href="downloads/W10 - Deshabilitar UAC.reg" download onClick={()=>setCheck(5)}>.reg</a>. {checks[5]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p id="6">Activar Windows mediante <a href="downloads/Activar Windows 10 (HWID).cmd" download onClick={()=>setCheck(6)}>HWID</a> o alternativamente <a href="downloads/Activar Windows 10 (KMS38).cmd" download onClick={()=>setCheck(6)}>KMS</a>. {checks[6]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>Reiniciar.</p>

          <h2>3. Windows Update AFUERA. Runtimes restantes & Optimización</h2>
          <p>Descargar <a href="downloads/Windows Update Blocker.7z" download>Windows Update Blocker</a>. Checkear <em>Proteger Servicios</em> y deshabilitar actualizaciones.</p>
          <br />
          <p>Descargar e instalar <a href="downloads/Visual C++ AIO.exe" download>Visual C++ AIO</a>.</p>
          <br />
          <p>Descargar e instalar <Link to="http://www.mediafire.com/file/wezrn59gm9jefco/DirectX+9.7z/file" target="_blank">DirectX 9</Link>.</p>
          <br />
          <p>Descargar mi personalización para el <a href="downloads/Limpiar Menú Inicio 4.0.7z" download>Menú Inicio</a>. Extraer la carpeta y ejecutar "Limpiar Menú Inicio".</p>
          <br />
          <p>Iniciar la herramienta de Chris Titus mediante el acceso directo, o bien introduciendo el siguiente comando en PowerShell: <CopyToClipboard text="iwr -useb https://christitus.com/win | iex"><em className="pointer" data-tooltip-id="copy" data-tooltip-content="Click para copiar" data-tooltip-variant="info">iwr -useb https://christitus.com/win | iex</em></CopyToClipboard></p>
          <br />
          <p>En la sección de <em>Tweaks</em>, seleccionar <em>Desktop</em> o <em>Laptop</em> según corresponda. Además:</p>
          <ul>
            <li>Checkear Disable Notification Tray</li>
            <li>Checkear Disable IPv6</li>
            <li>Seleccionar DNS de Google</li>
            <li>Opcional: Tema Oscuro</li>
          </ul>
          <p>Darle a <em>Run Tweaks</em> y esperar a que termine.</p>
          <br />
          <p>Reiniciar.</p>

          <br />
          <br />
          <Tooltip id="copy"/>
        </main>
      </div>
    </div>
  );
}