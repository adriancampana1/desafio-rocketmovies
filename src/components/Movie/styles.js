import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ROSE};

    border: none;
    border-radius: 10px;

    padding: 22px;

    margin-bottom: 16px;
`;

export const LinkToPreview = styled(Link)`
    width: 100%;

    > div {
        display: flex;
        align-items: center;
        justify-content: start;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            width: 25px;
            margin: 10px 0 10px -5px;
        }
    }

    > p {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
        text-align: start;
    }

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > footer {
        width: 100%;
        display: flex;

        margin-top: 24px;
    }
`;
