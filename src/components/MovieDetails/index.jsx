import { Container, Title, Author, Profile, Back } from './styles';

import { Tag } from '../Tag';
import { ButtonText } from '../ButtonText';

import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
import { FiArrowLeft, FiClock } from 'react-icons/fi';

export function MovieDetails({ data, background, ...rest }) {
    return (
        <Container background={background} {...rest}>
            <Back to="/">
                <FiArrowLeft></FiArrowLeft>Voltar
            </Back>

            <Title>
                <h1>{data.title}</h1>

                <div>
                    <RiStarSFill></RiStarSFill>
                    <RiStarSFill></RiStarSFill>
                    <RiStarSFill></RiStarSFill>
                    <RiStarSFill></RiStarSFill>
                    <RiStarSLine></RiStarSLine>
                </div>
            </Title>

            <Author>
                <Profile>
                    <img src={data.avatar} alt="Imagem do usuário" />
                    {data.author}
                </Profile>
                <div>
                    <FiClock></FiClock>
                    {data.postTime}
                </div>
            </Author>

            {data.tags && (
                <footer>
                    {data.tags.map((tag) => (
                        <Tag key={tag.id} title={tag.name}></Tag>
                    ))}
                </footer>
            )}

            <p>{data.description}</p>
        </Container>
    );
}
