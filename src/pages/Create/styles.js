import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 'header' 'content';

    > main {
        grid-area: content;

        overflow-y: auto;
    }

    .tags {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        border: none;
        border-radius: 8px;

        padding: 16px 16px 8px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;

export const Form = styled.form`
    margin: 38px auto;
    padding: 0 123px;
    width: 100%;

    > header {
        display: flex;
        gap: 24px;
        flex-direction: column;
        align-items: start;

        margin-bottom: 36px;

        a {
            font-size: 20px;
        }
    }

    > .two-box {
        display: flex;
        gap: 40px;

        margin-bottom: 20px;

        > div {
            width: 100%;
        }
    }

    > Section {
        margin-top: 40px;
    }

    > .two-buttons {
        margin-top: 40px;

        display: flex;
        gap: 40px;

        > Button {
            width: 50%;
        }

        > Button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Back = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${({ theme }) => theme.COLORS.PINK};

    cursor: pointer;
`;
