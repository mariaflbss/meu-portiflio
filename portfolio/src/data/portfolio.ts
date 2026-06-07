export const meta = {
  name: "Maria Fernanda",
  role: "Desenvolvedora de software",
  tagline: "Construindo interfaces que importam e sistemas que funcionam.",
  email: "laboissieremaria@email.com",
  github: "https://github.com/mariaflbss",
  linkedin: "https://br.linkedin.com/in/maria-fernanda-laboissiere-25362b353",
  location: "São Paulo, Brasil",
  available: true,
};

export const about = {
  bio: "Sou desenvolvedora full stack com foco em React, TypeScript e Node.js. Apaixonada por criar experiências digitais que unem boa arquitetura com interfaces intuitivas. Busco minha primeira oportunidade profissional para colaborar em produtos reais e crescer dentro de um time.",
  focus: ["React & TypeScript", "Node.js & APIs REST", "UI/UX & Acessibilidade"],
};

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Linguagens",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Flask",
      "Spring Boot",
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Ferramentas",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Figma",
      "Jira",
      "Vite",
    ],
  },
];

export type Project = {
  title: string;
  semester: string;
  company: string;
  description: string;
  role: string;
  technologies: string[];
  github: string;
  live?: string;
  image?: string;
};

export const projects = [
  {
    title: "Análise de Comércio Exterior",
    semester: "1º Semestre",
    company: "Fatec - Faculdade de Tecnologia",
    description:
      " Desenvolver uma plataforma web interativa que permita a análise de desempenho dos municípios do Estado de São Paulo com base em dados de exportação e importação..",
    role:
      "Atuei como desenvolvedora front-end, sendo responsável pela criação da página de feedback do usuário, responsividade geral do site e otimização da exibição dos gráficos no back-end. Foquei fortemente na experiência do usuário, clareza dos dados e na funcionalidade visual da aplicação.",
    technologies: [
      "Python",
      "Flask",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "Figma",
      "Jira",
    ],
    image: "/img/api1.png",
    github: "#",
  },
  {
    title: "Plataforma de Gestão Integrada",
    semester: "2º Semestre",
    company: "NeweLog",
    description:
      "Desenvolver uma plataforma web integrada para centralizar processos administrativos, comerciais e operacionais, reduzindo retrabalho, inconsistências de dados e facilitando a gestão das informações da empresa.",
    role:
      "Atuei no desenvolvimento front-end da aplicação, participando da criação de interfaces e telas utilizadas pelos usuários da plataforma. Também fui responsável pela integração dessas funcionalidades com o back-end, garantindo a comunicação correta entre a interface e os dados do sistema. Durante o projeto, trabalhei com foco em usabilidade, organização visual das informações e experiência do usuário.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "GitHub",
      "Figma",
    ],
    image: "/img/api2.png",
    github: "#",
  },
  {
    title: "Sistema de Apontamento de Horas",
    semester: "3º Semestre",
    company: "GSW",
    description:
      "Desenvolver uma aplicação web para controle de apontamento de horas, permitindo o registro, acompanhamento e análise de atividades realizadas em projetos, fornecendo dados confiáveis para gestão operacional, financeira e estratégica.",
    role:
      "Atuei principalmente no desenvolvimento front-end da aplicação, sendo responsável pela estilização e aprimoramento visual de diversas telas do sistema, garantindo uma interface mais intuitiva e consistente para os usuários. Também participei de atividades no back-end, contribuindo para a modelagem de dados e estruturação de entidades da aplicação. Além disso, trabalhei na personalização da tela de autenticação utilizando Keycloak, adaptando a experiência de login à identidade visual e aos requisitos do projeto.",
    technologies: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Docker",
      "MySQL",
      "Keycloak",
    ],
    image: "/img/api3.png",
    github: "#",
  },
];

export type Experience = {
  type: "work" | "education" | "volunteer";
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    type: "education",
    role: "Desenvolvimento de Software Multiplataforma",
    company: "FATEC",
    period: "2025 — 2027 (Previsão)",
    description:
      "Formação voltada ao desenvolvimento de aplicações web e multiplataforma. Atualmente estudando HTML, CSS, Bootstrap, Python, Flask, MySQL, Git, UML, AWS e visualização de dados com Plotly.",
  },

  {
    type: "work",
    role: "Estagiária Administrativa",
    company: "ASV Bom Humor",
    period: "Set 2024 — Jan 2025",
    description:
      "Atuei no suporte a processos administrativos, controle de estoque, logística e acompanhamento de projetos. Também auxiliei na gestão de agendas, reuniões e organização documental, desenvolvendo habilidades de comunicação, trabalho em equipe e utilização de ferramentas como Google Workspace e Microsoft Office.",
  },

  {
    type: "education",
    role: "Técnico em Administração",
    company: "Colégio Técnico Antônio Teixeira Fernandes",
    period: "2022 — 2024",
    description:
      "Formação técnica com foco em gestão de processos, planejamento estratégico, administração financeira, contabilidade básica, organização de equipes e comunicação corporativa.",
  },
];