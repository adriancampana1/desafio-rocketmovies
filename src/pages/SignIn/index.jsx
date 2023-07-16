import { Container, Form, Background, SignUp } from './styles';

import { useState } from 'react';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <div className="title">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                    <h2>Faça seu Login</h2>
                </div>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                ></Input>

                <Button title="Entrar" onClick={handleSignIn}></Button>
                <SignUp to="/register">Criar conta</SignUp>
            </Form>

            <Background></Background>
        </Container>
    );
}
