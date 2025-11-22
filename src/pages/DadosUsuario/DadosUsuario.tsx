import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import InputBar from '../../components/InputBar/InputBar';
import notepad from '../../assets/icons/menu/notepad.png';
import './DadosUsuario.css';

const DadosUsuario = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');

  useEffect(() => {
    setEmail(localStorage.getItem('email') || '');
    setSenha(localStorage.getItem('password') || '');
    setCep(localStorage.getItem('cep') || '');
  }, []);

  return (
    <>
      <Header />
      <main className="main-data">
        <div className="title-container">
          <img src={notepad} alt="ícone de um caderno de informações" />
          <h1>Meus dados</h1>
        </div>

        <section className="section-data">
          <form>
            <label htmlFor="email">E-mail</label>
            <InputBar
              id="email"
              value={email}
              type="text"
              className="data-input"
              editDataIcon={true}
              disabled
            />
            <label htmlFor="senha">Senha</label>
            <InputBar
              id="senha"
              value={senha}
              type="password"
              className="data-input"
              editDataIcon={true}
              disabled
            />
            <label htmlFor="cep">CEP</label>
            <InputBar
              id="cep"
              value={cep}
              type="text"
              className="data-input"
              editDataIcon={true}
              disabled
            />
          </form>
        </section>
      </main>
      <FooterNavBar />
    </>
  );
};

export default DadosUsuario;