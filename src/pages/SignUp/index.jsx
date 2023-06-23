import { Container, Form, Background, Signin } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

export function SignUp() {
    return (
        <Container>
            <Form>
                <div className="title">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                    <h2>Crie sua conta</h2>
                </div>

                <Input placeholder="Usuário" type="text" icon={FiUser}></Input>
                <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                ></Input>

                <Button title="Cadastrar conta"></Button>
                <Signin to="/">
                    <FiArrowLeft></FiArrowLeft>Fazer login
                </Signin>
            </Form>

            <Background></Background>
        </Container>
    );
}
