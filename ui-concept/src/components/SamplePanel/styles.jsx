import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const StyledButton = styled(IconButton)`
    padding: 50px;
    border: 2px solid blue;
`;

export const Wrapper = styled.div`
    width:100%;
    background-color: #FFF;
    border: 1px dotted #CCC;
    padding: 10%;
    max-height: 50%;
    transition: all 335ms;

    &: hover {
        transition: all 550ms;
        box-shadow: 0px 0px 3px 3px #CCC;
    }
`;
