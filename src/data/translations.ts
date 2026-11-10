import type { PortfolioContent } from './content';

export type SupportedLang = 'pt' | 'en' | 'es';

export const translations: Record<SupportedLang, PortfolioContent> = {
  pt: {
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
        label: 'Baixar currículo em PDF',
        href: '/portfolio-julio-monteiro.pdf',
      },
      resumeNote: 'Baixe o portfólio completo em PDF.',
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
            'Conceito de solução para inspeção industrial no setor de óleo e gás, com foco em apoiar processos mais seguros e eficientes.',
          tags: ['Inspeção industrial', 'IA'],
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
  },

  en: {
    meta: {
      brandName: 'Júlio Monteiro.',
      brandPrefix: 'Júlio Monteiro',
    },
    navbar: {
      items: [
        { label: 'Home', href: '#inicio', id: 'inicio' },
        { label: 'About', href: '#sobre', id: 'sobre' },
        { label: 'Skills', href: '#habilidades', id: 'habilidades' },
        { label: 'Projects', href: '#projetos', id: 'projetos' },
        { label: 'Education', href: '#formacao', id: 'formacao' },
        { label: 'Contact', href: '#contato', id: 'contato' },
      ],
      ctaLabel: 'Get in touch →',
      ctaHref: '#contato',
    },
    hero: {
      eyebrow: 'PORTFOLIO • DEVELOPMENT & IDEAS',
      titleLines: ['Hello! My', 'name is Júlio', 'Monteiro'],
      subtitle:
        'Computer Science Student | Front-end Developer | UX & UI Designer.',
      description:
        'Transforming curiosity into digital experiences and building innovative solutions that make a real difference in society.',
      primaryCta: {
        label: 'View projects →',
        href: '#projetos',
      },
      secondaryCta: {
        label: 'Download Resume (PDF)',
        href: '/portfolio-julio-monteiro.pdf',
      },
      resumeNote: 'Download complete portfolio in PDF.',
      photo: {
        src: '/assets/julio/hero-julio.webp',
        alt: 'Júlio Monteiro wearing dark-blue shirt and FEITEC Sergipe badge',
      },
    },
    about: {
      eyebrow: '01 / ABOUT ME',
      title: 'ABOUT ME',
      paragraphs: [
        'Graduated as an Information Technology technician and currently completing a degree in Computer Science at UFS, focused on Software Engineering. I work as a front-end developer, creating modern, responsive, and functional interfaces while constantly expanding my skillset to become a versatile full-stack professional and software engineer.',
        'Since high school, I have acted as a project builder, transforming ideas into functional technology and earning gold medals at regional science fairs. My goal is to build impactful solutions, solve challenging problems, and establish a meaningful career in technology.',
      ],
      photos: {
        left: {
          src: '/assets/julio/feitec-left.webp',
          alt: 'Júlio Monteiro presenting at FEITEC Sergipe conference',
        },
        right: {
          src: '/assets/julio/feitec-right.webp',
          alt: 'Júlio Monteiro at FEITEC Sergipe with glowing blue panel',
        },
      },
    },
    profiles: [
      {
        id: 'developer',
        queryValue: 'desenvolvedor',
        title: 'Developer',
        label: 'Build Project',
        description: 'Interfaces, systems, and projects brought to life.',
        image: '/assets/profiles/developer-preview.webp',
        imageAlt: 'Modern development environment with syntax code on dark screen',
        ctaLabel: 'Explore',
      },
      {
        id: 'designer',
        queryValue: 'designer',
        title: 'Designer',
        label: 'Visual & Social Media',
        description: 'Visual identity, interfaces, and social media designs.',
        image: '/assets/profiles/designer-preview.webp',
        imageAlt: 'Visual design interface with UI components and mobile mockups',
        ctaLabel: 'Explore',
      },
    ],
    designs: [
      {
        id: 'design-volei-carcara',
        src: '/assets/designs/volei-carcara-gloria.webp',
        title: 'Carcará Glória Volleyball — Match Point',
        alt: 'Sports match result graphic 3-0 for Vôlei Carcará Glória against Saltando para o Futuro',
        width: 1080,
        height: 1080,
      },
      {
        id: 'design-sergipano-sub21',
        src: '/assets/designs/sergipano-feminino-sub21.webp',
        title: 'Santa Cruz Sergipe — Women U-21 Championship',
        alt: 'Celebration post for 4th place of Santa Cruz Sergipe Volleyball at U-21 State Championship',
        width: 1200,
        height: 1698,
      },
      {
        id: 'design-superliga-rodada',
        src: '/assets/designs/superliga-quarta-rodada.webp',
        title: 'Interior Superleague — Round 4',
        alt: 'Match day poster for Interior Superleague in Lagarto/SE with team crests',
        width: 1080,
        height: 1350,
      },
      {
        id: 'design-circuito-som',
        src: '/assets/designs/circuito-sergipe-som-rebaixados.webp',
        title: 'Circuito Sergipe — Automotive Sound & Style',
        alt: 'Promotional event artwork for Circuito Sergipe de Som e Rebaixados by César Eventos',
        width: 1080,
        height: 1350,
      },
      {
        id: 'design-interclasse-3a',
        src: '/assets/designs/interclasse-3a-psg.webp',
        title: 'Class Tournament 3rd A — Sports Identity',
        alt: 'Sports visual piece for 3rd A with custom illustrated feline mascot and PSG crest',
        width: 1080,
        height: 1080,
      },
      {
        id: 'design-story-haikyuu',
        src: '/assets/designs/story-copa-haikyuu.webp',
        title: '3rd Haikyuu!! Cup — Saltando para o Futuro',
        alt: 'Countdown Instagram story for the 3rd Haikyuu Cup with team photo',
        width: 1080,
        height: 1920,
      },
    ],
    instagramProfiles: [
      {
        id: 'instagram-01',
        name: 'Vôlei Carcará Glória',
        handle: '@voleigloriaofc',
        description: 'Content management, matchday graphics, and sports visual branding.',
        url: 'https://www.instagram.com/voleigloriaofc/',
        image: '',
      },
      {
        id: 'instagram-02',
        name: 'Saltando para o Futuro',
        handle: '@saltandopara_o_futuro',
        description: 'Post scheduling, event publicity, and creative direction for social media.',
        url: 'https://www.instagram.com/saltandopara_o_futuro/',
        image: '',
      },
    ],
    skills: {
      eyebrow: '02 / SKILLS & EXPERTISE',
      titleLines: ['Front-end Development,', 'UI/UX & Visual Creation.'],
      subtitle:
        'Building modern interfaces, clean performant code, and purpose-driven visual identities.',
      selectorHint: 'Choose a profile to discover my work.',
      developerCta: {
        label: 'View projects →',
        href: '#projetos',
      },
      designerPanel: {
        eyebrow: 'DESIGN · VISUAL PORTFOLIO',
        title: 'Design',
        subtitle: 'Selected designs, graphics, and social media work.',
        instagramSection: {
          eyebrow: 'SOCIAL MEDIA · MANAGEMENT',
          title: 'Instagram Management',
          subtitle:
            'Profiles managed with focus on brand identity, posting consistency, and creative communication.',
          ctaLabel: 'View profile',
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
          title: 'Languages',
          icon: 'code',
          skills: ['Python', 'C'],
        },
        {
          id: 'tools',
          title: 'Tools & AI',
          icon: 'gears',
          skills: [
            'Antigravity',
            'Claude',
            'IA',
            'PowerBI',
            'SQLite Database',
            'Git',
            'GitHub',
            'Vite',
            'ClickUp',
          ],
        },
      ],
    },
    projects: {
      eyebrow: '03 / TECH PROJECTS',
      title: 'Ideas taking shape.',
      subtitle:
        'Projects exploring technology, social innovation, and concrete solutions for real challenges.',
      demoButtonLabel: 'Live demo',
      githubButtonLabel: 'GitHub',
      note: '',
      items: [
        {
          id: 'projeto-01',
          label: 'PROJECT 01',
          title: 'Arborização Inteligente',
          description:
            'Tree monitoring platform that organizes environmental data and connects technology to green space management.',
          tags: ['React', 'Vite'],
          coverImage: '/assets/projetos/arborizacao-inteligente.webp',
          image: '/assets/projetos/arborizacao-inteligente.webp',
          imageAlt:
            'Dark blue circular logo with circuit-tree icon for Arborização Inteligente project',
          demoUrl: 'https://info-arbo-inteligente.vercel.app',
          githubUrl: 'https://github.com/Monteiro1000',
        },
        {
          id: 'projeto-02',
          label: 'PROJECT 02',
          secondaryBadge: 'TECHNOLOGY FELLOW - SOFTWARE DEVELOPER',
          title: 'Radar Social',
          description:
            'Web platform based on the SRI social innovation scale, built to evaluate and accelerate community-impact initiatives.',
          tags: ['React', 'TypeScript'],
          coverImage: '/assets/projetos/radar-social.webp',
          image: '/assets/projetos/radar-social.webp',
          imageAlt:
            'Radar Social project logo in purple, orange and yellow colors',
          placeholderType: 'radar-social',
          demoUrl: 'https://www.radarsocial.org/landing-page/quem-somos',
          githubUrl: 'https://github.com/Monteiro1000',
        },
        {
          id: 'projeto-03',
          label: 'PROJECT 03',
          title: 'Sertão Na Arte',
          description:
            'Industrial inspection concept tailored for the oil & gas sector, focusing on safer, automated workflows.',
          tags: ['Industrial inspection', 'AI'],
          coverImage: '/assets/projetos/sertao-na-arte.webp',
          image: '/assets/projetos/sertao-na-arte.webp',
          imageAlt:
            'Colorful graphic artwork with cactus and Sertão Na Arte typography',
          demoUrl: 'https://sertaonaarte.com.br',
          githubUrl: 'https://github.com/Monteiro1000',
        },
        {
          id: 'projeto-04',
          label: 'PROJECT 04',
          title: 'Lidera Nordeste',
          description:
            'Institutional communication and presentation platform connecting youth in Northeastern Brazil to academic opportunities and leadership.',
          tags: ['React', 'Institutional', 'Social Impact'],
          coverImage: '/assets/projetos/lidera-nordeste.webp',
          image: '/assets/projetos/lidera-nordeste.webp',
          imageAlt:
            'Lidera Nordeste logo with stylized yellow map of Northeast Brazil on royal blue',
          demoUrl: 'https://www.lideranordeste.com.br',
          githubUrl: 'https://github.com/Monteiro1000',
        },
      ],
    },
    ctaBand: {
      title: 'Let’s build something together?',
      description:
        'Have an idea, project, or opportunity to discuss? I am always open to new connections and collaborations.',
      buttonLabel: 'Get in touch →',
      buttonHref: '#contato',
    },
    education: {
      eyebrow: '04 / EDUCATION',
      titleLines: ['Learn,', 'experiment,', 'evolve.'],
      subtitle: 'Every experience enriches how I approach software design and engineering.',
      items: [
        {
          id: 'graduacao',
          category: 'BACHELOR DEGREE',
          title: 'Computer Science · UFS',
          description:
            'Undergraduate education in computer science with focus on software engineering and digital products.',
        },
        {
          id: 'mais-ti',
          category: 'PROFESSIONAL TRAINING',
          title: 'Mais TI Program',
          description:
            'Intensive coding program aimed at deepening technical foundations and practical development.',
        },
        {
          id: 'sertao-na-arte',
          category: 'COLLABORATIVE EXPERIENCE',
          title: 'Sertão na Arte Cultural Association',
          description:
            'Hands-on teamwork and leadership experience connecting community initiatives with digital communication.',
        },
        {
          id: 'aprendizado-continuo',
          category: 'CONTINUOUS LEARNING',
          title: 'Independent Courses & Certifications',
          description: 'Check LinkedIn for full credentials.',
        },
      ],
    },
    contact: {
      eyebrow: '05 / CONTACT',
      title: 'Let’s build something together?',
      description:
        'Open to web development roles, collaborative projects, internships, and partnerships bridging technology and UX.',
      socialNote: 'Connect on social media or send an email:',
      mailtoRecipient: 'julioalvedmonteiro@gmail.com',
      directEmailLabel: 'Send direct email',
      socials: [
        {
          id: 'email',
          label: 'Email',
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
      copyright: '© 2026 Júlio Monteiro. All rights reserved.',
      links: [
        { label: 'Home', href: '#inicio', id: 'inicio' },
        { label: 'About', href: '#sobre', id: 'sobre' },
        { label: 'Skills', href: '#habilidades', id: 'habilidades' },
        { label: 'Projects', href: '#projetos', id: 'projetos' },
        { label: 'Education', href: '#formacao', id: 'formacao' },
        { label: 'Contact', href: '#contato', id: 'contato' },
      ],
    },
  },

  es: {
    meta: {
      brandName: 'Júlio Monteiro.',
      brandPrefix: 'Júlio Monteiro',
    },
    navbar: {
      items: [
        { label: 'Inicio', href: '#inicio', id: 'inicio' },
        { label: 'Sobre mí', href: '#sobre', id: 'sobre' },
        { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
        { label: 'Proyectos', href: '#projetos', id: 'projetos' },
        { label: 'Formación', href: '#formacao', id: 'formacao' },
        { label: 'Contacto', href: '#contato', id: 'contato' },
      ],
      ctaLabel: 'Hablemos →',
      ctaHref: '#contato',
    },
    hero: {
      eyebrow: 'PORTAFOLIO • DESARROLLO E IDEAS',
      titleLines: ['¡Hola! Mi', 'nombre es Júlio', 'Monteiro'],
      subtitle:
        'Estudiante de Ciencias de la Computación | Desarrollador Front-end | Diseñador UX/UI.',
      description:
        'Transformo curiosidad en experiencias digitales y desarrollo proyectos innovadores que generan un impacto real.',
      primaryCta: {
        label: 'Ver proyectos →',
        href: '#projetos',
      },
      secondaryCta: {
        label: 'Descargar CV en PDF',
        href: '/portfolio-julio-monteiro.pdf',
      },
      resumeNote: 'Descarga el portafolio completo en PDF.',
      photo: {
        src: '/assets/julio/hero-julio.webp',
        alt: 'Júlio Monteiro con camiseta azul marino y acreditación de FEITEC Sergipe',
      },
    },
    about: {
      eyebrow: '01 / SOBRE MÍ',
      title: 'SOBRE MÍ',
      paragraphs: [
        'Joven técnico en Tecnologías de la Información y actualmente formándome en Ciencias de la Computación en la UFS, con foco en Ingeniería de Software. Trabajo como desarrollador front-end, creando interfaces modernas y funcionales, mientras avanzo constantemente para convertirme en un ingeniero de software full-stack completo.',
        'Desde el instituto actúo como project builder, transformando ideas en soluciones tecnológicas reales y siendo medallista de oro en ferias científicas. Mi objetivo es expandir mis habilidades, construir soluciones de impacto y consolidar una carrera sólida en tecnología.',
      ],
      photos: {
        left: {
          src: '/assets/julio/feitec-left.webp',
          alt: 'Júlio Monteiro en la conferencia FEITEC Sergipe',
        },
        right: {
          src: '/assets/julio/feitec-right.webp',
          alt: 'Júlio Monteiro en FEITEC Sergipe frente al panel luminoso azul',
        },
      },
    },
    profiles: [
      {
        id: 'developer',
        queryValue: 'desenvolvedor',
        title: 'Desarrollador',
        label: 'Build Project',
        description: 'Interfaces, sistemas y proyectos que se hacen realidad.',
        image: '/assets/profiles/developer-preview.webp',
        imageAlt: 'Entorno de desarrollo moderno con código en pantalla oscura e interfaces digitales',
        ctaLabel: 'Explorar',
      },
      {
        id: 'designer',
        queryValue: 'designer',
        title: 'Diseñador',
        label: 'Visual & Social Media',
        description: 'Identidad visual, interfaces y piezas para redes sociales.',
        image: '/assets/profiles/designer-preview.webp',
        imageAlt: 'Interfaz de diseño visual con biblioteca de componentes y pantallas móviles',
        ctaLabel: 'Explorar',
      },
    ],
    designs: [
      {
        id: 'design-volei-carcara',
        src: '/assets/designs/volei-carcara-gloria.webp',
        title: 'Voleibol Carcará Glória — Fin del Partido',
        alt: 'Publicación deportiva de resultado 3 a 0 de Vôlei Carcará Glória en la Superliga del Interior',
        width: 1080,
        height: 1080,
      },
      {
        id: 'design-sergipano-sub21',
        src: '/assets/designs/sergipano-feminino-sub21.webp',
        title: 'Santa Cruz Sergipe — Femenino Sub-21',
        alt: 'Publicación conmemorativa del 4º puesto de Santa Cruz Sergipe Vôlei en el campeonato Sub-21',
        width: 1200,
        height: 1698,
      },
      {
        id: 'design-superliga-rodada',
        src: '/assets/designs/superliga-quarta-rodada.webp',
        title: 'Superliga del Interior — Cuarta Jornada',
        alt: 'Cartel de difusión de la Cuarta Jornada de la Superliga en Lagarto/SE',
        width: 1080,
        height: 1350,
      },
      {
        id: 'design-circuito-som',
        src: '/assets/designs/circuito-sergipe-som-rebaixados.webp',
        title: 'Circuito Sergipe — Sonido y Autos',
        alt: 'Arte promocional del evento Circuito Sergipe de Som e Rebaixados',
        width: 1080,
        height: 1350,
      },
      {
        id: 'design-interclasse-3a',
        src: '/assets/designs/interclasse-3a-psg.webp',
        title: 'Interclases 3ºA — Identidad Deportiva',
        alt: 'Pieza gráfica deportiva para el 3ºA con mascota felina ilustrada y escudo temático',
        width: 1080,
        height: 1080,
      },
      {
        id: 'design-story-haikyuu',
        src: '/assets/designs/story-copa-haikyuu.webp',
        title: '3ª Copa Haikyuu!! — Saltando para o Futuro',
        alt: 'Story de cuenta regresiva para la 3ª Copa Haikyuu con foto del equipo',
        width: 1080,
        height: 1920,
      },
    ],
    instagramProfiles: [
      {
        id: 'instagram-01',
        name: 'Vôlei Carcará Glória',
        handle: '@voleigloriaofc',
        description: 'Gestión de contenido, artes de partidos e identidad visual deportiva.',
        url: 'https://www.instagram.com/voleigloriaofc/',
        image: '',
      },
      {
        id: 'instagram-02',
        name: 'Saltando para o Futuro',
        handle: '@saltandopara_o_futuro',
        description: 'Planificación de publicaciones, difusión de eventos y dirección creativa.',
        url: 'https://www.instagram.com/saltandopara_o_futuro/',
        image: '',
      },
    ],
    skills: {
      eyebrow: '02 / HABILIDADES Y EXPERIENCIA',
      titleLines: ['Desarrollo Front-end,', 'UI/UX y creación visual.'],
      subtitle:
        'Construcción de interfaces modernas, código de alto rendimiento e identidades visuales enfocadas en la experiencia y el impacto.',
      selectorHint: 'Elige un perfil para conocer mi trabajo.',
      developerCta: {
        label: 'Ver proyectos →',
        href: '#projetos',
      },
      designerPanel: {
        eyebrow: 'DISEÑO · PORTAFOLIO VISUAL',
        title: 'Diseño',
        subtitle: 'Algunos de los diseños y piezas visuales que he creado.',
        instagramSection: {
          eyebrow: 'REDES SOCIALES · GESTIÓN',
          title: 'Gestión de Instagram',
          subtitle:
            'Perfiles administrados con foco en identidad visual, constancia y comunicación creativa.',
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
          title: 'Lenguajes',
          icon: 'code',
          skills: ['Python', 'C'],
        },
        {
          id: 'tools',
          title: 'Herramientas e IA',
          icon: 'gears',
          skills: [
            'Antigravity',
            'Claude',
            'IA',
            'PowerBI',
            'Base de datos SQLite',
            'Git',
            'GitHub',
            'Vite',
            'ClickUp',
          ],
        },
      ],
    },
    projects: {
      eyebrow: '03 / PROYECTOS TECNOLÓGICOS',
      title: 'Ideas que cobran forma.',
      subtitle:
        'Proyectos que exploran tecnología, innovación social y soluciones a desafíos reales.',
      demoButtonLabel: 'Ver demo',
      githubButtonLabel: 'GitHub',
      note: '',
      items: [
        {
          id: 'projeto-01',
          label: 'PROYECTO 01',
          title: 'Arborização Inteligente',
          description:
            'Sitio de monitoreo arbóreo que organiza información sobre árboles y acerca la tecnología a la gestión de áreas verdes.',
          tags: ['React', 'Vite'],
          coverImage: '/assets/projetos/arborizacao-inteligente.webp',
          image: '/assets/projetos/arborizacao-inteligente.webp',
          imageAlt:
            'Logo circular azul oscuro con árbol en formato de circuito del proyecto Arborização Inteligente',
          demoUrl: 'https://info-arbo-inteligente.vercel.app',
          githubUrl: 'https://github.com/Monteiro1000',
        },
        {
          id: 'projeto-02',
          label: 'PROYECTO 02',
          secondaryBadge: 'BECARIO DE INICIACIÓN TECNOLÓGICA - DESARROLLADOR DE SOFTWARE',
          title: 'Radar Social',
          description:
            'Aplicación basada en la escala SRI de innovación social, diseñada para apoyar la evaluación de proyectos de impacto colectivo.',
          tags: ['React', 'TypeScript'],
          coverImage: '/assets/projetos/radar-social.webp',
          image: '/assets/projetos/radar-social.webp',
          imageAlt:
            'Logo del proyecto Radar Social en colores morado, naranja y amarillo',
          placeholderType: 'radar-social',
          demoUrl: 'https://www.radarsocial.org/landing-page/quem-somos',
          githubUrl: 'https://github.com/Monteiro1000',
        },
        {
          id: 'projeto-03',
          label: 'PROYECTO 03',
          title: 'Sertão Na Arte',
          description:
            'Concepto de solución para inspección industrial en el sector de petróleo y gas, enfocado en procesos más seguros y eficientes.',
          tags: ['Inspección industrial', 'IA'],
          coverImage: '/assets/projetos/sertao-na-arte.webp',
          image: '/assets/projetos/sertao-na-arte.webp',
          imageAlt:
            'Arte colorido con cactus y texto Sertão Na Arte en tonos naranja y morado',
          demoUrl: 'https://sertaonaarte.com.br',
          githubUrl: 'https://github.com/Monteiro1000',
        },
        {
          id: 'projeto-04',
          label: 'PROYECTO 04',
          title: 'Lidera Nordeste',
          description:
            'Proyecto de comunicación y presentación institucional enfocado en conectar oportunidades académicas y desarrollo juvenil en el Nordeste de Brasil.',
          tags: ['React', 'Institucional', 'Impacto Social'],
          coverImage: '/assets/projetos/lidera-nordeste.webp',
          image: '/assets/projetos/lidera-nordeste.webp',
          imageAlt:
            'Logo del proyecto Lidera Nordeste con mapa estilizado en amarillo sobre fondo azul',
          demoUrl: 'https://www.lideranordeste.com.br',
          githubUrl: 'https://github.com/Monteiro1000',
        },
      ],
    },
    ctaBand: {
      title: '¿Construimos algo juntos?',
      description:
        '¿Tienes una idea, un proyecto o quieres conversar sobre oportunidades? Siempre estoy abierto a nuevas colaboraciones.',
      buttonLabel: 'Hablemos →',
      buttonHref: '#contato',
    },
    education: {
      eyebrow: '04 / FORMACIÓN',
      titleLines: ['Aprender,', 'experimentar,', 'evolucionar.'],
      subtitle: 'Cada experiencia amplía mi forma de concebir y construir tecnología.',
      items: [
        {
          id: 'graduacao',
          category: 'CARRERA UNIVERSITARIA',
          title: 'Ciencias de la Computación · UFS',
          description:
            'Formación universitaria en computación, con interés en desarrollo de software y creación de productos digitales.',
        },
        {
          id: 'mais-ti',
          category: 'FORMACIÓN COMPLEMENTARIA',
          title: 'Proyecto Mais TI',
          description:
            'Curso intensivo de programación dedicado a fortalecer la base técnica y la práctica de desarrollo.',
        },
        {
          id: 'sertao-na-arte',
          category: 'EXPERIENCIA COLABORATIVA',
          title: 'Asociación Cultural Sertão na Arte',
          description:
            'Experiencia de creación de soluciones en equipo, uniendo ideas, colaboración y resolución de problemas.',
        },
        {
          id: 'aprendizado-continuo',
          category: 'APRENDIZAJE CONTINUO',
          title: 'Cursos y estudios independientes',
          description: 'Consultar LinkedIn.',
        },
      ],
    },
    contact: {
      eyebrow: '05 / CONTACTO',
      title: '¿Construimos algo juntos?',
      description:
        'Estoy abierto a oportunidades en desarrollo web, proyectos colaborativos, pasantías y alianzas que unan tecnología y diseño. No dudes en escribirme.',
      socialNote: 'Conéctate conmigo en redes o envíame un correo:',
      mailtoRecipient: 'julioalvedmonteiro@gmail.com',
      directEmailLabel: 'Enviar correo directo',
      socials: [
        {
          id: 'email',
          label: 'Correo',
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
      copyright: '© 2026 Júlio Monteiro. Todos los derechos reservados.',
      links: [
        { label: 'Inicio', href: '#inicio', id: 'inicio' },
        { label: 'Sobre mí', href: '#sobre', id: 'sobre' },
        { label: 'Habilidades', href: '#habilidades', id: 'habilidades' },
        { label: 'Proyectos', href: '#projetos', id: 'projetos' },
        { label: 'Formación', href: '#formacao', id: 'formacao' },
        { label: 'Contacto', href: '#contato', id: 'contato' },
      ],
    },
  },
};
