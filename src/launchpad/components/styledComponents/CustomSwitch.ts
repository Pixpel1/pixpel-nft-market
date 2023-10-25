import styled from "styled-components";

export const CustomSwitch = styled.div`
    .pixp_switch {
        width: 118px;
        height: 48px;
        &.rocket_switch {
            width: 81px;
            height: 30px;
            .ant-switch-handle {
                width: 26.228px;
                height: 26.25px;
            }
            &.ant-switch-checked {
                .ant-switch-handle {
                    inset-inline-start: calc(100% - 28px);
                }
            }
        }
        background-color: ${(props: { uncheckedColor?: string; checkedColor?: string }) =>
            props.uncheckedColor || "#f6465d"};
        &:hover {
            background-color: ${(props: { uncheckedColor?: string; checkedColor?: string }) =>
                props.uncheckedColor || "#f6465d"} !important;
        }
        &.ant-switch-checked {
            background-color: ${(props: { uncheckedColor?: string; checkedColor?: string }) =>
                props.checkedColor || "#2ebd85"};
            &:hover {
                background-color: ${(props: { uncheckedColor?: string; checkedColor?: string }) =>
                    props.checkedColor || "#2ebd85"} !important;
            }
            .ant-switch-handle {
                inset-inline-start: calc(100% - 44px);
            }
            .ant-switch-inner {
                .ant-switch-inner-checked {
                    margin-inline-start: 18px;
                    margin-inline-end: 0;
                }
            }
        }
        .ant-switch-handle {
            width: 41px;
            height: 42px;
            &::before {
                border-radius: 50%;
            }
        }
        .ant-switch-inner {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            .ant-switch-inner-unchecked {
                margin-top: -5px;
            }
        }
    }
    .game_switch {
        width: 90px;
        height: 48px;
        &.rocket_switch {
            width: 81px;
            height: 30px;
            .ant-switch-handle {
                width: 26.228px;
                height: 26.25px;
            }
            &.ant-switch-checked {
                .ant-switch-handle {
                    inset-inline-start: calc(100% - 28px);
                }
            }
        }
        background-color: ${(props: { uncheckedColor?: string; checkedColor?: string }) =>
            props.uncheckedColor || "#f6465d"};
        &:hover {
            background-color: ${(props: { uncheckedColor?: string; checkedColor?: string }) =>
                props.uncheckedColor || "#f6465d"} !important;
        }
        &.ant-switch-checked {
            background-color: ${(props: { uncheckedColor?: string; checkedColor?: string }) =>
                props.checkedColor || "#2ebd85"};
            &:hover {
                background-color: ${(props: { uncheckedColor?: string; checkedColor?: string }) =>
                    props.checkedColor || "#2ebd85"} !important;
            }
            .ant-switch-handle {
                inset-inline-start: calc(100% - 44px);
            }
            .ant-switch-inner {
                .ant-switch-inner-checked {
                    font-weight: 600;
                    font-size: 12px;
                    margin-inline-start: -20px;
                    margin-inline-end: 0;
                }
            }
        }
        .ant-switch-handle {
            width: 41px;
            height: 42px;
            &::before {
                border-radius: 50%;
            }
        }
        .ant-switch-inner {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin-left: 4px;
            .ant-switch-inner-unchecked {
                font-weight: 600;
                font-size: 12px;
                margin-top: -5px;
            }
        }
    }
`;
