import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    console.log = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login('Antonio')
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo, Antonio!')
    })
})
