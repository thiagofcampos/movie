import styled from 'styled-components';

export const CardImage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;

    .description {
        -webkit-box-orient: vertical;
        display: -webkit-box;
        width: 100%;
        white-space: break-spaces;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 144px;
        -webkit-line-clamp: 9;
    }
`;
