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

