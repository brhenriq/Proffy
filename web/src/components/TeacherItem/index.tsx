import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/60053139?s=460&v=4" alt="perfil"/>
            <div>
              <strong>Mussum Ipsum</strong>
              <span>cacilds</span>
            </div>
          </header> 
          <p>
          Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. 
          <br /><br />
          Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. 
          Aenean sit amet nisi. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
          </p>       

          <footer>
            <p>
              Preço/hora 
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
          </footer>  
        </article> 
  );
}

export default TeacherItem;