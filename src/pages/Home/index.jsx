import { useState, useEffect } from 'react';

import { api } from '../../services/api';

import { Container, Content, Title, NewMovie } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Movie } from '../../components/Movie';
import { Section } from '../../components/Section';

import { FiPlus } from 'react-icons/fi';

export function Home() {
    const [tags, setTags] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags');
            setTags(response.data);
        }
        fetchTags();
    }, []);

    return (
        <Container>
            <Header></Header>

            <Title>
                <h1>Meus filmes</h1>
                <NewMovie to="/create">
                    <FiPlus></FiPlus>Adicionar filme
                </NewMovie>
            </Title>
            <Content>
                <Section>
                    <Movie
                        data={{
                            title: 'React',
                            shortDescription: `Pragas nas colheitas fizeram a civilização humana regredir para
                            uma sociedade agrária em futuro de data desconhecida. Cooper,
                        ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
                        filha de dez anos de Cooper, acredita que seu quarto está
                    assombrado por um fantasma que tenta se comunicar com ela. Pai e
                    filha descobrem que o "fantasma" é uma inteligência desconhecida
                    que está enviando mensagens codificadas através de radiação
                    gravitacional, deixando coordenadas em binário que os levam até
                    uma instalação secreta da NASA liderada pelo professor John
                    Brand.`,
                            tags: [
                                {
                                    id: '1',
                                    name: 'react',
                                },
                                { id: '2', name: 'rocketseat' },
                            ],
                        }}
                    ></Movie>
                </Section>
            </Content>
        </Container>
    );
}
