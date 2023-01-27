import { Routes, Route } from "react-router-dom";
import { Erro404 } from "./pages/Erro404/Erro404";
import { Ficha } from "./pages/Ficha/Ficha";
import { FormulariodeCadastro } from "./pages/FormulariodeCadastro/FormulariodeCadastro";
import { FormEdit } from "./pages/EditPage/FormEdit";
import { Loadpage } from "./pages/Loadpage/Loadpage";
import { Login } from "./pages/login/Login";
import { PlanoJunior } from "./pages/PlanoJunior/PlanoJunior";
import { PlanoPleno } from "./pages/PlanoPleno/PlanoPleno";
import { PlanoSenior } from "./pages/PlanoSenior/PlanoSenior";

export function Routermain() {
  return (
    <Routes>
      <Route path="/" element={<Loadpage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Erro404 />} />
      <Route path="/junior" element={<PlanoJunior />} />
      <Route path="/pleno" element={<PlanoPleno />} />
      <Route path="/senior" element={<PlanoSenior />} />
      <Route path="/login/adm" element={<Ficha />} />
      <Route path="/login/adm/formulario" element={<FormulariodeCadastro />} />
      <Route path="/login/adm/put/:id" element={<FormEdit />} />
    </Routes>
  );
}
