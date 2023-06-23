import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.NONE};

    border: none;
    border-radius: 10px;
    padding: 22px;
    margin: 48px auto 16px;

    > p {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
        text-align: start;

        margin-top: 40px;
    }

    > footer {
        width: 100%;
        display: flex;

        margin-top: 24px;
    }
`;

export const Title = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: start;

    margin: 24px 0;

    > h1 {
        text-align: left;
        font-weight: 700;
        font-size: 24px;

        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > div {
        display: flex;
        align-items: center;

        margin: 0 20px;
        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            width: 22px;
            height: 22px;
        }
    }
`;

export const Author = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.WHITE};

    > div {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    margin-right: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > img {
        width: 18px;
        height: 18px;

        margin-right: 3px;

        border-radius: 50%;
    }
`;

export const Back = styled(Link)`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 10px;

    color: ${({ theme }) => theme.COLORS.PINK};
`;
