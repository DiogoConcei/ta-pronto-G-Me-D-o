import "./PlanoJunior.css"
import { Link } from "react-router-dom"

export function PlanoJunior() {
  return (
    <div className="container-plano-junior">
      <Link to={"/"}><button className="voltar-bt">Voltar</button></Link>
      <div>
        <h1>Plano Junior</h1>
        <p>
          Treine em todas as Unidades Senac FIT.<hr />
        </p>
      </div>
      <div className="container-beneficios">
        <p>Beneficios</p>
        <div className="container-ul">
          <div className="parte1-ul">
            <ul>
              <li>BODYSTEP</li>
              <li>BODYCOMBAT</li>
              <li>B-16</li>
              <li>BODYATTACK</li>
              <li>FITDANCE</li>
              <li>GRIT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}