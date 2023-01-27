import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import "../FormulariodeCadastro/FormulariodeCadastro.css";

export function FormEdit() {
  const {
    register,
    handleSubmit,
    formState: { erros }, reset
  } = useForm();

  let history = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://exportapi.onrender.com/cadastro/${id}`).then((response) => { reset(response.data) })
  })

  const editFicha = data => axios.put(`https://exportapi.onrender.com/cadastro/${id}`, data).then(() => {
    console.log("Deu tudo certo")
    history.push("/")
  }).catch(() => {
    console.log("DEU ERRADO")
  })

  return (
    <div className="container-formulario">
      <Link to="/login/adm">
        <button className="voltar-bt">Voltar</button>
      </Link>
      <h1 className="texto-ficha">EDIT</h1>
      <form action="#" className="form-cad" onSubmit={handleSubmit(editFicha)}>
        <div className="part-form">
          <label>
            Numero de matricula: <br />
            <input type="text" name="matricula" {...register("matricula")} />
          </label>
          <label>
            Idade: <br />
            <input type="number" name="idade" {...register("idade")} />
          </label>
          <label>
            Nome: <br />
            <input type="text" name="nome" {...register("nome")} />
          </label>
        </div>
        <div className="part-form">
          <label>
            Endereço: <br />
            <input type="text" name="endereco" {...register("endereco")} />
          </label>
          <label>
            Email: <br />
            <input type="email" name="email" {...register("email")} />
          </label>
          <label>
            Telefone: <br />
            <input type="text" name="telefone" {...register("telefone")} />
          </label>
        </div>
        <div className="part-form">
          <label>
            Pagamento: <br />
            <input type="text" name="pagamento" {...register("pagamento")} />
          </label>
          <label>
            Turno: <br />
            <input type="text" name="turno" {...register("turno")} />
          </label>
          <label>
            Plano: <br />
            <input type="text" name="plano" {...register("plano")} />
          </label>
        </div>
        <button className="bt-editar-ficha aa">ENVIAR</button>
      </form>
    </div>
  );
}
