import styled, { keyframes } from "styled-components";

const fillCircle = keyframes`

  0% {
      transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }

`;
export const CircleWrapper = styled.div`
    .circle-wrap {
        width: 150px;
        height: 150px;
        background: #717a8b;
        border-radius: 50%;
        border: 1px solid #717a8b;
        transform: rotate(90deg);
        .circle {
            .mask {
                width: 150px;
                height: 150px;
                position: absolute;
                border-radius: 50%;
                clip: rect(0px, 150px, 150px, 75px);
            }
            .fill {
                width: 150px;
                height: 150px;
                position: absolute;
                border-radius: 50%;
            }
        }
        .inside-circle {
            width: 122px;
            height: 122px;
            border-radius: 50%;
            background: black;
            line-height: 120px;
            text-align: center;
            margin-top: 14px;
            margin-left: 14px;
            position: absolute;
            z-index: 100;
            font-weight: 700;
            font-size: 2em;
        }
    }
    .mask {
        .fill {
            clip: rect(0px, 75px, 150px, 0px);
            background-color: #2ebd85;
        }
    }
    .mask.full {
        animation: fill ease-in-out 3s;
        transform: rotate(${(props: { fillVal: string }) => props.fillVal}deg);
    }
    .circle {
        .fill {
            animation: ${fillCircle} ease-in-out 3s;
            transform: rotate(${(props: { fillVal: string }) => props.fillVal}deg);
        }
    }
`;

export const ProgressCircle = styled.div`
    height: 74px;
    overflow: hidden;
    width: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 50px;
    &.miniLogo {
        width: 76px;
        height: 54px;
        bottom: 32px;
        .ant-progress-inner {
            .ant-progress-text {
                top: 60px;
                left: 28px;
                font-size: 12px;
            }
        }
    }
    .ant-progress-inner {
        position: unset !important;
        .ant-progress-text {
            color: #2ebd85;
            // transform: rotate(90deg);
            // top: 24px;
            // text-align: left;
            // font-size: 14px;
            // left: -20px;
            top: 115px;
            font-size: 14px;
            left: 42px;
            transform: rotateY(180deg);
        }
    }
`;

export const LobbySection = styled.div`
    position: relative;
    &:before {
        content: "";
        position: absolute;
        top: -15px;
        right: 0;
        width: 41px;
        height: 40px;
    }
`;
