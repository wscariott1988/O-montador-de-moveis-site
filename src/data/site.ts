export const SITE = {
  brand: "Willian | Montador de Móveis",
  name: "Willian Montador de Móveis",
  url: "https://omontadordemoveis.com",
  phoneDisplay: "(51) 98016-8744",
  whatsappNumber: "5551980168744",
  region: "Novo Hamburgo e Vale dos Sinos",
  ga4: "G-H0R3NGYK8H",
  gtm: "GTM-WV6RLBVN",
  razaoSocial: "William Souza de Morais",
  cnpj: "43.090.684/0001-72",
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Willian! Vi seu site e gostaria de solicitar um orçamento para montagem de móveis.";

export const whatsappUrl = (message: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Região", href: "#regiao" },
  { label: "Contato", href: "#contato" },
];

export const STATS = [
  { value: "+6", label: "Anos de Experiência" },
  { value: "+5.300", label: "Móveis Montados" },
  { value: "90", label: "Dias de Garantia" },
];

export const SERVICES = [
  {
    icon: "build",
    iconBg: "bg-primary-soft",
    title: "Montagem e Desmontagem",
    description:
      "Executo a montagem e desmontagem cuidadosa de móveis convencionais e comprados online, garantindo a integridade e o perfeito alinhamento.",
    check: "Montagem rápida e segura",
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
  "/images/avaliacoes/avaliacao-1.png",
  "/images/avaliacoes/avaliacao-2.webp",
  "/images/avaliacoes/avaliacao-3.png",
  "/images/avaliacoes/avaliacao-4.png",
  "/images/avaliacoes/avaliacao-5.png",
  "/images/avaliacoes/avaliacao-6.webp",
];
