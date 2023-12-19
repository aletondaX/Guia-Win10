import Menu from "../components/Menu.jsx";

export default function Intro() {
  return (
    <div className="container">
      <Menu />
      <div className="main-container">
        <main>
          <h1>Bienvenidos!</h1>
          <p>Este sitio web fue realizado para complementar el siguiente video:</p>
          {/* <br /> */}
          <p><em><a href="http://www.youtube.com/watch?v=2RC1d4_dW3Q" target="_blank">http://www.youtube.com/watch?v=2RC1d4_dW3Q <img className="img-link" src="ext-link.png"/> <img className="img-yt" src="yt.png"/></a></em></p>
          <iframe width="500" height="300" src="https://www.youtube.com/embed/2RC1d4_dW3Q?si=X0_QcrIlw9NpZf0L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          <hr />
          {/* <h2>Actualizaciones</h2> */}
          {/* <p>17-05-2024</p> */}
          {/* <ul> */}
            {/* <li>Es mi cumple</li> */}
          {/* </ul> */}
          {/* <br /> */}
          {/* <hr /> */}

          <h2>El Diagnóstico</h2>
          <p>Con cada lanzamiento de una versión de Windows, el SO se volvió cada vez más intrusivo/invasivo para el usuario. Esto se traduce básicamente en dos cosas:</p>
          <ul>
            <li>Windows realizando tareas que el usuario nunca pidió, muchas veces en momentos inoportunos para el mismo.</li>
            <li>Windows interviniendo en la intención del usuario. Por ejemplo, impidiendo descargas o bloqueando la eliminación de archivos.</li>
          </ul>
          <p>Por esto y más, considero que Windows 7 fue la última buena versión de Windows.</p>

          <h2>El Objetivo</h2>
          <p>El objetivo de esta guía es ir removiendo aspectos negativos de Windows 10, obteniendo como resultado un sistema operativo con un comportamiento mucho más similar al de Windows 7, manteniendo la compatibilidad para hardware y software que Windows 10 posée.</p>

          <h2>Ya existen otras guías...</h2>
          <p>Existen varias guías y muy buenas. La diferencia está en que:</p>
          <ul>
            <li>Vamos a usar una edición particular de Windows.</li>
            <li>Vamos a recortar la imágen de instalación removiendo algunos componentes, logrando nuestra propia "ISO Custom".</li>
            <li>Vamos a usar una selección de aplicaciones de personalización y scripts de configuración, tanto míos como de terceros.</li>
            <li>Vas a conocer una serie de técnicas, recursos y aplicaciones útiles que tal vez no conocías.</li>
          </ul>

          <h2>¿Por qué reinstalar Windows y comenzar de cero?</h2>
          <p>Si bien es posible optimizar tu instalación actual de Windows, la idea de la guía es:</p>
          <ul>
            <li>Instalar una edición particular (óptima) de Windows 10.</li>
            <li>Partir de un SO lo más limpio posible, que nos permita efectuar los cambios sin intervenciones ni errores.</li>
            <li>Algunas características nefastas de Windows, mejor removerlas previamente a la instalación.</li>
          </ul>

          <h2>Windows 10 LTSC</h2>
          <p>Es una edición oficial de Windows 10, a mi modo de ver, la mejor y única edición de Windows 10 que debió existir. Las actualizaciones son contadas con los dedos de una mano, y estas nunca son actualizaciones de carácteristas, conocidas por alterar (romper) el SO.</p>
          <p>Además, como teóricamente es una edición destinada a empresas, la misma no incluye la Microsoft Store ni ninguna de sus aplicaciones. Tampoco incluye características innecesarias como Cortana.</p>
          <p>Pese a ser orientada a empresas, fuera del uso de la Store no hay nada que no podamos hacer. Es básicamente una versión mucho menos cargada de Windows.</p>

          <h2>Windows Defender</h2>
          <p>En pocas palabras, las "soluciones antivirus" y el performance son por lo general dos cosas mutuamente exclusivas. Además de ser incompatibles con el performance, en muchos casos son intrusivas, al punto en que su perjuicio termina siendo mucho mayor a su supuesto beneficio.</p>
          <p>En esta guía usaremos NTLite para, entre otras cosas, remover Windows Defender previo a la instalación.</p>
          
          <br />
          <br />
        </main>
      </div>
    </div>
  );
}