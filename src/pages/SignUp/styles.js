import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';
import { Link } from 'react-router-dom';
export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: start;

    .title {
        > h1 {
            font-size: 48px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        > p {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        > h2 {
            font-size: 24px;
            margin: 48px 0;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: opacity(0.3);
`;

export const Signin = styled(Link)`
    width: 100%;

    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    text-align: center;
`;
