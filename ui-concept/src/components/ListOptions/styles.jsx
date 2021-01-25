import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const StyledButton = styled(IconButton)`
    padding: 20px;
    border: 2px solid blue;
`;

export const Wrapper = styled.div`
    width:100%;
    background-color: #FFF;
    border: 1px dotted #CCC;
    padding: 10px;
    max-height: 50%;
    transition: all 335ms;

    ${props => props['data-highlight'] ? `
        box-shadow: 0px 0px 7px 7px #AAA;
    ` : `

        &: hover {
            transition: all 550ms;
            box-shadow: 0px 0px 3px 3px #CCC;
        }
    `}


`;


export const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;
`;