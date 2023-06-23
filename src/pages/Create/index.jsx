import { Container, Form, Back } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { MovieItem } from '../../components/MovieItem';
import { FiArrowLeft } from 'react-icons/fi';

export function Create() {
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
                            <Input placeholder="Título"></Input>
                        </div>
                        <div className="avaliation-movie">
                            <Input placeholder="Sua nota (de 0 a 5)"></Input>
                        </div>
                    </div>

                    <Textarea placeholder="Descrição"></Textarea>

                    <Section title="Marcadores">
                        <div className="tags">
                            <MovieItem value="https://rocketseat.com.br"></MovieItem>
                            <MovieItem
                                isNew
                                placeholder="Novo Link"
                            ></MovieItem>
                        </div>
                    </Section>

                    <div className="two-buttons">
                        <Button title="Excluir filme"></Button>
                        <Button title="Salvar alterações"></Button>
                    </div>
                </Form>
            </main>
        </Container>
    );
}
