import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>App To-DO list</h1>
      <p>
        Простое приложение ToDo list написанное на <i>React + TypeScript</i>.
      </p>
      <p> Практика при изучении TypeScript.</p>
      <button className='btn' onClick={() => history.push('/')}>
        Обратно к списку дел
      </button>
    </>
  );
};
