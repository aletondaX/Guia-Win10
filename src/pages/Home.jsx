import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const lastViewLS = JSON.parse(localStorage.getItem("lastView"));

  // useEffect(() => {
    // if (lastViewLS != null) {
      // switch(lastViewLS[0]) {
      //   case 1: navigate("/preinstall"); break;
      //   case 2: navigate("/postinstall"); break;
      //   case 3: navigate("/extras"); break;
      //   case 4: navigate("/troubleshooting"); break;
      // }
    // } 
  // }, []);

  function redir() {
    if (lastViewLS != null) {
      switch(lastViewLS[0]) {
        case 1: navigate("/preinstall"); break;
        case 2: navigate("/postinstall"); break;
        case 3: navigate("/extras"); break;
        case 4: navigate("/troubleshooting"); break;
      }
    }
  }

  return (
    <div className="hero">
      <h1 className={ lastViewLS === null ? "hero-h1" : "hero-h1 short" }>Guía de Windows 10</h1>

      <h2 className={ lastViewLS === null ? "hero-h2" : "hero-h2 short" }>Una guía completa para la instalación, configuración y optimización de Windows 10</h2>

      <div id="logo-container">
        <img className={ lastViewLS === null ? "logo" : "logo short" } src="logo.png" alt="" />
      </div>
      
      { lastViewLS === null ? <Link to="/intro" className="btn-start">Comenzar</Link> :
      <p className="btn-start pointer short" onClick={()=>redir()}>Reanudar</p> }
      
    </div>
  );
}