import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import FooterNavBar from '../../components/FooterNavBar/FooterNavBar';
import Accordion from '../../components/Accordion/Accordion';
import help from '../../assets/icons/help-title.png';
import './Ajuda.css';

const Ajuda: React.FC = () => {

  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    setUserType(localStorage.getItem('userType'));
  }, []);

  return (
    <>
      <Header />
      <main className="main-help">
        <div className="title-container">
          <img src={help} alt="Ícone de interrogação para ilustrar título Ajuda" />
          <h1>Ajuda</h1>
        </div>

        <section className="section-help">
          <Accordion title={userType === 'morador' ? "Como encontrar um ponto de coleta?" : "Como localizar um ponto de coleta para minha empresa?"}>
            {userType === 'morador' ? (
            `É bem simples! Na tela inicial, você verá um
            mapa com o botão “Ver mapa”. Ao tocar nele,
            você será levado para uma tela com os pontos
            de coleta mais próximos da sua região, incluindo
            todas as informações de contato que você
            precisa. Assim, você consegue reciclar de forma
            rápida, prática e consciente.`
            ) : (
            `É bem simples! Na tela inicial, você verá um
            mapa com o botão “Ver mapa”. Ao tocar nele,
            você será levado para uma tela com os pontos
            de coleta empresariais mais próximos da sua
            região, incluindo todas as informações de
            contato que você precisa. Assim, você consegue
            reciclar de forma rápida, prática e consciente.`)}
          </Accordion>

          <Accordion title={userType === 'morador' ? "Posso atualizar meu CEP depois de cadastrado?" : "Como acessar informações sobre descarte para minha empresa?"}>
            {userType === 'morador' ? (
              `Sim, você pode alterar seu CEP a qualquer momento.
              Siga o passo a passo abaixo:
              1. Acesse o menu principal do app.
              2. Vá até a seção Meus dados.
              3. Clique no ícone de edição ao lado das suas informações.
              4. Atualize o campo CEP com o novo endereço.
              5. Toque em Salvar para confirmar a alteração.
              Pronto! Seu novo CEP será atualizado automaticamente, e o app mostrará as informações e coletas da sua nova região.`
            ) : (
              `Na barra de navegação inferior do app, toque no ícone "Aprenda".
              Nessa seção, você encontrará informações, orientações e boas práticas sobre o descarte correto dos materiais da sua empresa.
              O conteúdo é atualizado periodicamente para ajudar sua empresa a manter um descarte consciente e alinhado às normas ambientais.`)}
          </Accordion>

          <Accordion title={userType === 'morador' ? "Como alterar minhas preferências de notificações?" : "Como receber notificações sobre coletas agendadas para minha empresa?" }>
            {userType === 'morador' ? (
            `Para alterar suas preferências de notificações,
            siga os passos abaixo:
            1. Acesse o menu principal do app.
            2. Vá até a seção “Preferências”.
            3. Dentro dessa seção, você poderá ajustar suas
            opções de notificações, lembretes e avisos
            conforme desejar.
            As alterações são salvas automaticamente,
            e suas preferências serão aplicadas nas próximas
            interações do app.`
            ) : (
            `Para receber notificações sobre coletas
            agendadas, acesse o menu principal e selecione
            “Preferências”.
            Em seguida, ative as opções de notificações e
            avisos de agendamento.
            Assim, sempre que uma nova coleta for
            marcada ou houver alguma atualização, sua
            empresa receberá um alerta diretamente pelo
            app.`)}
          </Accordion>

          <Accordion title={userType === 'morador' ? "Como posso acessar o fórum e participar das discussões?" : "Como participar do fórum?"}>
            {userType === 'morador' ? (
            `Na tela inicial (Home) do app, você verá uma
            imagem com um mapa e o botão “Ver mapa”.
            Ao clicar nesse botão, você será direcionado
            para uma tela que mostra os pontos de coleta
            mais próximos de você.
            Se quiser buscar por um material específico,
            utilize a barra de busca localizada na parte
            superior da tela do mapa.
            Assim, você pode localizar facilmente os pontos
            de coleta de acordo com o tipo de material que
            deseja descartar.`
            ) : (
            `Para participar do fórum, acesse o menu
            principal e selecione a opção “Fórum”.
            Lá, você poderá ler publicações, comentar,
            compartilhar experiências e interagir com outras
            empresas e usuários do Re.Colhe.`
            )}
          </Accordion>
        </section>
      </main>
      <FooterNavBar />
    </>
  );
};

export default Ajuda;