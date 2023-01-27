import "../PlanoJunior/PlanoJunior.css"
import { Link } from "react-router-dom"

export function PlanoPleno() {
    return (
        <div className="container-plano-junior">
            <Link to={"/"}><button className="voltar-bt">Voltar</button></Link>
            <div>
                <h1>Pleno</h1>
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
                    <div className="parte2-ul">
                        <ul>
                            <li>Aulas coletivas</li>
                            <li>Duas pessoas treinam</li>
                            <li>Horários livres</li>
                            <li>Musculação livre</li>
                            <li>Sem renovação automática</li>
                            <li>Zero taxa de manutenção</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}