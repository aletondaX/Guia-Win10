import { useEffect, useState } from "react";
import Menu from "../components/Menu.jsx";
import { Link } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from 'react-tooltip';
import Colapsible from "../components/Colapsible.jsx";

const CHECKS = 18;
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
          <p id="10">Descargar mi personalización para el <a href="downloads/Limpiar Menú Inicio.7z" download onClick={()=>setCheck(10)}>Menú Inicio</a>. Extraer la carpeta y ejecutar "Limpiar Menú Inicio". {checks[10]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>Iniciar la herramienta de Chris Titus mediante el acceso directo, o bien ejecutando el siguiente comando en PowerShell: <CopyToClipboard text="iwr -useb https://christitus.com/win | iex"><em className="pointer" data-tooltip-id="copy" data-tooltip-content="Click para copiar" data-tooltip-variant="info">iwr -useb https://christitus.com/win | iex</em></CopyToClipboard></p>
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
          <p id="11">Descargar <a href="downloads/OOSU10.7z" download>O&OShutUp10++</a> y mi <a href="downloads/OOSU10 preset Ale.cfg" download onClick={()=>setCheck(11)}>preset</a> para el mismo. Abrir la aplicación y cargar el preset. {checks[11]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>Reiniciar el equipo.</p>
          <br />
          <p id="12">Descargar <a href="downloads/WPD.7z" download onClick={()=>setCheck(12)}>WPD</a> (Windows Privacy Dashboard). Extraer la carpeta y abrir la aplicación. {checks[12]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>En el recuadro de <em>Telemetry</em>, darle click a Desactivar. En el recuadro de <em>Telemetry IPs</em>, darle click a Block.</p>
          <br />
          <p>Reiniciar el equipo.</p>
          <br />

          <h2>5. WinaeroTweaker</h2>
          <p id="13">Descargar <a href="downloads/WinaeroTweaker.7z" download onClick={()=>setCheck(13)}>WinaeroTweaker</a>. {checks[13]?<img className="img-ok" src="ok.png"/>:<></>}</p>
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
          <p id="14">Descargar mi conjunto de <a href="downloads/Planes de Energía.7z" download onClick={()=>setCheck(14)}>planes de energía</a> personalizados. {checks[14]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>Extraer la carpeta e instalar los planes correspondientes.</p>
          <br />
          <p><em>Opcional:</em> ejecutar Switch Power Scheme para eliminar los planes de energía que no necesites.</p>
          <br />
          <p>Ingresar al Panel de Control, Opciones de Energía y seleccionar un plan apropiado.</p>
          <br />
          <p id="15">Descargar e instalar <a href="downloads/StartIsBack.7z" download onClick={()=>setCheck(15)}>StartIsBack</a>. {checks[15]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>Ingresar a su configuración y:</p>
          <br />
          <ul>
            <li>Desmarcar <em>Mostrar Aplicaciones Modernas</em>. (x2)</li>
            <li>Desmarcar <em>Resaltar programas recién instalados</em>.</li>
            <li>Desmarcar <em>Buscar en carpetas públicas</em>.</li>
            <li>Personalizar <em>Elementos del lado derecho</em>.</li>
            <li>Elegir la apariencia deseada, en mi caso sería Der, Izq, Izq.</li>
            <li>Desmarcar <em>Usar la Jump List</em>.</li>
            <li>Marcar <em>No realizar prelanzamiento</em>. (x2)</li>
          </ul>
          <br />
          <p>Alternativamente, pueden aplicar mi configuración personal con el archivo de registro provisto.</p>
          <br />

          {/* <h2>7. Configuración de Windows</h2> */}
          <Colapsible header="7. Configuración de Windows">
          <ul>
            <li>En el apartado de Sistema - Pantalla, nos dirigimos a <em>Configuración de pantalla avanzada</em> y seleccionamos la frecuencia de actualización más alta.</li>
            <li>Vamos un paso atrás, nos dirigimos a <em>Configuración de gráficos</em> y activamos la <em>Programación de GPU acelerada por hardware</em>.</li>
            <br />
            <li>En el apartado de Sonido, vamos a <em>Panel de control de sonido</em>.</li>
            <li>Por cada dispositivo de reproducción y grabación, abrimos su configuración.</li>
            <li>Deshabilitamos los complementos o mejoras, ajustamos el formato de audio y desactivamos el uso de <em>Modo exclusivo</em>.</li>
            <li>En la pestaña de <em>Sonidos</em>, seleccionamos el perfil <em>Sin sonidos</em>. (recomendado)</li>
            <li>En la pestaña de <em>Comunicaciones</em>, seleccionamos <em>No hacer nada</em>.</li>
            <br />
            <li>En el apartado de Notificaciones, activamos o desactivamos según queramos.</li>
            <br />
            <li>En el apartado de Experiencias Compartidas, deshabilitamos <em>Compartir entre dispositivos</em>.</li>
            <br />
            <li><em>Opcional:</em> En el apartado de Dispositivos - Mouse, desmarcamos <em>Desplazar ventanas inactivas al pasar el mouse por encima</em>.</li>
            <li>En el apartado de Dispositivos - Escritura, desmarcamos todo.</li>
            <br />
            <li>En el apartado de Red e internet, nos dirigimos a Propiedades, y seleccionamos Pública.</li>
            <br />
            <li>Vamos a <em>Cambiar opciones del adaptador</em> y abrimos las propiedades de nuestra red. Desmarcamos todo menos Protocolo IPv4 y Programador de paquetes QoS.</li>
            <li>Vamos a las propiedades del Protocolo IPv4, Opciones avanzadas, pestaña WINS y deshabilitamos NetBIOS. Aceptamos en todas las ventanas.</li>
            <br />
            <li>Si nos encontramos en una PC de escritorio, volvemos a abrir las propiedades de nuestra red, y hacemos click en el botón Configurar, vamos a la pestaña de Administración de Energía, y desmarcamos la opción de permitir apagado.</li>
            <br />
            <li>En el apartado de Personalización - Colores, desactivamos <em>Efectos de transparencia</em>.</li>
            <br />
            <li>En el apartado de Menú Inicio, desactivamos <em>Mostrar aplicaciones agregadas recientemente</em>.</li>
            <br />
            <li>En el apartado de Aplicaciones, vamos a <em>Características opcionales</em> y desinstalamos todo menos Bloc de notas, Internet Explorer, Paint y Reproductor de Windows Media.</li>
            <br />
            <li>En el apartado de Cuentas, seleccionamos una imagen para nuestra cuenta.</li>
            <br />
            <li>En el apartado de Sincronizar la configuración, desactivamos todo.</li>
            <br />
            <li>En el apartado de Hora e idioma, seleccionamos nuestra zona horaria y damos a <em>Sincronizar ahora</em>.</li>
            <br />
            <li>Buscamos <em>'Región'</em> en el menú inicio, y seleccionamos el formato de datos adecuado.</li>
            <br />
            <li>En el apartado de Juegos, nos aseguramos de desactivar todo en Xbox Game bar.</li>
            <li>También activamos el <em>Modo de juego</em> dentro de la sección homónima.</li>
            <br />
            <li>En el apartado de Accesibilidad - Narrador, lo desactivamos y no permitimos su inicio mediante teclas.</li>
            <br />
            <li>En el apartado de Teclado, desactivamos el uso de <em>Teclas especiales</em>, <em>Teclas de alternancia</em> y <em>Teclas filtro</em>.</li>
            <li>Buscamos <em>'teclado filtro'</em> en el menú inicio, y desactivamos todos los tipos de teclas especiales y sus métodos de activación por teclado.</li>
            <br />
            <li>En el apartado Buscar, desactivamos el <em>Historial</em>.</li>
            <br />
            <li>En el apartado de Actualización y Seguridad, vamos a Seguridad - Firewall - Configuración avanzada - Propiedades, y desactivamos el Firewall para los 3 tipos de red.</li>
            <br />
            <li>Nos dirigimos a las Propiedades del sistema mediante menú inicio - <em>Sistema</em>.</li>
            <li>Dentro de las opciones avanzadas, configuramos la memoria virtual a un tamaño fijo personalizado, según nuestra cantidad de RAM y capacidad de almacenamiento.</li>
            <li>En la pestaña <em>Protección del sistema</em>, damos en <em>Configurar</em> y deshabilitamos la protección del sistema. No realices este paso si querés mantener los puntos de recuperación.</li>
            <li>En la pestaña <em>Acceso Remoto</em>, nos aseguramos de NO permitir las conexiones remotas.</li>
            <li>En la pestaña <em>Nombre de equipo</em>, cambiamos el nombre de ser necesario.</li>
            <li>En la pestaña de <em>Hardware</em>, deshabilitamos la descarga automática de drivers.</li>
            <br />
            <li>Nos dirigimos a Este equipo - propiedades del disco C:, desactivamos la indexación y aplicamos.</li>
            <li>Dentro de la pestaña Herramientas - Optimizar, cambiamos la configuración para optimizar mensualmente.</li>
            <br />
            <li>Ingresamos a las Opciones de carpeta, nos dirigimos a la pestaña Buscar, y marcamos <em>No usar el índice(...)</em>.</li>
            <br />
            <li>En caso de estar en una PC de escritorio: Abrimos el Administrador de dispositivos, buscamos <em>Controladoras de bus serie universal</em>, damos doble click a cada uno, y en la pestaña Administración de energía, desmarcamos <em>Permitir que el equipo apague este dispositivo</em>.</li>
            <br />
            <li>Ingresar a <em>Opciones de Internet</em> desde el menú inicio. Pestaña Seguridad - Internet - Nivel personalizado. Habilitar <em>Ejecutar aplicaciones y archivos no seguros</em>.</li>
          </ul>
          </Colapsible>

          <h2>8. Configurar servicios & tweaks  del Registro</h2>
          <p id="16">Descargar y ejecutar mi <a href="downloads/W10 - Config Servicios.bat" download onClick={()=>setCheck(16)}>archivo</a> de configuración de servicios para Windows 10. {checks[16]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <ul>
            <li>Nos preguntará si estamos usando una PC de Escritorio o una Notebook.</li>
            <li>En primera instancia, realiza una configuración básica (segura).</li>
            <li>Luego nos ofrece recortes adicionales de servicios, que por el momento vamos a dejar para más adelante.</li>
          </ul>
          <p>Al finalizar podemos reiniciar el equipo o bien seguir con el paso siguiente.</p>
          <br />
          <p id="17">Descargar y ejecutar mi <a href="downloads/W10 - Tweaks Registro.bat" download onClick={()=>setCheck(17)}>archivo</a> de tweaks del Registro. Nos preguntará si estamos usando una PC de Escritorio o una Notebook. Elegimos y esperamos a que finalice. {checks[17]?<img className="img-ok" src="ok.png"/>:<></>}</p>
          <br />
          <p>Reiniciar el equipo.</p>
          <br />
          <h3>Con esto damos por finalizada la configuración básica de nuestro sistema.</h3>
          <h3>Los espero en la sección de Extras para más configuración y optimización.</h3>

          <br />
          <br />
          <br />
          <Tooltip id="copy"/>
        </main>
      </div>
    </div>
  );
}