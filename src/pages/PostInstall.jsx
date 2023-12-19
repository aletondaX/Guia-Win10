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
          <h2>Primeros Pasos</h2>
          <p>Instalar un navegador utilizando los accesos directos proporcionados previamente. En caso de preferir un navegador diferente, usar Edge para descargarlo.</p>
          <br />
          <p>Instalar uBlock Origin, bloqueador de anuncios por excelencia <Link to="http://addons.mozilla.org/es/firefox/addon/ublock-origin/" target="_blank">para Firefox</Link> o <Link to="https://chromewebstore.google.com/search/ublock?hl=es" target="_blank">para Chrome</Link>.</p>
          <br />
          <p>Desinstalar Edge usando este <a href="Desinstalar Edge.bat" download>script</a>.</p>
          <br />
          <p>Instalar drivers pertinentes. Por ejemplo, el de tu tarjeta gráfica, ya que es prioridad poder seleccionar una resolución más cómoda. Preferiblemente desde el sitio del fabricante y no mediante Windows Update.</p>
          <br />
          <p style={{color:"#2db300"}}><strong>Reiniciar</strong></p>

          <h2>Segundos Pasos (?)</h2>
          <p>Ajustar los efectos visuales, mediante el acceso directo o bien ejecutando <em className="seleccionable">SystemPropertiesPerformance</em>.</p>
          <br />
          <p>Seleccionar la opción de rendimiento y luego habilitar:</p>
          <ul>
            <li>Mostrar vistas en miniatura</li>
            <li>Suavizar bordes para fuentes</li>
          </ul>
          <br />
          <p>Descargar <Link to="http://www.winrar.es/descargas/winrar" target="_blank">WinRAR <img className="img-link" src="ext-link.png"/></Link> y también su <a href="rarreg.key" download>licencia</a>. Instalar.</p>

          <br />
          <br />
        </main>
      </div>
    </div>
  );
}