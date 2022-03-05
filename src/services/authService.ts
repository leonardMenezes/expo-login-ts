import { AuthData } from '../contexts/Auth'

async function signIn(email:string, password: string): Promise<AuthData> {
    
    return new Promise((resolve, reject)=>{
        //simulando API
        setTimeout(() => {
            password === '123456' ? resolve({
                token: 'fake-token',
                email,
                name: 'Leonardo Menezes'
            }): reject(new Error('credenciais inválidas'))
            
        }, 500);
    })
}

export const autService = {signIn}