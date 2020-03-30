import styled from 'styled-components';

export const Image = styled.div`
    background: url(${(props) => props.url}) no-repeat center top;
    background-size: ${(props) => props.backgroundSize};
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    background-color: ${(props) => props.backgroundColor};
`;
