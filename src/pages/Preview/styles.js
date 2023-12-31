import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 'header' 'content';

    > main {
        grid-area: content;
        overflow-y: scroll;

        padding: 64px 0;
    }
`;

export const Content = styled.div`
    padding: 0 123px;

    margin: 0 auto;
    overflow-y: scroll;
`;
