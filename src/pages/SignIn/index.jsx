import { Container, Form, Background, SignUp } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
    return (
        <Container>
            <Form>
                <div className="title">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                    <h2>Faça seu Login</h2>
                </div>

                <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                ></Input>

                <Button title="Entrar"></Button>
                <SignUp to="/register">Criar conta</SignUp>
            </Form>

            <Background></Background>
        </Container>
    );
}
