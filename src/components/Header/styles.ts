import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 0 1rem 10rem; //1rem = font-size do root (desktop 16px)
    display: flex;
    align-items: center;
    justify-content: space-between;
`;