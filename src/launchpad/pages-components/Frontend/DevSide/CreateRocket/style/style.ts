import styled from "styled-components";

export const CreateRocket = styled.div`
    .ant-form-item {
        .ant-form-item-explain > * {
            color: #2ebd85;
        }
        .ant-form-item-explain {
            &#startDate_help,
            &#endDate_help,
            #pixp_amount_help {
                .ant-form-item-explain-error {
                    color: #2ebd85;
                    &:nth-last-of-type(1) {
                        display: none;
                    }
                }
            }
        }
        .ant-input-number-status-error {
            border-color: #0196c9;
        }
        .ant-input-number-handler-wrap {
            display: none;
        }
        &:first-child {
            margin-bottom: 5px;
        }
        .ant-form-item-label {
            label {
                font-size: 30px;
                font-weight: 600;
                color: #fff;
            }
        }
        .ant-form-item-control {
            .ant-input,
            .ant-input-number-input {
                font-size: 20px;
                font-weight: 500;
                background-color: #29313c;
                padding: 11px 14px;
                border-radius: 5px;
                color: white;
                width: 100%;
                &:-internal-autofill-selected {
                    background-color: #29313c !important;
                }
                &:focus {
                    box-shadow: unset;
                }
                &:not(.ant-input-status-error) {
                    border: unset;
                }
                &::placeholder {
                    color: #717a8b;
                }
            }
            .ant-input:not(textarea),
            .ant-input-number-input:not(textarea) {
                height: 55px;
            }
            .ant-input-number {
                width: 100%;
                background: unset;
                box-shadow: unset !important;
                &.stepOne {
                    .ant-input-number-input {
                        background-color: #37404c;
                    }
                }
                .ant-input-number-input {
                    padding: 20px 15px;
                    color: white;

                    &::placeholder {
                        color: #717a8b;
                    }
                }
                &:not(.ant-input-number-status-error) {
                    border: unset;
                }
            }
        }
        .ant-radio-wrapper {
            .ant-radio {
                .ant-radio-inner {
                    background-color: transparent;
                    border-color: #717a8b;
                }
            }
            &.ant-radio-wrapper-checked {
                .ant-radio-inner {
                    border-color: #0196c9;
                    &:after {
                        background-color: #0196c9;
                        transform: scale(0.575);
                    }
                }
                span {
                    &.ant-radio + * {
                        color: #0196c9;
                    }
                }
            }
            span {
                &.ant-radio + * {
                    font-size: 20px;
                }
            }
        }
        .ant-input-affix-wrapper {
            background-color: #29313c;
            border-radius: 5px;
        }
        .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-status-error) {
            border: unset;
        }
    }

    .custom-datepicker {
        &.ant-picker-status-error {
            background-color: #37404c !important;
            border: 1px solid #ff4d4f;
        }
        .ant-picker-input {
            input {
                color: white;
                font-size: 20px;
                font-weight: 500;
                &::placeholder {
                    color: #717a8b;
                }
            }
            .ant-picker-clear {
                font-size: 30px;
                background: #0095c8;
            }
        }
    }
    .datepicker-popup {
        .ant-picker-panel-container {
            background: unset;
        }
    }
    .ant-picker-dropdown.datepicker-popup {
        .ant-picker-panel-container {
            background: #37404c;
        }
        .ant-picker-header {
            align-items: center;

            .ant-picker-header-super-prev-btn,
            .ant-picker-header-super-next-btn {
                display: none;
            }
            .ant-picker-header-prev-btn,
            .ant-picker-header-next-btn {
                background-color: #0196c9;
                border-radius: 100%;
                width: 24px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .ant-picker-body {
            thead {
                th {
                    color: #0196c9;
                    font-weight: 400;
                    text-transform: uppercase;
                }
            }
            .ant-picker-cell-disabled {
                opacity: 0.5;
            }
            .ant-picker-cell-selected {
                .ant-picker-cell-inner {
                    background-color: #0196c9;
                }
            }
            .ant-picker-cell-today {
                .ant-picker-cell-inner {
                    &::before {
                        border: 1px solid #0196c9 !important;
                    }
                }
            }
        }
        .ant-picker-time-panel {
            .ant-picker-time-panel-cell {
                .ant-picker-time-panel-cell-inner {
                    color: white;
                }
                &.ant-picker-time-panel-cell-selected {
                    .ant-picker-time-panel-cell-inner {
                        background-color: #0196c9;
                    }
                }
            }
        }
        .ant-picker-footer {
            .ant-btn-primary {
                background-color: #0196c9;
            }
        }
    }

    .rocketSteps {
        .ant-steps-item {
            position: relative;
            &:nth-of-type(1) {
                top: 16%;
                top: ${(props: { currentStep: number }) => (props.currentStep === 1 ? "0" : "16%")};
                .ant-steps-item-tail {
                    height: ${(props: { currentStep: number }) =>
                        props.currentStep === 1 ? "100%" : props.currentStep === 2 ? "88%" : "140%"};
                }
            }
            &:nth-of-type(2) {
                top: ${(props: { currentStep: number }) => (props.currentStep === 2 ? "10%" : "29% ")};
                .ant-steps-item-tail {
                    height: 78%;
                }
            }
            &:nth-of-type(3) {
                top: 22%;
            }
        }
        .ant-steps-item-icon {
            width: auto;
        }
        .ant-steps-item-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .ant-steps-item-tail {
                inset-inline-start: 1px !important;
                right: 18px;
                left: 0;
                margin: auto;
                padding: 272px 0 6px !important;
                &:after {
                    background-color: #717a8b !important;
                }
            }
        }
    }

    .custom-select {
        .ant-select-selector {
            background-color: #37404c;
            border: unset;
            box-shadow: unset !important;
            .ant-select-selection-item {
                color: #ffffff;
                font-size: 20px;
                text-transform: capitalize;
                font-weight: 500;
            }
            &:focus-visible {
                border: unset !important;
                outline: unset;
            }
        }
    }
    .custom-select-dropdown {
        &.ant-select-dropdown {
            background-color: #37404c !important;
        }
        .rc-virtual-list {
        }
    }
`;
