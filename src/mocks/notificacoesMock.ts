export type Notificacao = {
  id: string;
  titulo: string;
  mensagem: string;
  hora: string;
};

// Coletas
export const notificacoesColetaMorador: Notificacao[] = [
  { id: "1m", titulo: "Novo ponto de coleta!", mensagem: "Confira no mapa do Re.Colhe.", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
  { id: "2m", titulo: "Amanhã tem coleta seletiva!", mensagem: "Prepare seus recicláveis e ajude sua comunidade.", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
  { id: "3m", titulo: "Notificações de Coleta!", mensagem: "Acompanhe avisos sobre os pontos de coleta da sua cidade.", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
];

export const notificacoesColetaEmpresa: Notificacao[] = [
  { id: "1e", titulo: "Novo ponto de coleta!", mensagem: "Confira no mapa do Re.Colhe o novo ponto de coleta empresarial.", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
  { id: "2e", titulo: "Coleta seletiva agendada!", mensagem: "Prepare sua empresa e colabore com a gestão de resíduos corporativos.", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
  { id: "3e", titulo: "Notificação de coleta!", mensagem: "Acompanhe avisos sobre os pontos de coleta do seu estabelecimento.", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
];

// Campanhas
export const notificacoesCampanhaMorador: Notificacao[] = [
  { id: "1cm", titulo: "Nova campanha!", mensagem: "Confira nova campanha.", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
];

export const notificacoesCampanhaEmpresa: Notificacao[] = [
  { id: "1ce", titulo: "Nova campanha!", mensagem: "Confira nova campanha empresarial.", hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
];

// Avisos
export const notificacoesAvisoMorador: Notificacao[] = [];
export const notificacoesAvisoEmpresa: Notificacao[] = [];