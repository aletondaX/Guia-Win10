import { useEffect, useState } from "react";
import Menu from "../components/Menu.jsx";
import { Link } from "react-router-dom";

const CHECKS = 1;
const checksArray = new Array(CHECKS).fill(false);

export default function Extras() {
  const [checks, setChecks] = useState(checksArray);

  useEffect   (() => {
    const checksLS = JSON.parse(localStorage.getItem("checksExtra"));
    if (checksLS !== null) {
      setChecks(checksLS);
    }
    const lastViewLS = JSON.parse(localStorage.getItem("lastView"));
    if (lastViewLS !== null) {
      if (lastViewLS[0] === 3) {
        document.getElementById(lastViewLS[1]).scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } 
  }, []);

  function setCheck(index) {
    checks.splice(index,1,true);  //reemplazo el elemento ubicado en 'index' por true
    setChecks([...checks]);
    localStorage.setItem("checksExtra",  JSON.stringify(checks));
    localStorage.setItem("lastView",  JSON.stringify([3, index]));
  }

  return (
    <div className="container">
      <Menu />
      <div className="main-container">
        <main>
          <h1>Extras</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate fugiat commodi, repudiandae at et debitis consequatur quidem obcaecati beatae impedit a earum. Saepe tenetur iste accusamus, repellendus iure nam? Illo!</p>
        </main>
      </div>
    </div>
  );
}