import React from 'react';
import ReactDOM from 'react-dom/client';
import Main_Pag from './pages/Main_Pag';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Main_Pag />
    </BrowserRouter>
  // </React.StrictMode>
);

