export const SITE = {
  brand: "Willian | O Montador de Móveis",
  name: "Willian O Montador de Móveis",
  url: "https://omontadordemoveis.com",
  phoneDisplay: "(51) 98016-8744",
  whatsappNumber: "5551980168744",
  region: "Novo Hamburgo e Vale dos Sinos",
  ga4: "G-H0R3NGYK8H",
  gtm: "GTM-WV6RLBVN",
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Willian! Vi seu site e gostaria de solicitar um orçamento para montagem de móveis.";

export const whatsappUrl = (message: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Região", href: "#regiao" },
  { label: "Contato", href: "#contato" },
];

export const STATS = [
  { value: "Desde 2020", label: "Atuando na profissão" },
  { value: "+5.000", label: "Móveis Montados" },
];

export const CITIES = [
  "Novo Hamburgo",
  "São Leopoldo",
  "Campo Bom",
  "Estância Velha",
  "Sapucaia do Sul",
  "Dois Irmãos",
  "Ivoti",
  "Sapiranga",
];

export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/q7QVvqXvdefiMxkP7";

export const SERVICES = [
  {
    icon: "build",
    iconBg: "bg-primary-soft",
    title: "Montagem de Móveis",
    description:
      "Executo a montagem e desmontagem cuidadosa de móveis convencionais e comprados online, garantindo a integridade e o perfeito alinhamento.",
    check: "Montagem rápida e segura",
    featured: true,
  },
  {
    icon: "handyman",
    iconBg: "bg-amber-soft",
    title: "Reparos e Regulagens",
    description:
      "Portas de armário desalinhadas? Gavetas emperradas? Faço ajustes finos, reparos e regulagens, deixando seus móveis como novos.",
    check: "Ajustes precisos",
  },
  {
    icon: "architecture",
    iconBg: "bg-primary-soft",
    title: "Móveis Planejados",
    description:
      "Além das montagens, realizo projetos de móveis planejados sob medida, do planejamento à instalação, com o Método SIM.",
    check: "Projeto sob medida",
  },
];

export const PORTFOLIO = [
  {
    src: "/images/portfolio/montagem-cozinha.webp",
    width: 1848,
    height: 2614,
    alt: "Armários de cozinha brancos e balcão com pia montados. Serviço de montagem de móveis convencionais.",
  },
  {
    src: "/images/portfolio/painel-tv.webp",
    width: 2464,
    height: 2464,
    alt: "Painel de TV planejado com rack suspenso preto e detalhes em madeira, instalado profissionalmente.",
  },
  {
    src: "/images/portfolio/comoda-estancia-velha.webp",
    width: 1440,
    height: 1440,
    alt: "Cômoda branca para quarto de bebê montada com precisão em Estância Velha.",
  },
];

export const AVALIACOES = [
  {
    nome: "Kelly Regina Scherer",
    texto:
      "Excelente profissional, educado, atencioso, pontual, trabalhou super rápido e entregou o que estava combinado. Ao finalizar deixou tudo organizado e limpo. Ótimo custo benefício. Recomendo!",
  },
  {
    nome: "Hiury Cheruti",
    texto:
      "Willian é um profissional nota 1000. Extremamente responsável, caprichoso, e sempre preocupado em executar o trabalho da melhor maneira possível! Recomendo de olhos fechados!",
  },
  {
    nome: "Luana Luz de Freitas",
    texto:
      "Encontrei o contato do Willian no Google por acaso. Chamei ele por conta de todas as avaliações positivas, e não me arrependi. Fez um trabalho excelente. Definitivamente, chamarei novamente quando for necessário.",
  },
  {
    nome: "Gisele Cruz",
    texto:
      "Parabéns pelo ótimo atendimento, desde a contratação até a finalização do serviço prestado, horário, agilidade, eficiência e qualidade, super recomendo 👏👏👏👏👏",
  },
];

export const SOBRE = {
  foto: "/images/fotos/Quem-sou-eu.webp",
  fotoWidth: 900,
  fotoHeight: 1125,
  fotoAlt: "Willian, montador de móveis, em uma foto pessoal apresentando seu trabalho em Novo Hamburgo.",
  paragrafos: [
    "Sou Willian e trabalho profissionalmente com montagem de móveis desde 2020. Comecei nessa atividade durante a pandemia, quando as escolas fecharam e precisei deixar temporariamente meu trabalho como professor. O que começou por necessidade acabou se tornando minha profissão.",
    "Desde então, já são mais de 5.000 móveis montados, entre móveis convencionais e planejados.",
    "No meu trabalho, procuro fazer o básico muito bem feito: montagem correta, alinhamento e regulagens, pontualidade, profissionalismo, ferramentas adequadas e um atendimento rápido e eficiente.",
    "Atendo clientes em Novo Hamburgo e no Vale dos Sinos, sempre buscando entregar um serviço bem executado e uma boa experiência do início ao fim.",
  ],
};
