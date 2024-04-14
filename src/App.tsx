import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Card } from "./components/Card";
import { useState } from 'react';
import { Header } from './components/Header/Header';



function App() {

  return (
    <ChakraProvider>
      <Header></Header>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Card
          paragraph="Faça o login"
          id='login-form'
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
