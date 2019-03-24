import React from 'react';
import ReactDOM from 'react-dom';

const body = document.getElementsByTagName('body')[0];
const appContainer = document.createElement('div');
appContainer.id = 'app';
body.appendChild(appContainer);
ReactDOM.render(
  <div>It works!</div>,
  document.getElementById('app'),
);
