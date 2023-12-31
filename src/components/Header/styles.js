import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 123px;

    span {
        text-align: center;
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        cursor: pointer;

        margin-left: 15px;
    }

    span:hover {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-left: 64px;

    > img {
        width: 56px;
        height: 56px;

        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        line-height: 24px;

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-align: end;
        }
    }
`;

export const Title = styled(Link)`
    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 64px;
    }
`;
