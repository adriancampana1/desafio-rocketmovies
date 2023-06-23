import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar, Title, Back } from './styles';

export function Profile() {
    return (
        <Container>
            <Title>
                <Back to="/">
                    <FiArrowLeft></FiArrowLeft>Voltar
                </Back>
            </Title>

            <Form>
                <Avatar>
                    <img
                        src="https://github.com/adriancampana1.png"
                        alt="imagem do usuário"
                    />

                    <label htmlFor="avatar">
                        <FiCamera></FiCamera>
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser}></Input>
                <Input placeholder="E-mail" type="text" icon={FiMail}></Input>

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                ></Input>
                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}
                ></Input>

                <Button title="Salvar"></Button>
            </Form>
        </Container>
    );
}
