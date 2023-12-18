import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h1>Guía de Windows 10</h1>

      <h2>Una guía completa para la instalación, configuración y optimización de Windows 10</h2>

      <img id="logo" src="logo.png" alt="" />
      
      <Link to="/intro" className="btn-start">Comenzar</Link>
    </div>
  );
}