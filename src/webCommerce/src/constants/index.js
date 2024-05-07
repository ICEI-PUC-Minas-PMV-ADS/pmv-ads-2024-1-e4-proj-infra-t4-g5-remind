'use strict';

import {
  ProductDetailsOneVideo,
  ProductDetailsTwoVideo,
  ProductDetailsThreeVideo,
  ProductDetailsFourVideo,
} from "../utils";

export const navLists = [
  { name: "Histórias de Usuários", href: "#user-stories" },
  { name: "O Produto", href: "#ProductDetails" },
  { name: "Comprar", href: "#buynow" },
  { name: "Suporte", href: "#support" },
];


export const messages = {
  'purple-message-first': {
    title: '# Título da mensagem',
    message: 'Lorem ipsum dolor sit amet rereree, rerererer consectetur adipiscing ...',
    initials: 'CR',
  },
  'purple-message-second': {
    title: '# Título da mensagem',
    message: 'Lorem ipsum dolor sit amet rereree, rerererer consectetur adipiscing ...',
    initials: 'AN',
  },
  'purple-message-third': {
    title: '# Título da mensagem',
    message: 'Lorem ipsum dolor sit amet rereree, rerererer consectetur adipiscing ...',
    initials: 'BR',
  },
  'purple-message-fourth': {
    title: '# Título da mensagem',
    message: 'Lorem ipsum dolor sit amet rereree, rerererer consectetur adipiscing ...',
    initials: 'AL',
  },
  'purple-message-fifth': {
    title: '# Título da mensagem',
    message: 'Lorem ipsum dolor sit amet rereree, rerererer consectetur adipiscing ...',
    initials: 'VS',
  },
  'purple-message-sixth': {
    title: '# Título da mensagem',
    message: 'Lorem ipsum dolor sit amet rereree, rerererer consectetur adipiscing ...',
    initials: 'NM',
  },
  'purple-message-seventh': {
    title: '# Título da mensagem',
    message: 'Lorem ipsum dolor sit amet rereree, rerererer consectetur adipiscing ...',
    initials: 'CR',
  },
};

export const ProductDetailsSlides = [
  {
    id: 1,
    textLists: [
      "Slide 1",
      "Aplicação para mensagens",
      "rápidas e descomplicadas.",
    ],
    video: ProductDetailsOneVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [
      "Slide 2", 
      "Administrador único",
      "Total Segurança e Controle."
    ],
    video: ProductDetailsTwoVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Slide 3",
      "Mobile - A equipe integrada",
      "sempre e em todos os lugares",
    ],
    video: ProductDetailsThreeVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [
      "Slide 4.", 
      "Desktop - Integração total com",
      "mobile e ainda mais funções."
    ],
    video: ProductDetailsFourVideo,
    videoDuration: 3.63,
  },
];


