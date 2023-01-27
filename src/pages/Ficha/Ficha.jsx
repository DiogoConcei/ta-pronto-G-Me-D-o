import "./Ficha.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Ficha() {
  const [lista, setlista] = useState([]);
  async function pegar() {
    let response = await fetch("https://exportapi.onrender.com/cadastro");
    let json = await response.json();
    setlista(json);
  }
  pegar();

  function deleteMatricula(id) {
    axios.delete(`https://exportapi.onrender.com/cadastro/${id}`)
  }

  return (
    <div className="container-ficha">
      <Link to="/login">
        <button className="voltar-bt">Voltar</button>
      </Link>
      <div className="texto-ficha">
        <h1>Ficha de cadastro</h1>
      </div>
      <div className="container-cadastros">
        {lista.map((item, index) => (
          <div key={index} className="div-cadastro">
            <div>
              Numero da matricula: {item.id}
              <br />
              Nome: {item.nome}
              <br />
              Idade: {item.idade}
            </div>
            <div>
              Endereço: {item.endereco}
              <br />
              Email: {item.email}
              <br />
              Telefone: {item.telefone}
            </div>
            <div>
              Pagamento: {item.status}
              <br />
              Turno: {item.turno}
              <br />
              Plano: {item.plano}
            </div>
            <div>
              <Link to={{ pathname: `/login/adm/put/${item.id}` }}>
                <button className="bt-editar-ficha aa">Editar</button>
              </Link>
              <button className="bt-editar-ficha aa" onClick={() => deleteMatricula(item.id)}>Excluir</button>
            </div>
          </div>
        ))}
        <Link to="/login/adm/formulario">
          <button className="bt-editar-ficha aa">Fazer Cadastro</button>
        </Link>
      </div>
    </div>
  );
}
