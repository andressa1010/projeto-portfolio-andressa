import React from "react";
import Menu from "../components/menu";

const Contato = () => {
  return (
    <>
      <Menu />

      <div className="container-text">
        <p>
          Obrigada por visitar meu portfólio! Fico muito feliz em poder
          compartilhar meus projetos e experiências Cada linha de código e cada
          desafio enfrentado me trouxeram até aqui, e é com muito orgulho que
          mostro um pouco do que sou capaz de criar. Se você gostou do meu
          trabalho ou quer saber mais sobre como podemos colaborar, entre em
          contato. Vamos construir algo incrível juntos!"
        </p>
        <img className="img-andressa" src="/2024092809560212.png"></img>
      </div>

    




      <div className="whatsapp">
       <a href="https://wa.me/5511986414262" target="_blank">
       <img src="/whatsapp.png"></img>
       </a>
     </div>
     
    </>
  );
};

export default Contato;
