import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const TopMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-itens: center;
    flex-direction: column;
    background: #fff;

    .container-menu {
        align-self: center;
        display: flex;
        widht: 100%;
        justify-content: space-between;
        max-width: 1020px;
        padding: 15px 20px 0 20px;
        width: 100%;
    }
    
`;

export const Contato = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2;


    &:hover {
        opacity: 0.7;
        color: #c3c3c3
    }

    div {
        text-align: right;
        margin-right: 15px;
    }

    strong {
        display: block;
        color: #000;
    }

    span {
        font-size: 12px;
        color: #000;
    }
`;
