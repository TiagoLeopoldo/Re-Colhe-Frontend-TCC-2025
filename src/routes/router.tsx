import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PerfilSelector from "../pages/PerfilSelector/PerfilSelector";
import Inicio from "../pages/Inicio/Inicio";
import Menu from "../pages/Menu/Menu";
import DadosUsuario from "../pages/DadosUsuario/DadosUsuario";
import PevsFavoritos from "../pages/PevsFavoritos/PevsFavoritos";
import Preferencias from "../pages/Preferencias/Preferencias";
import Ajuda from "../pages/Ajuda/Ajuda";
import Notificacoes from "../pages/Notificacoes/Notificacoes";
import PontosDeColeta from "../pages/PontosDeColeta/PontosDeColeta";
import Forum from "../pages/Forum/Forum";
import MenuDicas from "../pages/MenuDicas/MenuDicas";
import NovaSolicitacao from "../pages/NovaSolicitacao/NovaSolicitacao";
import DicasReciclagem from "../pages/DicasReciclagem/DicasReciclagem";
import Aprender from "../pages/Aprender/Aprender";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/selecionar-perfil" element={<PerfilSelector />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/meus-dados" element={<DadosUsuario />} />
        <Route path="/pevs" element={<PevsFavoritos />} />
        <Route path="/preferencias" element={<Preferencias />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/notificacoes" element={<Notificacoes />} />
        <Route path="/pontos-de-coleta" element={<PontosDeColeta />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/menu-dicas" element={<MenuDicas />} />
        <Route path="/nova-solicitacao" element={<NovaSolicitacao />} />
        <Route path="/dicas-reciclagem" element={<DicasReciclagem />} />
        <Route path="/aprenda" element={<Aprender />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}