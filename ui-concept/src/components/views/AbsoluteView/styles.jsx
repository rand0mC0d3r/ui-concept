import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F9F9F9;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: stretch;
`;

export const CardsContainer = styled.div`
    padding: 40px;

    flex: 1 1 auto;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;

    gap: 16px;
`;

export const SidePanel = styled.div`
    background-color: #FFF;
    border: 1px dotted #CCC;
    align-self: stretch;
    flex: 0 0 25%;
`;

export const Container = styled.div`
    padding: 40px;

    flex: 1 1 auto;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-content: center;
    align-items: center;

    gap: 16px;
`;
