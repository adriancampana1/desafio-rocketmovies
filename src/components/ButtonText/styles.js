import { styled } from 'styled-components';

export const Container = styled.a`
    width: 100%;

    font-size: 16px;
    color: ${({ theme, isActive }) =>
        isActive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};
    background: none;

    border: none;

    display: flex;
    align-items: center;
    gap: 8px;
`;
