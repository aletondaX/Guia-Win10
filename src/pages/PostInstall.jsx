import { Link } from "react-router-dom";
import Colapsible from "../components/Colapsible.jsx";
import Menu from "../components/Menu.jsx";

export default function PostInstall() {
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
          <p>Instalar uBlock Origin, bloqueador de anuncios por excelencia <Link to="http://addons.mozilla.org/es/firefox/addon/ublock-origin/" target="_blank">para Firefox</Link> o <Link to="http://chromewebstore.google.com/search/ublock?hl=es" target="_blank">para Chrome</Link>.</p>
          <br />
          <p>Desinstalar Edge usando este <a href="downloads/Desinstalar Edge.bat" download>script</a>. (credits to <Link to="https://github.com/AveYo" target="_blank">AveYo</Link>)</p>
          <br />
          <p>Instalar drivers pertinentes.</p>
          <br />
          <p>Reiniciar.</p>

          <h2>2. WinRAR & dependientes de Windows Update</h2>
          <p>Ajustar los efectos visuales, mediante el acceso directo o bien ejecutando <em className="seleccionable">SystemPropertiesPerformance</em>.</p>
          <br />
          <p>Seleccionar la opción de rendimiento y luego habilitar:</p>
          <ul>
            <li>Mostrar vistas en miniatura</li>
            <li>Suavizar bordes para fuentes</li>
          </ul>
          <br />
          <p>Descargar <Link to="http://www.winrar.es/descargas/winrar" target="_blank">WinRAR <img className="img-link" src="ext-link.png"/></Link> y también su <a href="downloads/rarreg.key" download>licencia</a>. Instalar.</p>
          <br />
          <p>Descargar e instalar <Link to="http://www.mediafire.com/file/zevsc78xiatv8gs/dotnetfx35.exe/file" target="_blank">.NET Framework 3.5</Link>.</p>
          <br />
          <p>Descargar e instalar <Link to="http://www.mediafire.com/file/5kas7ghc2tpd312/dotnet_4.8.1_-_KB5011048_x64.msu/file" target="_blank">.NET Framework 4.8.1</Link>.</p>
          <br />
          <p>Deshabilitar UAC utilizando este archivo <a href="downloads/W10 - Deshabilitar UAC.reg" download>.reg</a>.</p>
          <br />
          <p>Activar Windows mediante <a href="downloads/Activar Windows 10 (HWID).cmd" download>HWID</a> o alternativamente <a href="downloads/Activar Windows 10 (KMS38).cmd" download>KMS</a>.</p>
          <br />
          <p>Reiniciar.</p>

          <h2>3. Updates AFUERA. Runtimes restantes y Optimización</h2>
          <p>Descargar <a href="downloads/Windows Update Blocker.7z" download>Windows Update Blocker</a>. Checkear <em>Proteger Servicios</em> y deshabilitar actualizaciones.</p>
          <br />
          <p>Descargar e instalar <a href="downloads/Visual C++ AIO.exe" download>Visual C++ AIO</a>.</p>
          <br />
          <p>Descargar e instalar <Link to="http://www.mediafire.com/file/wezrn59gm9jefco/DirectX+9.7z/file" target="_blank">DirectX 9</Link>.</p>
          <br />
          <p>Descargar mi personalización para el <a href="downloads/Limpiar Menú Inicio 4.0.7z" download>Menú Inicio</a>. Extraer la carpeta y ejecutar "Limpiar Menú Inicio".</p>
          <br />
          <p>Iniciar la herramienta de Chris Titus mediante el <a href="downloads/Chris Titus Windows Utility.lnk" download>acceso directo</a>.</p>
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
        </main>
      </div>
    </div>
  );
}