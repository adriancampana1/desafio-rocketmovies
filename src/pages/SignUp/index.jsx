import { Container, Form, Background, Signin } from './styles';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

export function SignUp() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos!');
        }

        // envia os dados inseridos pro banco de dados
        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso');
                navigate('/');
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível cadastrar o usuário.');
                }
            });
    }

    return (
        <Container>
            <Form>
                <div className="title">
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                    <h2>Crie sua conta</h2>
                </div>

                <Input
                    placeholder="Usuário"
                    type="text"
                    icon={FiUser}
                    onChange={(e) => setName(e.target.value)}
                ></Input>
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

                <Button title="Cadastrar conta" onClick={handleSignUp}></Button>
                <Signin to="/">
                    <FiArrowLeft></FiArrowLeft>Fazer login
                </Signin>
            </Form>

            <Background></Background>
        </Container>
    );
}
