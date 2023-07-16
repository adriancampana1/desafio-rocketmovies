import { Input } from '../Input';
import { Container, Profile, Title } from './styles';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

import { FiSearch } from 'react-icons/fi';

export function Header() {
    const { signOut, user } = useAuth();
    const avatarURL = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceholder;
    return (
        <Container>
            <Title to="/">
                <h1>RocketMovies</h1>
            </Title>
            <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                </div>
                <img src={avatarURL} alt="Imagem do usuário" />
            </Profile>
            <span onClick={signOut}>Sair</span>
        </Container>
    );
}
