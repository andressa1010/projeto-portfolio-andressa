import React from "react";
import Menu from "../components/menu";

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
    </>
  );
};

export default Home;
