import { useEffect, useState } from "react";
import Menu from "../components/Menu.jsx";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from 'react-tooltip';
// import Colapsible from "../components/Colapsible.jsx";

const CHECKS = 11;
const checksArray = new Array(CHECKS).fill(false);

export default function PostInstall() {
  const [checks, setChecks] = useState(checksArray);

  useEffect(() => {
    const checksLS = JSON.parse(localStorage.getItem("checksPost"));
    if (checksLS !== null) {
      setChecks(checksLS);
    }
    const lastViewLS = JSON.parse(localStorage.getItem("lastView"));
    if (lastViewLS !== null) {
      if (lastViewLS[0] === 2) {
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
          <p>Reiniciar el equipo.</p>
          <br />

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
          <p>Reiniciar el equipo.</p>
          <br />

          <h2>3. Windows Update, librerías restantes & optimización</h2>
          <p id="7">Descargar <a href="downloads/Windows Update Blocker.7z" download onClick={()=>setCheck(7)}>Windows Update Blocker</a>. Checkear <em>Proteger Servicios</em> y deshabilitar actualizaciones. {checks[7]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p id="8">Descargar e instalar <a href="downloads/Visual C++ AIO.exe" download onClick={()=>setCheck(8)}>Visual C++ AIO</a>. {checks[8]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p id="9">Descargar e instalar <Link to="http://www.mediafire.com/file/wezrn59gm9jefco/DirectX+9.7z/file" target="_blank" onClick={()=>setCheck(9)}>DirectX 9</Link>. {checks[9]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p id="10">Descargar mi personalización para el <a href="downloads/Limpiar Menú Inicio 4.0.7z" download onClick={()=>setCheck(10)}>Menú Inicio</a>. Extraer la carpeta y ejecutar "Limpiar Menú Inicio". {checks[10]?<img className="img-ok" src="ok.png"/>:<></>}</p>
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
          <p>Reiniciar el equipo.</p>
          <br />

          <h2>4. Telemetría</h2>
          <p id="11">Descargar <a href="downloads/OOSU10.7z" download>O&OShutUp10++</a> y mi <a href="downloads/OOSU10 preset Ale.cfg" download>preset</a> para el mismo.</p>
          <br />
          <p>Abrir la aplicación y cargar el preset.</p>
          <br />
          <p>Reiniciar el equipo.</p>
          <br />
          <p id="12">Descargar <a href="downloads/WPD.7z" download>WPD</a> (Windows Privacy Dashboard).</p>
          <br />
          <p>Extraer la carpeta y abrir la aplicación.</p>
          <br />

          <h2>5. WinaeroTweaker</h2>
          <p id="13">Descargar <a href="downloads/WinaeroTweaker.7z" download>WinaeroTweaker</a>.</p>
          <br />
          <p>Extraer la carpeta y abrir la aplicación.</p>
          <br />
          <ul>
            <li>En la sección <em>Appearance</em>, activar <em>Classic Alt-Tab</em>.</li>
            <li>Desmarcar ambas casillas de <em>Theme Behavior</em>.</li>
            <br />
            <li>En la sección <em>Behavior</em>, marcar todo dentro de <em>Ads and Unwanted Apps</em>.</li>
            <li>Marcar <em>Disable App Lookup in Store</em>, <em>Disable Automatic Maintenance</em>, <em>Disable Downloads Blocking</em> y <em>Disable SmartScreen</em>.</li>
            <li>Marcar <em>Disable User Folder Backup to OneDrive</em>, <em>Keep Thumbnail Cache</em> y <em>New Apps Notification</em>.</li>
            <br />
            <li>En la sección <em>Boot and Logon</em>, marcar <em>Disable Blur on Sign-in Screen</em>.</li>
            <li>Marcar <em>Login Screen Image</em>.</li>
            <br />
            <li>En la sección <em>Desktop and Taskbar</em>, activar el <em>Classic Volume Mixer</em>.</li>
            <li>Marcar <em>Disable Thumbnails Completely</em> en <em>Taskbar Thumbnails</em>.</li>
            <br />
            <li>En la sección <em>Context Menu</em>, dirigirse a <em>Remove Default Entries</em> y marcar las entradas de menú contextual a remover.</li>
            <br />
            <li>En la sección <em>File Explorer</em>, remover todo dentro de <em>Customize This PC Folders</em>.</li>
            <li>Configurar un <em>Icon Cache Size</em> de 4096 KB.</li>
            <li>En <em>Navigation Pane - Default Items</em>, desmarcar todo menos Acceso rápido y Este equipo.</li>
            <br />
            <li>En la sección <em>Windows Defender</em>, marcar <em>Disable Windows Defender</em>.</li>
            <li>Desmarcar <em>Windows Security/Defender Tray Icon</em>.</li>
            <br />
            <li>En la sección <em>Windows Apps</em>, marcar <em>Disable auto-update of Store apps</em>.</li>
            <li>Marcar <em>Disable Windows Ink workspace</em>.</li>
            <br />
            <li>En la sección <em>Power and Battery</em>, dirigirse a <em>Hibernation Options</em> y <em>Disable Hibernation</em>.</li>
            <li>Marcar <em>Disable Power Throttling</em>. (solo en PCs de escritorio)</li>
            <br />
            <li>En la sección <em>Shortcuts</em>, marcar <em>Disable "- Shortcut" Text</em>.</li>
            <br />
            <li>En la sección <em>Get Classic Apps</em>, activar el <em>Windows Photo Viewer</em>.</li>
          </ul>
          <br />
          <p>Reiniciar el equipo.</p>
          <br />

          <h2>6. Planes de Energía & Menú Inicio</h2>

          <br />
          <br />
          <Tooltip id="copy"/>
        </main>
      </div>
    </div>
  );
}