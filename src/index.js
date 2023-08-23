import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


 // code for Patient DASHBOARD
import App from './App';
import { ContextProvider } from './contexts/PatientContext/ContextProvider';

ReactDOM.render(
  
  <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
</React.StrictMode>,
  
  document.getElementById('root'),
);



/*
    // code for DOCTOR DASHBOARD
import App2 from './App2';
import { ContextProvider } from './contexts/DoctorContext/DocContextProvider';
 ReactDOM.render(
  
  <React.StrictMode>
  <ContextProvider>
    <App2 />
  </ContextProvider>
</React.StrictMode>,
  
  document.getElementById('root'),
);

*/
