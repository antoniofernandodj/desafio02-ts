
import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'

import { LoginButton } from './LoginButton'
import { useState } from 'react'


interface ICard {
  id: string,
  paragraph: string
}

export function Card({id, paragraph}: ICard) {

  const [email, setEmail] = useState('')

  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' id={id}>
    <Center>
      <h1>{paragraph}</h1>
    </Center>
    <Input
      placeholder="email"
      onChange={(e) => {setEmail(e.target.value)}}
      />
    <Input placeholder="password" />
    <Center>
      <LoginButton username={email} />
    </Center>
  </Box>
  )
}