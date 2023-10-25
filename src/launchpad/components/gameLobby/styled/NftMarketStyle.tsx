import styled from "styled-components";

export const NftMarketStyled = styled.div`
    position: relative;
    .scrollWrapper {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
        padding-bottom: 30px;
        scrollbar-color: #474e58 #0095c8;
        scroll-behavior: smooth;
        scrollbar-width: thin;
        scrollbar-color: #474e58 #0095c8;

        &::-webkit-scrollbar {
            width: 8px;
            height: 10px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 20px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #0095c8;
            border-radius: 10px;
            border: 1px solid #474e58;
        }
    }
    &::after {
        content: "";
        position: absolute;
        z-index: -1;
        width: calc(100% - 10px);
        height: 5px;
        left: 5px;
        bottom: 0;
        border-radius: 20px;

        background: #666;
    }
`;
