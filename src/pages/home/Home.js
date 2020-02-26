import React from 'react';
import './Home.css';
import fone from './fone.png';


function Home() {
  return (
    <div className="Home grey darken-4">

      <img src={fone} className="fone" alt="Imagem de fone de ouvido" ></img>
      <a href="/player" className="waves-effect  btn green darken-3 "><i className="left material-icons">account_circle</i>IR PARA O PLAYER</a>
    </div>
  );
}

export default Home;
