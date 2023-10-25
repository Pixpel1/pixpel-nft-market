import styled from "styled-components";

export const ProjectContainer = styled.div`
    .projectContainer {
        max-height: 1500px;
        overflow-y: scroll;
        direction: ${(props: { ScrollDirection?: boolean }) => (props.ScrollDirection ? "rtl" : "")};
        scroll-behavior: smooth;
        scrollbar-width: thin;
        scrollbar-color: #474e58 #0095c8;
        &::-webkit-scrollbar {
            width: 11px;
        }
        &::-webkit-scrollbar-track {
            background: #474e58;
            border-radius: 20px;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #0095c8;
            border-radius: 14px;
            border: 0.5px solid #474e58;
        }
        .gridContainer {
            direction: ${(props: { ScrollDirection?: boolean }) => (props.ScrollDirection ? "ltr" : "")};
        }
    }
`;
