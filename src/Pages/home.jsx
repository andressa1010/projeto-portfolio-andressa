import React from "react";
import Menu from "../components/menu";

const projetosAndressa = [
  {
    id: 1,
    name: "Projeto Doces e Bolos",
    image: "/projeto-doces-bolos.jpg",
    description: `Neste projeto, criei uma API com Node.js, Express, 
    Prisma ORM e MongoDB, responsável por armazenar e fornecer todas as
     informações, incluindo imagens dos produtos. As imagens são carregadas
      diretamente da API, garantindo uma integração dinâmica e eficiente.
   No front-end, utilizei React.js, React Router DOM e styled-components para
   construir uma interface moderna e responsiva, onde cada detalhe, 
  desde as informações até as imagens, é exibido em perfeita harmonia.
   Um sistema completo que une funcionalidade e design para uma confeitaria virtual `,
    link: "https://andressadocesebolos.netlify.app/",
  },
  {
    id: 2,
    name: "Projeto Cadastro de Usuários",
    image: "/projeto-registrar-usuarios.jpg",
    description: `
    Neste projeto, desenvolvi uma aplicação completa de cadastro de usuários, 
    integrando um back-end robusto com um front-end moderno. Utilizei Node.js,
     Express, Prisma ORM e MongoDB para criar uma API eficiente e segura,
      garantindo o gerenciamento ágil de dados.

No front-end, implementei uma interface dinâmica, 
responsiva e estilizada com React.js, React Router DOM e styled-components,
 proporcionando uma experiência de navegação fluida e intuitiva para o usuário.

Este projeto reflete minhas habilidades em desenvolvimento full stack, 
com foco em performance, organização e experiência do usuário,
 evidenciando minha capacidade de construir sistemas escaláveis
  e bem estruturados.
    `,
    link: "https://andressaregistrarusuarios.netlify.app/",
  },
  {
    id: 3,
    name: "Projeto Agendamentos de Salão ",
    image: "/Agendamentos-de-Salão .jpg",
    description: `
    Este projeto foi desenvolvido para simplificar o processo de agendamentos
     em salões de beleza, permitindo que os clientes escolham o serviço desejado
      e realizem marcações com data e hora personalizadas.

No back-end, 
criei uma API eficiente com Node.js, Express, Prisma ORM e MongoDB, 
garantindo o gerenciamento seguro e organizado de dados de clientes, 
serviços e horários.

No front-end, desenvolvi uma interface moderna, 
responsiva e intuitiva utilizando React.js, 
React Router DOM e styled-components, proporcionando aos usuários
 uma experiência fluida e fácil de usar.

Este projeto destaca minha capacidade de construir soluções 
completas, focadas em usabilidade, performance e integração de sistemas, 
entregando resultados práticos e impactantes.`,
    link: "https://agendamentosandressa.netlify.app/",
  },
];

const Home = () => {
  return (
    <>
      <Menu />

      <div className="div-logo">
        <img className="logo" src="/logo9_29_01126 (1).png" alt="logo"></img>
      </div>

      <div className="container">
        <p className="text">
          Desenvolvedora Front End apaixonada por criar interfaces interativas e
          soluções que aprimoram a experiência do usuário. Formada em
          desenvolvimento Full Stack pela Dev Quest, tenho um sólido
          conhecimento em HTML, CSS, JavaScript e React, com foco em criar
          aplicações web modernas e responsivas. Embora meu foco seja o Front
          End, também possuo experiência no Back End, especialmente na criação
          de APIs utilizando Node.js e Express, o que me permite colaborar de
          maneira completa em projetos de desenvolvimento web. Estou em
          constante evolução e busco oportunidades que me permitam continuar
          crescendo no desenvolvimento Front End, aplicando minhas habilidades
          para transformar ideias em experiências digitais excepcionais
        </p>
        <img className="img-andressa" src="/2024092809560212.png"></img>
      </div>

      <div className="container-formacao">
        <div className="content-formacao">
          <h2>Formação Academica</h2>
          <p className="text-formacao">
            Bacharelado em análise e desenvolvimento de sistemas Universidade
            Estácio de sá -Polo Assunção- São Bernardo do Campo - São Paulo
          </p>
          <p className="text-formacao">
            Curso Técnico Full Stack Dev Quest- Dev em dobro - período outubro
            2023 a outubro 2024
          </p>
          <p className="text-formacao">
            Curso Técnico Full Stack Dev Club - período setembro 2024 a setembro
            2025
          </p>
        </div>
      </div>

      <div className="certificados">
        <div className="content-certificados">
          <img src="/certificado-backend.jpg"></img>
        </div>
        <div className="content-certificados">
          <img src="/certificado-frontend.jpg"></img>
        </div>
        <div className="content-certificados">
          <img src="/certificado.jpg"></img>
        </div>
      </div>

      <div className="text-projetos">
        <h2>Principais Projetos - Transformando ideias em soluções</h2>
      </div>
      <div className="text-projetos">
      <p>
          Ao longo da minha jornada, desenvolvi projetos que unem tecnologia,
          criatividade e funcionalidade, sempre com foco em proporcionar uma
          excelente experiência para o usuário. Cada um deles reflete minha
          evolução como desenvolvedora e minha habilidade de transformar
          desafios em resultados impactantes.
        </p>
      </div>

      <div id="container-projetos">
        {projetosAndressa.map((projeto) => (
          <div key={projeto.id} className="projeto">
            <h2>{projeto.name} </h2>
            <img src={projeto.image} alt={projeto.name}></img>
            <p> {projeto.description} </p>
            <a
              className="projeto-link"
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar Projeto
            </a>
          </div>
        ))}
      </div>

      <div className="whatsapp">
        <a href="https://wa.me/5511986414262" target="_blank">
          <img src="/whatsapp.png"></img>
        </a>
      </div>
    </>
  );
};

export default Home;
