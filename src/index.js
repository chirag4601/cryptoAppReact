import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);