export const pricingPlans = [
  {
    id: "01",
    title: 'Pequena Empresa',
    price: 19.90,
    currency: 'BRL',
    frequency: '/mês',
    description: 'Para empresas pequenas de 1 a 50 funcionários.',
    features: [
      '1 Administrador',
      'Até 50 usuários',
      'Até 200 equipes simultâneas',
      'Suporte gratuito'
    ],
    moreFeatures: [
      'Administrador: controle centralizado no cadastro, setorização e administração de todos os usuários exclusivo para o administrador',
      'App para Mac OS e Android para até 50 usuários simultâneos',
      'Versão Web com Área de Trabalho personalizável para cada usuário',
      'Segurança da informação e proteção de dados',
      'Até 200 equipes simultâneas',
      'Suporte gratuito 24hs'
    ],
    cta: 'Comprar',
    mostPopular: false,
  },
  {
    id: "02",
    title: 'Empresarial',
    price: 39.90,
    currency: 'BRL',
    frequency: '/mês',
    description: 'Para empresas médias de 50 a 200 funcionários.',
    features: [
      '1 Administrador',
      'Até 200 usuários',
      'Até 500 equipes simultâneas',
      'Suporte gratuito 24hs'
    ],
    moreFeatures: [
      'Administrador: controle centralizado no cadastro, setorização e administração de todos os usuários exclusivo para o administrador',
      'App para Mac OS e Android para até 200 usuários simultâneos',
      'Versão Web com Área de Trabalho personalizável para cada usuário',
      'Segurança da informação e proteção de dados',
      'Até 500 equipes simultâneas',
      'Suporte gratuito 24hs'
    ],
    cta: 'Comprar',
    mostPopular: true,
  },
  {
    id: "03",
    title: 'Empresarial Pro',
    price: 79.90,
    currency: 'BRL',
    frequency: '/mês',
    description: 'Para empresas de 200 a 1000 funcionários.',
    features: [
      '1 Administrador',
      'Até 1000 usuários',
      'Sem limite de equipes simultâneas',
      'Suporte gratuito 24hs'
    ],
    moreFeatures: [
      'Administrador: controle centralizado no cadastro, setorização e administração de todos os usuários exclusivo para o administrador',
      'App para Mac OS e Android para até 1000 usuários simultâneos',
      'Versão Web com Área de Trabalho personalizável para cada usuário',
      'Segurança da informação e proteção de dados',
      'Sem limite de equipes simultâneas',
      'Suporte gratuito 24hs'
    ],
    cta: 'Comprar',
    mostPopular: false,
  }
]

export const footerLinks = [
  "Privacidade",
  "Termos",
  "Politica de Vendas",
  "Legal",
];


// Lista exaustiva de bancos para débito direto

