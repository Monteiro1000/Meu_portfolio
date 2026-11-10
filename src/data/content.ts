export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: 'browser' | 'database' | 'code' | 'gears';
  skills: string[];
}

/** Identificador dos perfis disponíveis na seção Habilidades */
export type ProfileId = 'developer' | 'designer';

/** Dados de cada card do seletor de perfil (Desenvolvedor / Designer) */
export interface ProfileOption {
  id: ProfileId;
  /** Valor sincronizado na query string (?perfil=desenvolvedor|designer) */
  queryValue: 'desenvolvedor' | 'designer';
  title: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
}

/** Item da galeria de designs do painel Designer */
export interface DesignItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  width?: number;
  height?: number;
}

/** Card de perfil gerenciado na subseção Gestão de Instagram */
export interface InstagramProfileItem {
  id: string;
  name: string;
  handle: string;
  description: string;
  /** URL completa do perfil no Instagram (vazio desabilita o botão visualmente) */
  url: string;
  /** Caminho para avatar/capa em /public/assets (vazio exibe placeholder) */
  image: string;
}

/** Card da seção Projetos Tecnológicos */
export interface ProjectItem {
  id: string;
  label: string;
  secondaryBadge?: string;
  title: string;
  description: string;
  tags: string[];
  /** Caminho da capa quadrada do projeto em /public/assets/projetos */
  coverImage: string;
  /** Mantido como alias opcional para compatibilidade */
  image?: string;
  imageAlt: string;
  placeholderType?: 'radar-social' | 'notebook-bulb';
  /** URL da demonstração online (vazio mantém o botão desabilitado) */
  demoUrl: string;
  /** URL do repositório no GitHub (vazio mantém o botão desabilitado) */
  githubUrl: string;
}

export interface EducationItem {
  id: string;
  category: string;
  title: string;
  description: string;
}

export interface SocialChannel {
  id: 'email' | 'linkedin' | 'github' | 'instagram';
  label: string;
  url: string;
}

