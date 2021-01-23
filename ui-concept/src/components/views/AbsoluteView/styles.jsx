import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F4F4F4;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
`;

export const Container = styled.div`
    padding: 100px;

    flex: 1 1 auto;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;

    gap: 16px;
`;
