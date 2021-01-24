import styled from 'styled-components';

export const StyledKey = styled.div`
    position: relative;

    ${props => props['data-highlight'] === true && `
        ::after {
            position: absolute;
            font-family: monospace;
            content: '${props['data-shortcut']}';
            bottom: -30px;
            background: rgb(201,201,201);
            background: radial-gradient(circle, rgba(201,201,201,1) 0%, rgba(212,212,212,0) 28%, rgba(255,255,255,0.5) 53%, rgba(255,255,255,1) 85%, rgba(157,157,157,1) 100%);
            padding: 2px 6px;
            left: 0px;
            font-size: 14px;
            border: 1px solid #CCC;
            border-radius: 5px;
            color: #555;
            font-weight: bold;
            min-width: 30px;
            text-align: center;
            box-shadow: 0px 2px 1px 1px #CCC;
        }
    `}
`;
