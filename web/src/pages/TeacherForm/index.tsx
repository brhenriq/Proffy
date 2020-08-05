import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
            <Input
              label="Nome Completo"
              name="name"
            />

            <Input
              label="Avatar"
              name="avatar"
            />

            <Input
              label="Whatsapp"
              name="whatsapp"
            />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
            <Input
              label="Matéria"
              name="subject"
            />

            <Input
              label="Custo por aula"
              name="cost"
            />
        </fieldset>

        <fieldset>
          <legend>Horários disponíveis</legend>
            <Input
              label="Dia da semana"
              name="week_day"
            />

            <Input
              label="Das"
              name="from"
              type="time"
            />

            <Input
              label="Até"
              name="to"
              type="time"
            />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;