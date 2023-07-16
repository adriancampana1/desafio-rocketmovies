import { Container, Form, Back } from './styles';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { MovieItem } from '../../components/MovieItem';
import { FiArrowLeft } from 'react-icons/fi';

export function Create() {
    const [movie_title, setMovieTitle] = useState('');
    const [movie_description, setMovieDescription] = useState('');

    const [tags, setTags] = useState([]);
    const [newLink, setNewLink] = useState('');

    const navigate = useNavigate();

    function handleAddLink() {
        setTags((prevState) => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveLink(deleted) {
        setTags((prevState) => prevState.filter((link) => link !== deleted));
    }

    async function handleNewNote() {
        if (!movie_title) {
            return alert('Insira um título.');
        }

        if (newLink) {
            return alert(
                'Você deixou uma tag no campo mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.'
            );
        }

        await api.post('/movies', {
            movie_title,
            movie_description,
            tags,
        });

        alert('Filme cadastrado com sucesso!');
        navigate('/');
    }

    return (
        <Container>
            <Header></Header>

            <main>
                <Form>
                    <header>
                        <Back to="/">
                            <FiArrowLeft></FiArrowLeft>Voltar
                        </Back>
                        <h1>Novo filme</h1>
                    </header>

                    <div className="two-box">
                        <div className="title-movie">
                            <Input
                                placeholder="Título"
                                onChange={(e) => setMovieTitle(e.target.value)}
                            ></Input>
                        </div>
                        <div className="avaliation-movie">
                            <Input placeholder="Sua nota (de 0 a 5)"></Input>
                        </div>
                    </div>

                    <Textarea
                        placeholder="Descrição"
                        onChange={(e) => setMovieDescription(e.target.value)}
                    ></Textarea>

                    <Section title="Marcadores">
                        <div className="tags">
                            {tags.map((link, index) => (
                                <MovieItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                ></MovieItem>
                            ))}
                            <MovieItem
                                isNew
                                placeholder="Nova Tag"
                                value={newLink}
                                onChange={(e) => setNewLink(e.target.value)}
                                onClick={handleAddLink}
                            ></MovieItem>
                        </div>
                    </Section>

                    <div className="two-buttons">
                        <Button title="Excluir filme"></Button>
                        <Button
                            title="Salvar alterações"
                            onClick={handleNewNote}
                        ></Button>
                    </div>
                </Form>
            </main>
        </Container>
    );
}
