import { styled } from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    height: 48px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;

    margin-top: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
    }

    svg {
        display: flex;
        align-items: center;
        margin-right: 10px;
    }
`;
