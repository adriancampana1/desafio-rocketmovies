import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 105px 128px auto;
    grid-template-areas: 'header' 'title' 'content';
`;

export const Title = styled.div`
    grid-area: title;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto 40px;
    padding: 0 123px;
`;

export const Content = styled.div`
    padding: 0 123px;

    overflow-y: auto;
`;

export const NewMovie = styled(Link)`
    grid-area: newnote;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 32px;
    border-radius: 8px;

    > svg {
        margin-right: 8px;
    }
`;
