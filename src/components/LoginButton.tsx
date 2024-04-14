
import { 
  Button
} from '@chakra-ui/react'

import { login } from '../services/login'

interface ILoginButton {
  username: string
}

export function LoginButton({username}: ILoginButton) {
  return(
    <Button
      onClick={() => login(username)}
      colorScheme='teal'
      size='sm'
      width='100%'
      marginTop='5px'>
      Button
    </Button>
  )
}
