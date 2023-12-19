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
          <p className="click-to-expand"><small>(click para expandir cada sección ↓)</small></p>
          <Colapsible key={0} header="Instalar Navegador">
            <p>Instalar un navegador utilizando los accesos directos proporcionados previamente. En caso de preferir un navegador diferente, usar Edge para descargarlo.</p>
            <br />
            <p>Instalar uBlock Origin, bloqueador de anuncios por excelencia <Link to="http://addons.mozilla.org/es/firefox/addon/ublock-origin/" target="_blank">para Firefox</Link> o <Link to="https://chromewebstore.google.com/search/ublock?hl=es" target="_blank">para Chrome</Link>.</p>
          </Colapsible>
          
          <Colapsible key={1} header="Desinstalar Edge">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dignissimos nam sint eveniet deleniti quam dolor ratione ex cum, minima doloribus, fugiat officia laboriosam fuga consequuntur repellendus dicta numquam recusandae?</p>
          </Colapsible>

          <br />
          <br />
        </main>
      </div>
    </div>
  );
}