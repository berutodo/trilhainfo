import { Link } from "react-router-dom";
import {
  Level,
  LinkType,
  LinkContentType,
  RoadmapItem,
} from "../entity/RoadmapItem";

export const data: Level[] = [
  {
    label: "Conhecimento básico de Frontend",
    description:
      "Apesar de ser controverso estar aqui, um conhecimento básico não vai fazer mal 😅 em algum momento do aprendizado.",
    items: [
      {
        label: "HTML",
        description:
          "HTML significa HyperText Markup Language. Ele é usado no frontend e fornece a estrutura da página da Web que você pode estilizar usando CSS e tornar interativa usando JavaScript.",
        children: [
          {
            label: "O básico",
            links: [
              {
                url: "https://www.youtube.com/watch?v=CZPa3-1BKnY&list=PLirko8T4cEmzrH3jIJi7R7ufeqcpXYaLa",
                label: "Marco Bruno HTML e CSS Feliz",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=IOfxZFgUjt8",
                label: "HTML Básico Parte 1 - Dev Lucas Lopes",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=jU7gyfsQx9Y",
                label: "HTML Básico Parte 2 - Dev Lucas Lopes",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Formulários e Validações",
            links: [
              {
                url: "https://www.youtube.com/watch?v=uvzFT-TCVFM",
                label: "Validação de campos em formulários HTML - Edicursos",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=wwqOJ2o84S4",
                label: "Formulários com HTML e CSS - Rafaella Ballerini",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Convenções e Melhores Práticas",
            links: [
              {
                url: "https://www.youtube.com/watch?v=TBplwrsUj4s",
                label:
                  "Boas práticas para escrever um HTML profissional - Mayk Brito",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Acessibilidade",
            links: [
              {
                url: "https://www.youtube.com/watch?v=ZfUwFCCCDh0",
                label:
                  "HTML e Acessibilidade. 6 erros comuns que até devs mais experientes podem cometer - Ser Frontend",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=pOmdL9LzDJg",
                label: "Acessibilidade em páginas web - Matheus Castiglioni",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: "CSS",
        description:
          "CSS ou Cascading Style Sheets é a linguagem usada para estilizar o frontend de qualquer site. CSS é uma tecnologia fundamental da World Wide Web, juntamente com HTML e JavaScript.",
        children: [
          {
            label: "O básico",
            links: [
              {
                url: "https://www.youtube.com/watch?v=5PS6ku8NzIE&list=PLirko8T4cEmx5eBb1-9j6T6Gl4aBtZ_5x",
                label: "Pare de Chutar o CSS - Marco Bruno",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=hSfSw4kJHxY&t=3s",
                label: "Primeiros Passos CSS - Dev Lucas Lopes",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Fazendo Layouts",
            links: [
              {
                url: "https://www.youtube.com/watch?v=z1Hp72GVHJk&list=PLx4x_zx8csUhDWtEa-AtDAgSSmLObBVaz",
                label: "CSS Flexbox - CFBCursos",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=P9TrFDNwor4",
                label: "Tutorial de Flexbox - Matheus Battisti",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=8VapN6x897U",
                label: "Aprenda CSS Grid em 30 minutos - Matheus Battisti",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=E1tR7sYMEN0",
                label:
                  "Pare de chutar e aprenda float e sua trupe - Marco Bruno",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=5PS6ku8NzIE",
                label: "Pare de chutar e aprenda display: inline - Marco Bruno",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=HWfhwokS_qg",
                label: "Pare de chutar e aprenda display: block - Marco Bruno",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=Yj9-N9BEVeM",
                label:
                  "Pare de chutar e aprenda display: inline-block - Marco Bruno",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Design Responsivo e Media Queries",
            links: [
              {
                url: "https://www.youtube.com/watch?v=3rrX9w0HhZc",
                label: "O que é Web Design Responsivo? - Chief of Design",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=H91DhKPjhPk",
                label: "Responsividade na Prática - Mayk Brito",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: "Javascript",
        description:
          "JavaScript permite adicionar interatividade às suas páginas. Exemplos comuns que você pode ter visto nos sites são controles deslizantes, interações de clique, pop-ups e assim por diante.",
        children: [
          {
            label: "Sintaxe e o Básico",
            links: [
              {
                url: "https://www.youtube.com/watch?v=bXim6-jCflk&list=PLz_pSrQW_5xJexe74z50HXLCkYDKfks8S",
                label: "Desafios Javascript - Fabio Bergmann",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Manipulação de DOM",
            links: [
              {
                url: "https://www.youtube.com/watch?v=xoYFoBtev8A",
                label: "Manipulando o DOM na prática - Dogcode",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=aVB67Y31E4A",
                label: "Manipulando a DOM com Vanilla JS - CodarMe",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=UftSB4DaRU4",
                label:
                  "Manipulação de DOM com JavaScript, do zero, na prática - Mayk Brito",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Fetch API / Ajax (XHR)",
            links: [
              {
                url: "https://www.youtube.com/watch?v=mmCuNbChZ9I",
                label: "Como consumir de uma API usando a Fetch API - Huriel",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=qIGYM4S8x50",
                label:
                  "Aprenda Fetch Api de Javascript - Matheus Battisti (Hora de Codar)",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "ES6+ e JS Modular",
            links: [
              {
                url: "https://www.youtube.com/watch?v=-Hc7V1R5bt0",
                label:
                  "Um guia para MÓDULOS JavaScript (ES6 Modules) - Flávio Coutinho",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=ihWA4tri1Fc&list=PLDqnSpzNKDvnU__J6Seq2iAhCaRr7nhMP",
                label: "Javascript ES6+ (playlist) - Angelo Luz",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label:
              "Conceitos de Hoisting, Event Bubbling, Escopo, Prototype, Shadow DOM, strict",
            links: [
              {
                url: "https://www.youtube.com/watch?v=RtfBx90R070&list=PLlAbYrWSYTiPQ1BE8klOtheBC0mtL3hEi",
                label: "Mini-curso JS Moderno (ES6) - Willian Justen",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "SO e Conhecimentos Gerais",
        description:
          "Sistema Operacional é um programa que gerencia os recursos de um computador, principalmente a alocação desses recursos entre outros programas. Os recursos típicos incluem a unidade central de processamento (CPU), memória do computador, armazenamento de arquivos, dispositivos de entrada/saída (E/S) e conexões de rede.",
        children: [
          {
            label: "Uso do Terminal",
            links: [
              {
                label: "Aprenda os comandos básicos do Linux - Diolinux",
                url: "https://www.youtube.com/watch?v=JEhVB4VHsTI",
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Linux Week - Linux Tips",
                url: "https://www.youtube.com/watch?v=zGE4UxYndrk&list=PLf-O3X2-mxDnl7LhhjhEgbo2etWKkJ0GV",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Como funcionam SO's",
            links: [
              {
                url: "https://www.youtube.com/watch?v=Rl6HhDvW984&list=PLxI8Can9yAHeK7GUEGxMsqoPRmJKwI9Jw",
                label: "Sistemas Operacionais - UNIVESP",
                votes: 0,
                type: LinkType.FREE,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Gerenciamento de Processos", links: [] },
          {
            label: "Threads e Concorrência",
            links: [
              {
                label: "Concorrência e Paralelismo - Fabio Akita",
                url: "https://www.youtube.com/watch?v=cx1ULv4wYxM",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Armazenamento",
            links: [
              {
                label: "Entendendo Armazenamento - Fabio Akita",
                url: "https://www.youtube.com/playlist?list=PLdsnXVqbHDUcM0LTAxqrVrTy6Q7jQprjt",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Gerenciamento de Memória",
            links: [
              {
                label: "Gerenciamento de Memória - Fabio Akita",
                url: "https://www.youtube.com/watch?v=9AK_1gqEfkQ",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Básicos POSIX", links: [] },
          {
            label: "Conceitos Básicos de Rede",
            links: [
              {
                label: "Redes de Computadores - Curso em Video",
                url: "https://www.cursoemvideo.com/curso/redes-de-computadores/",
                contentType: LinkContentType.VISIT,
              },
              {
                label: "Introdução a Redes - Fabio Akita",
                url: "https://www.youtube.com/playlist?list=PLdsnXVqbHDUcTGjNZuRYCVj3AZtdt6oG7",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Escolha uma linguagem",
    description:
      "Tente aprender a fundo coisas como concorrência, uso de memória e especificidades da que escolher.",
    items: [
      {
        label: "Javascript",
        description:
          "JavaScript permite adicionar interatividade às suas páginas. Exemplos comuns que você pode ter visto nos sites são controles deslizantes, interações de clique, pop-ups e assim por diante. Além de ser usado no front-end em navegadores, existe o Node.js, que é um ambiente de tempo de execução JavaScript back-end de código aberto, multiplataforma e executado no mecanismo V8 e executa código JavaScript fora de um navegador da web.",
        children: [
          {
            label: "O básico",
            links: [
              {
                label:
                  "Curso Grátis de JavaScript e ECMAScript para Iniciantes - Curso em Vídeo",
                url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: "Python",
        description:
          "Python é uma linguagem de programação bem conhecida que é uma linguagem fortemente tipada e uma linguagem tipada dinamicamente. Sendo uma linguagem interpretada, o código é executado assim que é escrito e a sintaxe do Python permite escrever código de forma programática funcional, procedural ou orientada a objetos.",
        children: [
          {
            label: "Python",
            links: [
              {
                label: "Python Week - Linux Tips e Bruno Rocha",
                url: "https://www.youtube.com/watch?v=spIRwXEF3XY&list=PLf-O3X2-mxDlfAv8IOfic1sHArdwrrkgh&index=2",
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Selenium com Python - Dunossauro",
                url: "https://www.youtube.com/watch?v=PHHXksljGNA&list=PLOQgLBuj2-3LqnMYKZZgzeC7CKCPF375B",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: "Java",
        description:
          "Java é uma linguagem de uso geral, usada principalmente para aplicativos baseados na Internet. Foi criado em 1995 por James Gosling na Sun Microsystems e é uma das opções mais populares para quem desenvolve back-end.",
        children: [
          {
            label: "Java",
            links: [
              {
                label: "Java Básico",
                url: "https://www.cursoemvideo.com/curso/java-basico/",
                contentType: LinkContentType.VISIT,
              },
            ],
          },
          {
            label: "Estrutura de Dados com Java - Loiane",
            links: [
              {
                label:
                  "Estrutura de Dados e Algoritmos com Java #01: Introdução",
                url: "https://www.youtube.com/watch?v=N3K8PjFOhy4",
                contentType: LinkContentType.VISIT,
              },
            ],
          },
        ],
      },
      {
        label: "Go",
        description:
          "Go é uma linguagem de programação de código aberto suportada pelo Google. Go pode ser usado para escrever serviços em nuvem, ferramentas CLI, usadas para desenvolvimento de API e muito mais.",
        children: [
          {
            label: "Go",
            links: [
              {
                label: "Aprenda Go",
                url: "https://www.youtube.com/watch?v=WiGU_ZB-u0w&list=PLCKpcjBB_VlBsxJ9IseNxFllf-UFEXOdg",
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Go 101 - Tiago Temporin",
                url: "https://tiago-temporin.notion.site/Go-101-1fe9cef0ccc94ed3bed7f38e7dd5815d",
                contentType: LinkContentType.VISIT,
              },
              {
                label: "Aprenda Go - Ellen Korbes",
                url: "https://www.youtube.com/c/AprendaGo/about",
                contentType: LinkContentType.VISIT,
              },
              {
                label: "Aprenda Go com Testes - Lauren Ferreira ",
                url: "https://larien.gitbook.io/aprenda-go-com-testes/",
                contentType: LinkContentType.VISIT,
              },
            ],
          },
        ],
      },
      {
        label: "Rust",
        description:
          "Rust é uma linguagem de programação de sistemas moderna com foco em segurança, velocidade e simultaneidade. Ele atinge esses objetivos sendo seguro para a memória sem usar o garbage collector.",
        children: [
          {
            label: "Rust",
            links: [
              {
                label: "Aprenda com quem não sabe - Fernando Daciuk",
                url: "https://www.youtube.com/watch?v=mWh49ZpmQwk&list=PLr4c053wuXU-igL9KSptwKK5XdyGX13FB",
                contentType: LinkContentType.WATCH,
              },
              {
                label: "A Linguagem de Programação Rust - Bruno Rocha",
                url: "https://www.youtube.com/watch?v=K5Zt804f9tg&list=PLjSf4DcGBdiHC1rf9rXR9orU3wvGjgtpm",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: "Ruby",
        description:
          "Ruby é uma linguagem de programação interpretada de alto nível que combina Perl, Smalltalk, Eiffel, Ada e Lisp. Ruby foca na simplicidade e produtividade junto com uma sintaxe que lê e escreve naturalmente. Ruby suporta programação procedural, orientada a objetos e funcional e é tipada dinamicamente.",
        children: [{ label: "O básico", links: [
          {
          label: "Learn Ruby - Odin Project",
          url: "https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby",
          contentType: LinkContentType.READ,
        },
        
      ] },
    {
      label: "Frameworks", links: [
        {
          label: "Learn Ruby on Rails - Odin Project",
          url: "https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/ruby-on-rails",
          contentType: LinkContentType.READ,
        }
      ]
    }],
      },
      {
        label: "PHP",
        description:
          "PHP é uma linguagem de script de servidor e uma ferramenta poderosa para criar páginas da Web dinâmicas e interativas. Ele foi originalmente criado pelo programador dinamarquês-canadense Rasmus Lerdorf em 1994. A implementação de referência do PHP é agora produzida pelo The PHP Group.",
        children: [
          {
            label: "PHP",
            links: [
              {
                label: "PHP Básico - Curso em Video",
                url: "https://www.cursoemvideo.com/curso/php-basico/",
                contentType: LinkContentType.VISIT,
              },
            ],
          },
        ],
      },
      {
        label: "C#",
        description:
          "C# (pronuncia-se 'C sharp') é uma linguagem de programação de uso geral feita pela Microsoft. Ele é usado para executar diferentes tarefas e pode ser usado para criar aplicativos da web, jogos, aplicativos móveis, etc.",
        children: [
          {
            label: "C# Básico",
            links: [
              {
                label: "Conceitos sobre CLR",
                url: "https://www.youtube.com/watch?v=gQdZq_SRvE8",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Download .NET",
                url: "https://dotnet.microsoft.com/en-us/download",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Criando um projeto usando CLI",
                url: "https://www.youtube.com/watch?v=fvPGTLtP9wg",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Como baixar e instalar o Visual Studio 2022",
                url: "https://www.youtube.com/watch?v=_HgVooVuGOE",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Lógica de Programação e Algoritmos com C#",
                url: "https://www.youtube.com/watch?v=8KOnXlz_-9w&list=PLTyvdsF_vFzLvyKcXNqe785Pk9EVObRgR&index=1",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Criando uma aplicação ASP.NET do Zero (Visual Studio)",
                url: "https://www.youtube.com/watch?v=-v0sfER0po8",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Extension Methods no C# | por André Baltieri #balta",
                url: "https://www.youtube.com/watch?v=xQhiv-bmt9o&list=PLHlHvK2lnJnc4l_Iag26RMpUtV2Yl_X_j&index=6",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "C# Intermediário",
            links: [
              {
                label: "Orientação a Objetos com C#",
                url: "https://www.youtube.com/watch?v=wI6zLJJhnNw&list=PLWXw8Gu52TRKlAqSfkdhSTPtAfAcYko5E",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label: "CRUD camada DAL - C# Asp.Net com Bootstrap",
                url: "https://www.youtube.com/watch?v=s5_83He6HmI&list=PLb2HQ45KP0WuY6bCj-kCSa2LvvnaThRQ_&index=1",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Introdução a consultas LINQ e expressões Lambda no C#",
                url: "https://www.youtube.com/watch?v=-yxrPTlvpz4",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "C# Frameworks",
            links: [
              {
                label: "Criando projeto Windows Forms com Entityframework ORM",
                url: "https://www.youtube.com/watch?v=Zy_tFVgvkOM",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "C# Avançado",
            links: [
              {
                label:
                  "Criando uma API usando ASP.NET Core 5, EF Core 5 e MySql",
                url: "https://www.youtube.com/watch?v=L1bJUKZV0b0",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label:
                  "Como fazer um App com ASP.NET (Completo com login, EF e SQLite) | por André Baltieri #balta",
                url: "https://www.youtube.com/watch?v=NFQAj5bCgd8",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label:
                  "Masterclass - Injeção de Dependência no .NET | por André Baltieri #balta",
                url: "https://www.youtube.com/watch?v=CbAMyaBWzig",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Controle de Versão",
        description:
          "Os sistemas de controle de versão permitem rastrear alterações em sua base de código/arquivos ao longo do tempo. Eles permitem que você volte para alguma versão anterior da base de código sem problemas. Além disso, eles ajudam na colaboração com pessoas que trabalham no mesmo código – se você já colaborou com outras pessoas em um projeto, você já deve conhecer a frustração de copiar e mesclar as alterações de outra pessoa em sua base de código; sistemas de controle de versão permitem que você se livre desse problema.",
        children: [
          {
            label: "Conceitos de Git",
            links: [
              {
                url: "https://www.youtube.com/watch?v=IBClN6VpJDw&list=PLlAbYrWSYTiPA2iEiQ2PF_A9j__C4hi0A",
                label: "Git e Github para Iniciantes - Willian Justen",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
              {
                label:
                  "Curso de Git e GitHub: grátis, prático e sem usar comandos no terminal - Curso em Vídeo",
                url: "https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Serviçoes de Hospedagem de Git",
            children: [
              {
                label: "Github",
                links: [
                  {
                    label: "Git e Github: Como subir meu primeiro projeto?",
                    url: "https://www.youtube.com/watch?v=-6JwElEt49w",
                    contentType: LinkContentType.WATCH,
                  },
                ],
              },
              { label: "Gitlab", links: [] },
              { label: "Bitbucket", links: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Bancos de Dados",
    items: [
      {
        label: "Relacionais",
        description:
          "Um banco de dados relacional é um tipo de banco de dados que armazena e fornece acesso a pontos de dados relacionados entre si. Os bancos de dados relacionais armazenam dados em uma série de tabelas. As interconexões entre as tabelas são especificadas como chaves estrangeiras. Uma chave estrangeira é uma referência exclusiva de uma linha em uma tabela relacional para outra linha em uma tabela, que pode ser a mesma tabela, mas geralmente é uma tabela diferente.",
        children: [
          {
            label: "PostgreSQL",
            links: [
              {
                label: "PostgreSQL - Boson Treinamentos",
                url: "https://www.youtube.com/watch?v=Z_SPrzlT4Fc&list=PLucm8g_ezqNoAkYKXN_zWupyH6hQCAwxY",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "MySQL",
            links: [
              {
                label: "Mysql - Curso em Video",
                url: "https://www.cursoemvideo.com/curso/mysql/",
                contentType: LinkContentType.VISIT,
              },
            ],
          },
          { label: "MariaDB", links: [] },
          {
            label: "MS SQL",
            links: [
              {
                label:
                  "MS SQL 2014 - Curso de SQL com SQL Server (T-SQL) - Bóson Treinamentos",
                url: "https://www.youtube.com/playlist?list=PLucm8g_ezqNqI5cW3alteV5olcMCcHYRK",
                contentType: LinkContentType.VISIT,
              },
            ],
          },
          { label: "Oracle", links: [] },
        ],
      },
      {
        label: "NoSQL",
        description:
          "Os bancos de dados NoSQL oferecem armazenamento e recuperação de dados modelados de forma diferente dos bancos de dados relacionais 'tradicionais'. Os bancos de dados NoSQL normalmente se concentram mais em dimensionamento horizontal, consistência eventual, velocidade e flexibilidade e são usados comumente para aplicativos de big data e streaming em tempo real. O NoSQL é frequentemente descrito como um sistema BASE (basicamente disponível, estado suave, consistência eventual) em oposição ao SQL/relacional que normalmente se concentra em ACID (atomicidade, consistência, isolamento, durabilidade). Estruturas de dados NoSQL comuns incluem par chave-valor, coluna larga, gráfico e documento.",
        children: [
          {
            label: "MongoDB",
            links: [
              {
                label: "MongoDB para iniciantes - Nataniel Paiva",
                url: "https://www.youtube.com/watch?v=u3sVM3viDtQ&list=PLxuFqIk29JL0DMM0Z-S9_XEHAexXvhYyb",
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Introdução ao NoSQL: MongoDB - Ricardo Leme",
                url: "https://www.youtube.com/watch?v=kedLyo95fGU&list=PLyqlZW5s3wkoMhARQKp3s4YtaeKucb0Xj",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Cassandra",
            links: [
              {
                label:
                  "Apache Cassandra - Tutorial 1 - Introduction to Apache Cassandra",
                url: "https://www.youtube.com/watch?v=s1xc1HVsRk0&list=PLalrWAGybpB-L1PGA-NfFu2uiWHEsdscD",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "InfluxDB", links: [] },
          {
            label: "Firebase",
            links: [
              {
                label: "Introdução ao Firebase - Aula 1 - Introdução",
                url: "https://www.youtube.com/watch?v=uP_v6RhnP5U&list=PLHlHvK2lnJnccBL9grcoRxv8CsLa9Q_4q",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Conceitos Importantes de Banco de Dados",
        children: [
          { label: "ORM's", links: [] },
          {
            label: "ACID",
            links: [
              {
                label:
                  "O que são as propriedades ACID em Bancos de Dados - Bóson Treinamentos",
                url: "https://www.youtube.com/watch?v=fVRY554MHWc&ab_channel=B%C3%B3sonTreinamentos",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Transações", links: [] },
          {
            label: "N+1",
            description:
              "O problema de consulta N+1 acontece quando seu código executa N instruções de consulta adicionais para buscar os mesmos dados que poderiam ter sido recuperados ao executar a consulta primária.",
            links: [],
          },
          {
            label: "Normalização",
            links: [
              {
                label: "Banco de Dados - Normalização - Parte 1",
                url: "https://www.youtube.com/watch?v=Mhd2bI5pJuo",
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Curso de modelagem de dados - Bóson Treinamentos",
                url: "https://www.youtube.com/playlist?list=PLucm8g_ezqNoNHU8tjVeHmRGBFnjDIlxD",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Índices", links: [] },
          { label: "Replicação de Dados", links: [] },
          { label: "Sharding", links: [] },
          {
            label: "CAP",
            description:
              "CAP é um acrônimo que significa consistência, disponibilidade e tolerância de partição. De acordo com o teorema CAP, qualquer sistema distribuído pode garantir apenas duas das três propriedades em qualquer ponto do tempo. Você não pode garantir todas as três propriedades de uma vez.",
            links: [],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "API's",
        description:
          "API é um acrônimo para Application Programming Interface, ou Interface de Programação de Aplicação, em português. Trata-se de um conjunto de rotinas e padrões que facilitam a comunicação e troca de informações entre sistemas. ",
        children: [
          { label: "JSON API's", links: [] },
          { label: "Autenticação", links: [] },
          { label: "Open API e Swagger", links: [] },
          { label: "gRPC", links: [] },
          { label: "SOAP", links: [] },
          { label: "HATEOAS", links: [] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Caching",
        description:
          "Um cache é uma camada de armazenamento físico de dados de alta velocidade que guarda um subconjunto de dados, geralmente temporário por natureza, para que futuras solicitações referentes a esses dados sejam atendidas de modo mais rápido do que é possível fazer ao acessar o local de armazenamento principal de dados. O armazenamento em cache permite reutilizar com eficiência dados recuperados ou computados anteriormente.",
        children: [
          { label: "CDN", links: [] },
          {
            label: "Redis",
            links: [
              {
                label: "Redis #1 - Introducción de Redis | Jeison Peguero",
                url: "https://www.youtube.com/watch?v=GU6N8Qk2dBE&list=PLwGP6T2wG3jbsuEYPqCswwlx4aU0qhgW1",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Memcached", links: [] },
          {
            label: "Client Side",
            links: [
              {
                label:
                  "Como usar Cache HTTP - Entenda melhor sobre performance na Web",
                url: "https://www.youtube.com/watch?v=IrwIYywpvbM",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Segurança",
        description:
          "A segurança da Web refere-se às medidas de proteção tomadas pelos desenvolvedores para proteger os aplicativos da Web de ameaças que podem afetar os negócios.",
        children: [
          { label: "HTTPS", links: [] },
          {
            label: "CORS",
            links: [
              {
                url: "https://www.youtube.com/watch?v=GZV-FUdeVwE",
                label:
                  "Cross-Origin Resource Sharing em 6 minutos - Codigo Fonte TV",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Content Security Policy", links: [] },
          {
            label: "OWASP",
            links: [
              {
                url: "https://www.youtube.com/watch?v=wC_epzVm780",
                label: "Série OWASP Top 10 - Cássio B. Pereira",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Cookies",
            links: [
              {
                url: "https://dias.dev/2022-09-27-cookies-e-seguranca/",
                label: "Cookies e Segurança",
                contentType: LinkContentType.READ,
              },
            ],
          },
          {
            label: "OAuth 2.0 and OpenID Connect",
            links: [
              {
                label:
                  "OAuth 2.0 and OpenID Connect (in plain English) - OktaDev",
                url: "https://youtu.be/996OiexHze0",
                contentType: LinkContentType.WATCH,
              },
              {
                label:
                  "OAuth 2 // Dicionário do Programador - - Codigo Fonte TV",
                url: "https://youtu.be/z-RuvnMlw34",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    items: [
      {
        label: "Testes",
        description:
          "Uma chave para construir um software que atenda aos requisitos sem defeitos é o teste. O teste de software ajuda quem está desenvolvendo a saber que estão criando o software certo. Quando os testes são executados como parte do processo de desenvolvimento (geralmente com ferramentas de integração contínua), eles criam confiança e evitam regressões no código.",
        children: [
          { label: "Testes de Integração", links: [] },
          {
            label: "Testes Unitários",
            links: [
              {
                url: "https://www.youtube.com/watch?v=9e81T1B5MlI",
                label: "O que são Testes de Unidade",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Testes Funcionais", links: [] },
        ],
      },
    ],
  },

  {
    items: [
      {
        label: "CI/CD",
        description:
          "CI/CD (Integração Contínua/Implantação Contínua) é a prática de automatizar a construção, teste e implantação de aplicativos com o objetivo principal de detectar problemas antecipadamente e fornecer versões mais rápidas para o ambiente de produção.",
        children: [{ label: "O básico", links: [] }],
      },
    ],
  },

  {
    items: [
      {
        label: "Princípios de Design e Desenvolvimento",
        description: "",
        children: [
          {
            label: "Design Patterns",
            links: [
              {
                label: "Padrões de Projeto - Refatoring Guru",
                url: "https://refactoring.guru/pt-br/design-patterns",
                contentType: LinkContentType.WATCH,
              },
              {
                label: "Repositório Padrões de Projeto com linguagem C#",
                url: "https://github.com/JessicaNathany/design-patterns",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Domain Driven Design",
            links: [
              {
                label: "Tech em 10 Minutos DDD - Road to Agility",
                url: "https://www.youtube.com/watch?v=wmg3xB0aUv8",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Test Driven Development",
            links: [
              {
                label: "O que é TDD - Test-Driven Development",
                url: "https://www.youtube.com/watch?v=o_C_qxhPws4",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "SOLID",
            links: [
              {
                label:
                  "SOLID fica FÁCIL com Essas Ilustrações - Filipe Deschamps",
                url: "https://youtu.be/6SfrO3D4dHM",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "KISS", links: [] },
          { label: "YAGNI", links: [] },
          {
            label: "DRY",
            links: [
              {
                label: "Você sabe o que é DRY e WET? - Flávio Mendes",
                url: "https://www.youtube.com/watch?v=UHvuCfpVDsg",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Padrões de Arquitetura",
        description: "",
        children: [
          { label: "Monolitos", links: [] },
          {
            label: "Microsserviços",
            links: [
              {
                label:
                  "Microsserviços, o mínimo que você precisa saber - Otavio Lemos",
                url: "https://www.youtube.com/watch?v=eN8dFfTrEtQ",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "SOA", links: [] },
          { label: "CQRS e Event Sourcing", links: [] },
          {
            label: "Orientação a eventos",
            links: [
              {
                url: "https://www.youtube.com/watch?v=MaPWf_mt1uA",
                label:
                  "Arquitetura Orientada a Eventos com Java, Spring Boot e Kafka",
                contentType: LinkContentType.WATCH,
              },
              {
                url: "https://www.youtube.com/watch?v=oUJbuFMyBDk&t=185s",
                label: "Conceitos sobre Message Queue",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Serverless",
            links: [
              {
                url: "https://www.youtube.com/watch?v=ktH_HhQDgLY",
                label: "Primeiros Passos - Tiago Boeing",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "System Design",
            links: [
              {
                url: "https://www.youtube.com/watch?v=SqcXvc3ZmRU",
                label: "Basics Concepts about System Design",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    items: [
      {
        label: "Engines de Busca",
        children: [
          {
            label: "Elasticsearch",
            links: [
              {
                url: "https://www.youtube.com/c/EduardoNeves/videos",
                label: "Canal Eduardo Neves Elasticsearch",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Solr", links: [] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Message Brokers",
        description:
          "Os intermediários de mensagens são uma tecnologia de comunicação entre aplicativos para ajudar a criar um mecanismo de integração comum para dar suporte a arquiteturas de nuvem híbrida, sem servidor, baseadas em microsserviços e nativas da nuvem. Dois dos corretores de mensagens mais famosos são RabbitMQ e Apache Kafka",
        children: [
          {
            label: "RabbitMQ",
            links: [
              {
                label: "Primeiros Passos - Otavio Lemos",
                url: "https://www.youtube.com/watch?v=ZHj44_0a1yA",
                contentType: LinkContentType.WATCH,
              },
              {
                label: "RabbitMQ Direto Ao Ponto - DevDojo",
                url: "https://www.youtube.com/watch?v=JqNH6nRANh0&list=PL62G310vn6nF-iJF7v3DWhk5Mngup-sub",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Kafka", links: [] },
          {
            label: "Redis",
            links: [
              {
                label: "Background jobs (filas) no Node.js com Redis",
                url: "https://youtu.be/uonKHztGhko",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Containers vs Virtualização",
        description:
          "Contêineres e máquinas virtuais são as duas abordagens mais populares para configurar uma infraestrutura de software para sua organização.",
        children: [
          {
            label: "Docker",
            links: [
              {
                label: "Descomplicando o Docker - Linux Tips",
                url: "https://www.youtube.com/watch?v=Wm99C_f7Kxw&list=PLf-O3X2-mxDn1VpyU2q3fuI6YYeIWp5rR",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "rkt", links: [] },
          { label: "LXC", links: [] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "GraphQL",
        description:
          "GraphQL é uma linguagem de consulta para APIs e um tempo de execução para atender a essas consultas com seus dados existentes. O GraphQL fornece uma descrição completa e compreensível dos dados em sua API, oferece aos clientes o poder de solicitar exatamente o que eles precisam e nada mais, facilita a evolução de APIs ao longo do tempo e permite ferramentas de desenvolvedor poderosas.",
        children: [
          {
            label: "Apollo",
            links: [
              {
                label: "Pra que serve, conceitos e Hello World - Mateus Silva",
                url: "https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Relay Modern", links: [] },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Bancos de Dados em Grafos",
        description:
          "Um banco de dados gráfico armazena nós e relacionamentos em vez de tabelas ou documentos. Os dados são armazenados da mesma forma que você esboça ideias em um quadro branco. Seus dados são armazenados sem restringi-los a um modelo pré-definido, permitindo uma maneira muito flexível de pensar sobre eles e usá-los.",
        children: [
          {
            label: "Neo4j",
            links: [
              {
                label: "Neo4j (Graph Database) Crash Course",
                url: "https://www.youtube.com/watch?v=8jNPelugC2s",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Websockets",
        description:
          "Web sockets são definidos como uma comunicação bidirecional entre os servidores e os clientes, o que significa que ambas as partes se comunicam e trocam dados ao mesmo tempo. Este protocolo define uma comunicação full duplex desde o início. Os soquetes da Web dão um passo à frente ao trazer funcionalidades ricas da área de trabalho para os navegadores da Web.",
        children: [
          {
            label: "WebSockets",
            links: [
              {
                label: "Comunicação em Tempo Real com WebSockets | Dias de Dev",
                url: "https://www.youtube.com/watch?v=QkhbQoajdCw",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        label: "Web Servers",
        description:
          "Servidor web é um software responsável por aceitar pedidos em HTTP de clientes, geralmente os navegadores, e servi-los com respostas em HTTP, incluindo opcionalmente dados, que geralmente são páginas web, tais como documentos em HTML com objetos embutidos (imagens, etc) ou um computador que executa um programa que provê a funcionalidade descrita anteriormente",
        children: [
          {
            label: "Nginx",
            links: [
              {
                label:
                  "00 - Introducción a NGINX e Instalación [Debian/Fedora/CentOS/OpenSuse] [NGINX - Español]",
                url: "https://www.youtube.com/watch?v=eyxpLa9hUS8&list=PLYAyQauAPx8kwPdi9v1d_FGdJ50_li_WE",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Apache", links: [] },
          { label: "Caddy", links: [] },
          { label: "MS IIS", links: [] },
        ],
      },
    ],
  },
  {
    label: "Desenvolver com escalabilidade em mente",
    items: [
      {
        label: "Mitigação de Erros",
        children: [
          {
            label: "Graceful Degradation",
            links: [
              {
                label:
                  "Graceful Degradation - Georgia Tech - Advanced Operating Systems",
                url: "https://www.youtube.com/watch?v=Tk7e0LMsAlI",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          { label: "Throttling", links: [] },
          { label: "Backpressure", links: [] },
          { label: "Loadshifting", links: [] },
          {
            label: "Circuit Breaker",
            links: [
              {
                label:
                  "Circuit Breaker: Não trabalhe com microsserviços sem saber disso",
                url: "https://www.youtube.com/watch?v=hxRn8y5KTzQ",
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
      {
        label: "Migração",
        children: [{ label: "O básico", links: [] }],
      },
      {
        label: "Escalabilidade Vertical e Horizontal",
        children: [{ label: "O básico", links: [] }],
      },

      {
        label: "Observabilidade",
        children: [{ label: "O básico", links: [] }],
      },
    ],
  },
  {
    items: [
      {
        label: "Cloud Computing",
        description:
          "Cloud computing, conhecida também como computação em nuvem, é a tecnologia que permite o uso remoto de recursos da computação por meio da conectividade da Internet.",
        children: [
          {
            label: "AWS",
            links: [
              {
                url: "https://www.youtube.com/watch?v=j6yImUbs4OA&list=PLOF5f9_x-OYUaqJar6EKRAonJNSHDFZUm",
                label:
                  "O que é AWS e como aprender mais com o Curso Gratuito Amazon Web Services na Prática - Aula 01 - #32",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Azure",
            links: [
              {
                url: "https://www.youtube.com/watch?v=AITM8sTsu-o&list=PLwftZeDnOzt0quETXYfGjfi2AcpeGX-7i",
                label:
                  "Azure Fundamentals - Introdução ao Curso - Ray Carneiro",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Google Platfom",
            links: [
              {
                url: "https://www.youtube.com/watch?v=4lZmhCaq13U",
                label:
                  "Google Cloud, por onde começar e por quê você deveria faze-lo",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
          {
            label: "Digital Ocean",
            links: [
              {
                url: "https://www.youtube.com/watch?v=eu6DCSv95MQ&list=PLVKPmJRbmf2Rb2KwvGzRP1eBhQCWrRbhE",
                label: "Curso Digital Ocean - Introdução ao Curso - Aula 01",
                type: LinkType.FREE,
                votes: 0,
                contentType: LinkContentType.WATCH,
              },
            ],
          },
        ],
      },
    ],
  },
];
