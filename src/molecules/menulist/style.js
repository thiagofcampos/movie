import styled from 'styled-components';

export const MenuList = styled.div`
-webkit-align-self: center;
-ms-flex-item-align: center;
align-self: center;
display: flex;
widht: 100%;
justify-content: left;
max-width: 1020px;
padding: 15px 20px 0 20px;
width: 100%;

span {
    font-weight: 500;
    margin: 5px 15px;
    font-size: 16px;
    color: #b90000;
    text-transform: uppercase;
}

.button-menu {
    cursor: pointer;
    display: block;
    padding: 10px;
}

.button-menu:hover {
    background: #f2f2f2
}

a:first-child span{
    margin: 5px 0px;
}
`;
