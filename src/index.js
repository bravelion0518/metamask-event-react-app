import React from 'react';
import ReactDOM from 'react-dom';
import  { MetamaskStateProvider } from "use-metamask";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MetamaskStateProvider>
      <App />
    </MetamaskStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