export interface PortfolioContent {
  meta: {
    brandName: string;
    brandPrefix: string;
  };
  navbar: {
    items: NavItem[];
    ctaLabel: string;
    ctaHref: string;
  };
  hero: {
    eyebrow: string;
    titleLines: [string, string, string];
    subtitle: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    resumeNote: string;
    photo: {
      src: string;
      alt: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    photos: {
      left: {
        src: string;
        alt: string;
      };
      right: {
        src: string;
        alt: string;
      };
    };
  };
  /** Opções do seletor de perfil (Desenvolvedor / Designer) */
  profiles: ProfileOption[];
  /** Peças visuais exibidas na galeria do perfil Designer */
  designs: DesignItem[];
  /** Perfis listados no bloco Gestão de Instagram */
  instagramProfiles: InstagramProfileItem[];
  skills: {
    eyebrow: string;
    titleLines: [string, string];
    subtitle: string;
    selectorHint: string;
    developerCta: {
      label: string;
      href: string;
    };
    designerPanel: {
      eyebrow: string;
      title: string;
      subtitle: string;
      instagramSection: {
        eyebrow: string;
        title: string;
        subtitle: string;
        ctaLabel: string;
      };
    };
    categories: SkillCategory[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    demoButtonLabel: string;
    githubButtonLabel: string;
    note: string;
    items: ProjectItem[];
  };
  ctaBand: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  education: {
    eyebrow: string;
    titleLines: [string, string, string];
    subtitle: string;
    items: EducationItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    socialNote: string;
    mailtoRecipient: string;
    directEmailLabel: string;
    socials: SocialChannel[];
  };
  footer: {
    copyright: string;
    links: NavItem[];
  };
}

export const content: PortfolioContent = {
  meta: {
    brandName: 'Júlio Monteiro.',
    brandPrefix: 'Júlio Monteiro',
  },

  navbar: {
    items: [
      { label: 'Início', href: '#inicio', id: 'inicio' },
      { label: 'Sobre', href: '#sobre', id: 'sobre' },
      { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
      { label: 'Projetos', href: '#projetos', id: 'projetos' },
      { label: 'Formação', href: '#formacao', id: 'formacao' },
      { label: 'Contato', href: '#contato', id: 'contato' },
    ],
    ctaLabel: 'Fale comigo →',
    ctaHref: '#contato',
  },

  hero: {
    eyebrow: 'PORTFÓLIO • DESENVOLVIMENTO & IDEIAS',
    titleLines: ['Olá! Meu', 'nome é Júlio', 'Monteiro'],
    subtitle:
      'Estudante de Ciência da Computação | Desenvolvedor Front-end | UX e UI Designer.',
    description:
      'Transformo curiosidade em experiências digitais e busco criar projetos inovadores que fazem diferença na sociedade.',
    primaryCta: {
      label: 'Ver projetos →',
      href: '#projetos',
    },
    secondaryCta: {
      label: 'Baixar currículo',
      href: '/curriculo.pdf',
    },
    resumeNote: 'Currículo: arquivo a adicionar.',
    photo: {
      src: '/assets/julio/hero-julio.webp',
      alt: 'Júlio Monteiro usando camiseta azul-marinho e crachá da FEITEC Sergipe',
    },
  },

  about: {
    eyebrow: '01 / SOBRE MIM',
    title: 'SOBRE MIM',
    paragraphs: [
      'Jovem formado como técnico em Tecnologia da Informação e atualmente formando em Ciências da computação na UFS, focado no âmbito da Engenharia de Software. Atuo como desenvolvedor front-end, focado na criação de interfaces modernas e funcionais, enquanto sigo em constante evolução para me tornar um profissional full-stack e engenheiro de software completo.',
      'Desde o ensino médio, atuo como project builder, desenvolvendo projetos tecnológicos e transformando ideias em soluções reais, assim sendo medalhista de ouro em feiras científicas. Tenho como objetivo expandir minhas habilidades, construir soluções de impacto e consolidar uma carreira sólida na área da tecnologia.',
    ],
    photos: {
      left: {
        src: '/assets/julio/feitec-left.webp',
        alt: 'Júlio Monteiro no evento FEITEC Sergipe diante do painel ilustrado do Governo de Sergipe',
      },
      right: {
        src: '/assets/julio/feitec-right.webp',
        alt: 'Júlio Monteiro no evento FEITEC Sergipe com o painel luminoso azul ao fundo',
      },
    },
  },

  /**
   * Perfis exibidos na seção Habilidades.
   * Controlam qual painel é aberto abaixo e se a seção #projetos está ativa.
   */
  profiles: [
    {
      id: 'developer',
      queryValue: 'desenvolvedor',
      title: 'Desenvolvedor',
      label: 'Build Project',
      description: 'Interfaces, sistemas e projetos que saem do papel.',
      image: '/assets/profiles/developer-preview.webp',
      imageAlt: 'Ambiente moderno de desenvolvimento com código em tela escura e interfaces digitais',
      ctaLabel: 'Explorar',
    },
    {
      id: 'designer',
      queryValue: 'designer',
      title: 'Designer',
      label: 'Visual & Social Media',
      description: 'Identidade visual, interfaces e peças para redes sociais.',
      image: '/assets/profiles/designer-preview.webp',
      imageAlt: 'Interface visual de design com biblioteca de componentes e telas de aplicativos',
      ctaLabel: 'Explorar',
    },
  ],

  /**
   * Galeria de designs gerada a partir dos arquivos da pasta `designs_feitos/`
   * convertidos e otimizados em `/public/assets/designs/*.webp`.
   */
  designs: [
    {
      id: 'design-volei-carcara',
      src: '/assets/designs/volei-carcara-gloria.webp',
      title: 'Vôlei Carcará Glória — Fim de Jogo',
      alt: 'Post esportivo de resultado 3 a 0 do Vôlei Carcará Glória contra o Saltando para o Futuro pela Superliga de Vôlei do Interior',
      width: 1080,
      height: 1080,
    },
    {
      id: 'design-sergipano-sub21',
      src: '/assets/designs/sergipano-feminino-sub21.webp',
      title: 'Santa Cruz Sergipe — Sergipano Feminino Sub-21',
      alt: 'Publicação comemorativa de 4º lugar do Santa Cruz Sergipe Voleibol no Campeonato Sergipano Feminino Sub-21',
      width: 1200,
      height: 1698,
    },
    {
      id: 'design-superliga-rodada',
      src: '/assets/designs/superliga-quarta-rodada.webp',
      title: 'Superliga do Interior — Quarta Rodada',
      alt: 'Arte de divulgação da Quarta Rodada da Superliga do Interior em Lagarto/SE com os escudos Fox Voleibol, Saltando para o Futuro e Wakanda Vôlei',
      width: 1080,
      height: 1350,
    },
    {
      id: 'design-circuito-som',
      src: '/assets/designs/circuito-sergipe-som-rebaixados.webp',
      title: 'Circuito Sergipe de Som e Rebaixados',
      alt: 'Arte promocional do evento Circuito Sergipe de Som e Rebaixados realizado por César Eventos Competições',
      width: 1080,
      height: 1350,
    },
    {
      id: 'design-interclasse-3a',
      src: '/assets/designs/interclasse-3a-psg.webp',
      title: 'Interclasse 3ºA — Identidade Esportiva',
      alt: 'Peça gráfica esportiva para o 3ºA no Interclasse com mascote felino ilustrado e escudo temático Paris Saint-Germain',
      width: 1080,
      height: 1080,
    },
    {
      id: 'design-story-haikyuu',
      src: '/assets/designs/story-copa-haikyuu.webp',
      title: '3ª Copa Haikyuu!! — Saltando para o Futuro',
      alt: 'Story de contagem regressiva Já é Amanhã para a 3ª Copa Haikyuu com foto da equipe Saltando para o Futuro',
      width: 1080,
      height: 1920,
    },
  ],

  /**
   * Perfis de Instagram gerenciados por Júlio.
   */
  instagramProfiles: [
    {
      id: 'instagram-01',
      name: 'Vôlei Carcará Glória',
      handle: '@voleigloriaofc',
      description: 'Gestão de conteúdo, artes de jogos e identidade visual esportiva.',
      url: 'https://www.instagram.com/voleigloriaofc/',
      image: '',
    },
    {
      id: 'instagram-02',
      name: 'Saltando para o Futuro',
      handle: '@saltandopara_o_futuro',
      description: 'Planejamento de postagens, divulgação de eventos e direção criativa para redes sociais.',
      url: 'https://www.instagram.com/saltandopara_o_futuro/',
      image: '',
    },
  ],

  skills: {
    eyebrow: '02 / HABILIDADES & ATUAÇÃO',
    titleLines: ['Desenvolvimento Front-end,', 'UI/UX e criação visual.'],
    subtitle:
      'Construção de interfaces modernas, código performático e identidades visuais focadas em experiência e impacto.',
    selectorHint: 'Escolha um perfil para conhecer meu trabalho.',
    developerCta: {
      label: 'Ver projetos →',
      href: '#projetos',
    },
    designerPanel: {
      eyebrow: 'DESIGN · PORTFÓLIO VISUAL',
      title: 'Design',
      subtitle: 'Alguns dos designs que já criei.',
      instagramSection: {
        eyebrow: 'REDES SOCIAIS · GESTÃO',
        title: 'Gestão de Instagram',
        subtitle:
          'Perfis administrados com foco em identidade visual, constância e comunicação criativa.',
        ctaLabel: 'Ver perfil',
      },
    },
    categories: [
      {
        id: 'frontend',
        title: 'Front-end',
        icon: 'browser',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
      },
      {
        id: 'backend',
        title: 'Back-end',
        icon: 'database',
        skills: ['Java', 'Spring Boot'],
      },
      {
        id: 'languages',
        title: 'Linguagens',
        icon: 'code',
        skills: ['Python', 'C'],
      },
      {
        id: 'tools',
        title: 'Ferramentas & IAs',
        icon: 'gears',
        skills: [
          'Antigravity',
          'Claude',
          'IA',
          'PowerBI',
          'Banco de dados SQLite',
          'Git',
          'GitHub',
          'Vite',
          'ClickUp',
        ],
      },
    ],
  },

  /**
   * Projetos tecnológicos exibidos quando o perfil Desenvolvedor está ativo.
   * TODO: Preencher `demoUrl` e `githubUrl` (e `coverImage` nos projetos com placeholder).
   */
  projects: {
    eyebrow: '03 / PROJETOS TECNOLÓGICOS',
    title: 'Ideias que ganham forma.',
    subtitle:
      'Projetos que exploram tecnologia, impacto social e soluções para desafios concretos.',
    demoButtonLabel: 'Ver demo',
    githubButtonLabel: 'GitHub',
    note: '',
    items: [
      {
        id: 'projeto-01',
        label: 'PROJETO 01',
        title: 'Arborização Inteligente',
        description:
          'Site de monitoramento arbóreo que organiza informações sobre árvores e aproxima tecnologia da gestão de espaços verdes.',
        tags: ['React', 'Vite'],
        coverImage: '/assets/projetos/arborizacao-inteligente.webp',
        image: '/assets/projetos/arborizacao-inteligente.webp',
        imageAlt:
          'Logo circular azul-escuro do projeto Arborização Inteligente com árvore em formato de circuito',
        demoUrl: 'https://info-arbo-inteligente.vercel.app',
        githubUrl: 'https://github.com/Monteiro1000',
      },
      {
        id: 'projeto-02',
        label: 'PROJETO 02',
        secondaryBadge: 'BOLSISTA DE INICIAÇÃO TECNOLÓGICA - DESENVOLVEDOR DE SOFTWARE',
        title: 'Radar Social',
        description:
          'Aplicativo baseado na escala SRI, de inovação social, pensado para apoiar a análise e a evolução de iniciativas com impacto coletivo.',
        tags: ['React', 'TypeScript'],
        coverImage: '/assets/projetos/radar-social.webp',
        image: '/assets/projetos/radar-social.webp',
        imageAlt:
          'Logo do projeto Radar Social nas cores roxo, laranja e amarelo',
        placeholderType: 'radar-social',
        demoUrl: 'https://www.radarsocial.org/landing-page/quem-somos',
        githubUrl: 'https://github.com/Monteiro1000',
      },
      {
        id: 'projeto-03',
        label: 'PROJETO 03',
        title: 'Sertão Na Arte',
        description:
          'Site desenvolvido para a comunicação institucional da Associação Sertão na Arte, fortalecendo a divulgação de ações e projetos que promovem a cultura.',
        tags: ['React', 'Comunicação', 'Cultura'],
        coverImage: '/assets/projetos/sertao-na-arte.webp',
        image: '/assets/projetos/sertao-na-arte.webp',
        imageAlt:
          'Arte colorida com cacto e texto Sertão Na Arte em tons de laranja e roxo',
        demoUrl: 'https://sertaonaarte.com.br',
        githubUrl: 'https://github.com/Monteiro1000',
      },
      {
        id: 'projeto-04',
        label: 'PROJETO 04',
        title: 'Lidera Nordeste',
        description:
          'Projeto de comunicação e apresentação institucional voltado a conectar oportunidades acadêmicas e desenvolvimento de jovens da região Nordeste.',
        tags: ['React', 'Institucional', 'Impacto Social'],
        coverImage: '/assets/projetos/lidera-nordeste.webp',
        image: '/assets/projetos/lidera-nordeste.webp',
        imageAlt:
          'Logo do projeto Lidera Nordeste com mapa estilizado da região Nordeste em amarelo sobre fundo azul',
        demoUrl: 'https://www.lideranordeste.com.br',
        githubUrl: 'https://github.com/Monteiro1000',
      },
    ],
  },

  ctaBand: {
    title: 'Vamos construir algo juntos?',
    description:
      'Tem uma ideia, um projeto ou quer conversar sobre oportunidades? Estou sempre aberto a novas trocas.',
    buttonLabel: 'Fale comigo →',
    buttonHref: '#contato',
  },

  education: {
    eyebrow: '04 / FORMAÇÃO',
    titleLines: ['Aprender,', 'experimentar,', 'evoluir.'],
    subtitle: 'Cada experiência amplia minha forma de pensar e construir tecnologia.',
    items: [
      {
        id: 'graduacao',
        category: 'GRADUAÇÃO',
        title: 'Ciência da Computação · UFS',
        description:
          'Formação universitária em computação, com interesse em desenvolvimento de software e criação de produtos digitais.',
      },
      {
        id: 'mais-ti',
        category: 'FORMAÇÃO COMPLEMENTAR',
        title: 'Projeto Mais TI',
        description:
          'Curso de programação dedicado ao fortalecimento da base técnica e à prática de desenvolvimento.',
      },
      {
        id: 'sertao-na-arte',
        category: 'EXPERIÊNCIA COLABORATIVA',
        title: 'Associação Cultural Sertão na Arte',
        description:
          'Experiência de criação de soluções em equipe, conectando ideias, colaboração e resolução de problemas.',
      },
      {
        id: 'aprendizado-continuo',
        category: 'APRENDIZADO CONTÍNUO',
        title: 'Cursos e estudos independentes',
        description: 'Verificar linkedin.',
      },
    ],
  },

  contact: {
    eyebrow: '05 / CONTATO',
    title: 'Vamos construir algo juntos?',
    description:
      'Estou aberto a oportunidades em desenvolvimento web, projetos colaborativos, estágio e parcerias que unam tecnologia, experiência e impacto. Sinta-se à vontade para me mandar uma mensagem direta.',
    socialNote: 'Conecte-se comigo nas redes ou envie um e-mail:',
    mailtoRecipient: 'julioalvedmonteiro@gmail.com',
    directEmailLabel: 'Enviar e-mail direto',
    socials: [
      {
        id: 'email',
        label: 'E-mail',
        url: 'mailto:julioalvedmonteiro@gmail.com',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/júlio-monteiro-298745304/',
      },
      {
        id: 'github',
        label: 'GitHub',
        url: 'https://github.com/Monteiro1000',
      },
      {
        id: 'instagram',
        label: 'Instagram',
        url: 'https://www.instagram.com/juliomonteiro01_/',
      },
    ],
  },

  footer: {
    copyright: '© 2026 Júlio Monteiro. Todos os direitos reservados.',
    links: [
      { label: 'Início', href: '#inicio', id: 'inicio' },
      { label: 'Sobre', href: '#sobre', id: 'sobre' },
      { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
      { label: 'Projetos', href: '#projetos', id: 'projetos' },
      { label: 'Formação', href: '#formacao', id: 'formacao' },
      { label: 'Contato', href: '#contato', id: 'contato' },
    ],
  },
};
