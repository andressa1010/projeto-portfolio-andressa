import React from "react";
import Menu from "../components/menu";

const projetosDaAndressa = [
  {
    id: 1,
    name: "Projeto Unhas Gel",
    image: "/projetoUnhas.jpg",
    description: `Desenvolvido com React e React Router DOM, este projeto apresenta
            uma solução moderna e prática para um salão de unhas. O site inclui:
            Botão de WhatsApp para facilitar o agendamento de serviços.
            Localização do salão integrada para auxiliar os clientes a
            encontrá-lo facilmente. Página exclusiva para exibição dos serviços
            oferecidos, com um layout clean e intuitivo`,
    link: "https://andressaunhasgel.netlify.app/",
  },
  {
    id: 2,
    name: "Projeto Studio Grace Benini",
    image: "/projetoGrace.jpg",
    description: `Este projeto foi criado para destacar os serviços especializados do
            salão Studio Grace Benini com foco em progressivas. Desenvolvido com
            React e React Router DOM, o site inclui: Botão de WhatsApp para
            agendamentos rápidos e diretos. Localização integrada para facilitar
            o acesso ao salão. Design clean e funcional, pensado para oferecer
            uma experiência prática e intuitiva aos clientes.`,
            link:"https://studiograce.netlify.app/"
  },
  {
    id: 3,
    name: "Projeto Replica do Site eudora",
    image: "/ProjetoEudora.jpg",
    description: ` Clone da Eudora Réplica de um site de e-commerce inspirado
            na Eudora, desenvolvida em React. O projeto foca na criação de um
            layout moderno e responsivo, com funcionalidades de navegação e
            links para redes sociais. O site também apresenta animações leves e
            um design clean, focado na experiência do usuário. Tecnologias
            usadas React Javascript Html Css React Router Dom pras as rotas`,
      link:"https://andressaeudorareplica.netlify.app/"
  },
  {
    id: 4,
    name:"Projeto StarBucks",
    image:"/projeto-starbucks.jpg",
    description:`Projeto com animações de texto inspiradas no estilo Starbucks,
            proporcionando uma experiência fluida e sofisticada. Implementado em
            HTML, CSS e JavaScript, o projeto apresenta efeitos animados que
            enriquecem a interface, permitindo que o usuário interaja com
            elementos de forma dinâmica. Tecnologias : HTML, CSS, JavaScript
            responsividade com media Queries e animações feita com kayFrames`,
    link:"https://andressastarbuckes.netlify.app/"
  },
  {
    id: 5,
    name:"Projeto StarBucks",
    image:"/Projeto-StarBucks2.jpg",
    description:`   Uma réplica estilizada do site da Starbucks, desenvolvida com React,
            onde elementos de animação e troca de imagens são os destaques.
            Inclui interações modernas e efeitos ao clicar em imagens,
            refletindo a experiência sofisticada de marca da Starbucks.
            Tecnologias : React, HTML, CSS, JavaScript React router dom para as
            rotas dos produtos`,
    link:"https://andressastarb.netlify.app/"
  },
  {
    id: 6,
    name:"Projeto Refrigerante Dev",
    image:"/projeto-refrigerante.jpg",
    description:`Desenvolvi um carrossel de imagens interativo utilizando HTML, CSS e
            JavaScript. Este projeto apresenta transições suaves e efeitos de
            animação para uma experiência visual agradável e dinâmica. Com ele,
            pude aprimorar minhas habilidades na manipulação de elementos DOM e
            animações CSS. projeto totalmente responsivo usando o midia queries
            e troca de imagens com javascript`,
    link:"https://andressarefridadev.netlify.app/"
  },
  {
    id: 7,
    name:"Projeto X-men",
    image:"/projeto-x-men.jpg",
    description:` Uma aplicação visual baseada no universo dos X-Men, criada para
            explorar e exibir informações sobre personagens. Utilizando HTML,
            CSS e JavaScript, o projeto apresenta um layout temático e
            interativo, trazendo uma experiência de navegação inspirada em
            quadrinhos e filmes da série. Tecnologias : HTML, CSS, JavaScript
            responsividade com media queries`,
    link:"https://projetoandressaxmen.netlify.app/"
  },
  {
    id: 8,
    name:"Projeto Clima do tempo",
    image:"/projeto-clima-tempo.jpg",
    description:` Um projeto de aplicação de clima que mostra o clima atual e a hora
            atual e a velocidade do vento Desenvolvido com Html css JavaScript,
            permite ao usuário visualizar as condições prejudiciais do local
            atual, com dados e informações projetadas de temperatura e clima.
            Tecnologias : Html, Css,JavaScript Totalmente responsivo com media
            queries`,
    link:"https://andressa1010.github.io/clima-do-tempo/"
  },
  {
    id: 9,
    name:"Projeto Formulário Mario",
    image:"/projeto-mario.jpg",
    description:`Um formulário temático inspirado no universo Mario, criado com HTML,
            CSS e JavaScript. O design lúdico traz elementos visuais
            característicos do personagem e do jogo. O formulário permite que os
            usuários enviem mensagens diretamente para o meu e-mail, utilizando
            integração com serviço de e-mail para enviar as informações
            capturadas no formulário. Este projeto destaca o uso de JavaScript`,
      link:"https://andressaformulariomario.netlify.app/"
  },
  {
    id: 10,
    name:"Projeto Calculadora",
    image:"/projeto-calculadora.jpg",
    description:`Projeto: Calculadora Web Desenvolvi uma calculadora funcional
            utilizando HTML, CSS e JavaScript, com um design responsivo. A
            interface permite realizar operações matemáticas básicas, com um
            display interativo que destaca o uso de grid layout para organização
            dos botões. O projeto inclui recursos como substituição de símbolos
            (* por X e / pelo símbolo de divisão) e um botão para apagar números
            individualmente.`,
    link:"https://calculadoradaandressa.netlify.app/"
  },
  {
    id: 11,
    name:"Projeto lista de tarefas",
    image:"/projeto-lista.jpg",
    description:`Desenvolvido com React, este projeto é uma aplicação prática e
            funcional para organizar o dia a dia. Com uma interface simples e
            intuitiva, os usuários podem: Adicionar novas tarefas de forma
            rápida. Excluir tarefas concluídas para manter a lista sempre
            organizada.Um exemplo claro de como React pode ser utilizado para
            criar soluções úteis e dinâmicas no dia a dia!`,
    link:"https://andressalistadetarefas.netlify.app/"
  },
  {
    id: 12,
    name:"Projeto Pokedex",
    image:"/projeto-pokedex.jpg",
    description:` Projeto: Site Pokémon Desenvolvi uma aplicação web inspirada no
            universo Pokémon, utilizando HTML, CSS e JavaScript. O projeto
            apresenta uma interface interativa onde os usuários podem explorar e
            visualizar informações de diferentes Pokémons. A página inclui um
            design atrativo e responsivo, além de animações que tornam a
            experiência mais envolvente.`,
    link:"https://andressapokemons.netlify.app/"
      
  }
];

const Projetos = () => {
  return (
    <>
      <Menu />

      <div id="container-projetos">
        {projetosDaAndressa.map((projeto) => (
          <div key={projeto.id} className="projeto">
            <h2>{projeto.name} </h2>
            <img src={projeto.image} alt={projeto.name}></img>
            <p> {projeto.description} </p>
            <a className="projeto-link"
            href={projeto.link} target="_blank" rel="noopener noreferrer">
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

export default Projetos;
