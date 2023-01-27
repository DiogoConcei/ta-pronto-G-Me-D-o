import "./Loadpage.css"
import { Link } from "react-router-dom"
export function Loadpage() {
    function subir() {
        window.scrollTo(0, 0)
    }
    return (
        <div className="conteudo-loadpage">
            <main className="mainload">
                <div class="conteudo-principal">
                    <h1 class="titulo-primario">Malhar não fica mais fácil, você que fica melhor!</h1>
                    <h2 class="titulo-secundario line type-animation">Seja bem-vindo a SENAC FIT</h2>
                    <div class="botoes">
                        <button class="btn-exp">Agendar aula experimental</button>
                        <button class="btn-personal">contactar personal Trainer</button>
                        <Link to="/login"><button class="btn-personal" onClick={subir}>Entrar</button></Link>
                    </div>
                </div>
            </main>
            <div class="container">
                <h1 class="titulo-primario">Nossos Planos</h1>
                <div class="divs-cards">
                    <div class="img1">
                        <h1 class="titulo-planos">PLANO JÚNIOR</h1>
                        <Link to="/junior"><button class="btn-planos" onClick={subir} id="btn-planos">GO!</button></Link>
                    </div>
                    <div class="img2">
                        <h1 class="titulo-planos">PLANO SENIOR</h1>
                        <Link to="/senior"><button class="btn-planos" onClick={subir} id="btn-planos">GO!</button></Link>
                    </div>
                    <div class="img3">
                        <h1 class="titulo-planos">PLANO PLENO</h1>
                        <Link to="/pleno"><button class="btn-planos" onClick={subir} id="btn-planos">GO!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}