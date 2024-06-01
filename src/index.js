import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App'; // Importa il tuo componente App
import reportWebVitals from './reportWebVitals';
import './index.css'; // Eventuali file di stile globali

// Definisci un tema personalizzato per Chakra UI
const theme = extendTheme({
  // Aggiungi qui le personalizzazioni del tema
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals(); 
