/*import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import { system } from './theme/system.js'  
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './theme/system.js';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
