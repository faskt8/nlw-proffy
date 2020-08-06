import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars2.githubusercontent.com/u/51465941?s=460&u=d7e0ced648c5107a82cf28e6e85b748eb9323355&v=4" 
      alt="Fabricio Fernandes"/>
      <div>
        <strong>Fabricio Fernandes</strong>
        <span>História</span>
      </div>
    </header>

    <p>
    Systems analysis and development 
    <br/><br/>
    student at the Federal Institute of Paraná
    </p>

    <footer>
      <p>
        Preço/Hora

        <strong>R$ 90,00</strong>
      </p>

      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
         Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;