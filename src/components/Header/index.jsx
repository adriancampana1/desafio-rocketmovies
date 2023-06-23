import { Input } from '../Input';
import { Container, Profile, Title } from './styles';

import { FiSearch } from 'react-icons/fi';

export function Header() {
    return (
        <Container>
            <Title to="/">
                <h1>RocketMovies</h1>
            </Title>
            <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            <Profile to="/profile">
                <div>
                    <strong>Adrian Campana</strong>
                    <span>Sair</span>
                </div>
                <img
                    src="https://github.com/adriancampana1.png"
                    alt="Imagem do usuário"
                />
            </Profile>
        </Container>
    );
}
