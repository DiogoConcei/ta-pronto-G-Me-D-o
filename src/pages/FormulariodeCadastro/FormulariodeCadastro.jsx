import "./FormulariodeCadastro.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function FormulariodeCadastro() {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();

  const addData = (data) =>
    axios
      .post("https://exportapi.onrender.com/cadastro", data)
      .then(() => {
        console.log("Deu certo");
      })
      .catch(() => {
        console.log("Deu errado");
      });

  return (
    <div className="container-formulario">
      <Link to="/login/adm">
        <button className="voltar-bt">Voltar</button>
      </Link>
      <h1 className="texto-ficha">CADASTRO</h1>
      <form action="#" className="form-cad" onSubmit={handleSubmit(addData)}>
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
