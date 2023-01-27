import "./Login.css"
import { Link } from "react-router-dom"
import { useState } from "react"
export const Login = () => {
    const [email1, setemail] = useState("")
    const [senha1, setsenha] = useState("")
    const email = "alunos@gmail.com"
    const senha = "123"
    function entrar(e) {
        if (email1 !== email || senha1 !== senha) {
            e.preventDefault();
        }
    }
    return (
        <div className="container-login">
            <Link to={"/"}><button className="voltar-bt">Voltar</button></Link>
            <div className="cubo-login">
                <h1>Faça seu login</h1>
                <div className="container-input-login">
                    <label>
                        <input type="email" placeholder="Email" className="input-login" value={email1} onChange={(e) => { setemail(e.target.value) }} />
                    </label>
                    <label>
                        <input type="password" placeholder="Senha" className="input-login" value={senha1} onChange={(e) => { setsenha(e.target.value) }} />
                    </label>
                </div>
                <a href="/login/adm" class="btn btn3" onClick={entrar}>Entrar</a>
            </div>

        </div>
    )
}