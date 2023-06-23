import { Container, LinkToPreview } from './styles';
import { Tag } from '../Tag';

import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

export function Movie({ data, background, ...rest }) {
    return (
        <Container background={background} {...rest}>
            <LinkToPreview to="/preview/1">
                <h1>{data.title}</h1>

                <div>
                    <RiStarSFill></RiStarSFill>
                    <RiStarSFill></RiStarSFill>
                    <RiStarSFill></RiStarSFill>
                    <RiStarSFill></RiStarSFill>
                    <RiStarSLine></RiStarSLine>
                </div>
                <p>{data.shortDescription}</p>

                {data.tags && (
                    <footer>
                        {data.tags.map((tag) => (
                            <Tag key={tag.id} title={tag.name}></Tag>
                        ))}
                    </footer>
                )}
            </LinkToPreview>
        </Container>
    );
}
