import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../pages/containers/app';



const homeContainer = document.getElementById('home-container')


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, homeContainer);