export const Banks = [
  "001 - Banco do Brasil",
  "003 - Banco da Amazônia",
  "004 - Banco do Nordeste do Brasil",
  "007 - Banco Nacional de Desenvolvimento Econômico e Social BNDES",
  "010 - CREDICOAMO CREDITO RURAL COOPERATIVA",
  "011 - CREDIT SUISSE HEDGING-GRIFFO CORRETORA DE VALORES S.A",
  "012 - Banco Inbursa",
  "014 - State Street Brasil S.A. Banco Comercial",
  "015 - UBS Brasil Corretora de Câmbio, Títulos e Valores Mobiliários S.A.",
  "016 - COOPERATIVA DE CRÉDITO MÚTUO DOS DESPACHANTES DE TRÂNSITO DE SANTA CATARINA E RI",
  "017 - BNY Mellon Banco S.A.",
  "018 - Banco Tricury",
  "021 - BANESTES S.A. Banco do Estado do Espírito Santo",
  "024 - Banco BANDEPE",
  "025 - Banco Alfa",
  "029 - Banco Itaú Consignado",
  "033 - Santander",
  "036 - Banco Bradesco BBI",
  "037 - Banco do Estado do Pará",
  "040 - Banco Cargill",
  "041 - Banrisul",
  "047 - Banco do Estado de Sergipe",
  "060 - Confidence Corretora de Câmbio",
  "062 - Hipercard Banco Múltiplo",
  "063 - Banco Bradescard",
  "064 - Goldman Sachs do Brasil Banco Múltiplo",
  "065 - Banco Andbank (Brasil)",
  "066 - Banco Morgan Stanley",
  "069 - Banco Crefisa",
  "070 - BRB Banco de Brasília",
  "074 - Banco J. Safra",
  "075 - Banco ABN AMRO",
  "076 - Banco KDB",
  "077 - Banco Inter",
  "078 - Haitong Banco de Investimento do Brasil",
  "079 - Banco Original do Agronegócio",
  "080 - B&T CORRETORA DE CAMBIO",
  "081 - BancoSeguro",
  "082 - Banco Topázio",
  "083 - Banco da China Brasil",
  "084 - Uniprime do Brasil Cooperativa de Crédito Ltda.",
  "102 - XP Investimentos Corretora de Câmbio",
  "104 - Caixa Econômica Federal",
  "107 - Banco Bocom BBM S.A.",
  "121 - Banco Agibank S.A.",
  "136 - Confederação Nacional das Cooperativas Centrais Unicred Ltda. Unicred do Brasil",
  "143 - Treviso Corretora de Câmbio S.A.",
  "180 - CM Capital Markets Corretora de Câmbio",
  "208 - Banco BTG Pactual S.A.",
  "212 - Banco Original",
  "213 - Banco Arbi S.A.",
  "217 - Banco John Deere S.A.",
  "218 - Banco BS2 S.A.",
  "222 - Banco Credit Agricole Brasil S.A.",
  "224 - Banco Fibra S.A.",
  "233 - Banco Cifra S.A.",
  "237 - Banco Bradesco S.A.",
  "246 - Banco ABC Brasil S.A.",
  "248 - Banco Boavista Interatlântico S.A.",
  "249 - Banco Investcred Unibanco S.A.",
  "250 - BCV - Banco de Crédito e Varejo S.A.",
  "254 - Paraná Banco S.A.",
  "260 - Nu Pagamentos S.A. (Nubank)",
  "265 - Banco Fator S.A.",
  "266 - Banco Cédula S.A.",
  "268 - Banco BMG S.A.",
  "318 - Banco BMG S.A.",
  "320 - China Construction Bank (Brasil) Banco Múltiplo S.A.",
  "341 - Itaú Unibanco S.A.",
  "366 - Banco Société Générale Brasil S.A.",
  "370 - Banco Mizuho do Brasil S.A.",
  "376 - Banco J. P. Morgan S.A.",
  "389 - Banco Mercantil do Brasil S.A.",
  "394 - Banco Bradesco Financiamentos S.A.",
  "399 - Kirton Bank S.A. Banco Múltiplo",
  "422 - Banco Safra S.A.",
  "456 - Banco MUFG Brasil S.A.",
  "464 - Banco Sumitomo Mitsui Brasileiro S.A.",
  "473 - Banco Caixa Geral - Brasil S.A.",
  "477 - Citibank N.A.",
  "479 - Banco Itaubank S.A.",
  "487 - Deutsche Bank S.A. - Banco Alemão",
  "488 - JPMorgan Chase Bank, National Association",
  "492 - ING Bank N.V.",
  "505 - Banco Credit Suisse (Brasil) S.A.",
  "604 - Banco Industrial do Brasil S.A.",
  "610 - Banco VR S.A.",
  "611 - Banco Paulista S.A.",
  "612 - Banco Guanabara S.A.",
  "626 - Banco Ficsa S.A.",
  "630 - Banco Smartbank S.A.",
  "633 - Banco Rendimento S.A.",
  "634 - Banco Triângulo S.A.",
  "637 - Banco Sofisa S.A.",
  "641 - Banco Alvorada S.A.",
  "643 - Banco Pine S.A.",
  "652 - Itaú Unibanco Holding S.A.",
  "653 - Banco Indusval S.A.",
  "654 - Banco A.J.Renner S.A.",
  "655 - Banco Votorantim S.A.",
  "707 - Banco Daycoval S.A.",
  "712 - Banco Ourinvest S.A.",
  "719 - Banif - Bco Internacional do Funchal (Brasil) S.A.",
  "720 - Banco Maxinvest S.A.",
  "739 - Banco Cetelem S.A.",
  "741 - Banco Ribeirão Preto S.A.",
  "743 - Banco Semear S.A.",
  "745 - Banco Citibank S.A.",
  "746 - Banco Modal S.A.",
  "747 - Banco Rabobank International Brasil S.A.",
  "748 - Banco Cooperativo Sicredi S.A.",
  "751 - Scotiabank Brasil S.A. Banco Múltiplo",
  "752 - Banco BNP Paribas Brasil S.A.",
  "753 - Banco Comercial Uruguai S.A.",
  "754 - Banco Sistema S.A.",
  "755 - Bank of America Merrill Lynch Banco Múltiplo S.A.",
  "756 - Banco Cooperativo do Brasil S.A. - Bancoob",
  "757 - Banco KEB Hana do Brasil S.A."
];



