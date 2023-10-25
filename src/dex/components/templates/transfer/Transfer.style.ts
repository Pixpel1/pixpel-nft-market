import Container from "@dex/components/atoms/container/Container";
import Text from "@dex/components/atoms/text/text";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
    padding: 27px 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const FirstRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    gap: 50px;
`;

export const SecondRow = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 100%;
    background: #37404c;
    border-radius: 5px;
    justify-content: space-between;
    padding: 15px 22px;
`;

export const DropdownButton = styled.button`
    position: relative;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: none;
    padding: 0;
`;

export const MaxGapRow = styled.div<{ input?: boolean }>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > :first-child {
        ${({ input }) => (input ? "width: 100%" : "cursor: pointer")};
    }
`;

export const CoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    @media only screen and (max-width: 540px) {
        width: 100%;
        max-width: 100%;
    }
`;

export const CoinSelect = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #37404c;
    height: auto;
    // min-height: 91px;
    width: 100%;
    padding: 13px 22px;
    border-radius: 5px;
`;

export const CoinPicker = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Coin = styled.div`
    display: flex;
    align-items: center;
    // margin-bottom: 13px;
`;

export const OrderText = styled(Text)`
    margin-bottom: 10px;
    color: white;
    margin-left: 5px;
`;

export const StyledCoinText = styled(Text)`
    color: white;
    text-transform: uppercase;
    margin-left: 7px;
`;

export const SwapLink = styled.a`
    position: absolute;
    top: calc(50% + 13px);
    left: 50%;
    transform: translate(-50%, -50%);
    height: 53px;
    width: 53px;
    display: block;
    background: #37404c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    cursor: pointer;
    @media only screen and (max-width: 540px) {
        top: 137.5px;
    }
`;

export const StyledButtonShine = styled.img`
    position: absolute;
    right: -12px;
    bottom: -13px;
`;

export const Dropdown = styled.div`
    position: relative;
    padding-left: 10px;
    cursor: pointer;
`;

export const DropdownList = styled.div<{ open: boolean }>`
    position: absolute;
    top: 100%;
    left: 0px;
    box-shadow: 0px 6px 10px #00000014;
    border-radius: 5px;
    background-color: #00000098;
    z-index: 150;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s all;
    max-height: 156px;
    overflow: auto;
    & > * {
        width: 100%;
        cursor: pointer;
        padding: 8px 16px;
        padding-left: 8px;
        margin: 0;
        transition: 0.2s all;

        &:hover {
            background-color: #000000;
        }
    }

    ${({ open }) =>
        open &&
        `
  opacity: 1;
  pointer-events: all;
  `}
`;

export const LinkWrapper = styled.a`
    display: block;
    margin-top: 32px;
    user-select: none;
    background-color: #29313c;
    padding: 10px 21px;
    border-radius: 13px;

    &[hidden] {
        visibility: hidden;
        position: relative;
        left: -9999px;
    }

    @media only screen and (max-width: 1050px) {
        position: relative;
        width: fit-content;
    }
`;

export const StyledWalletDisplay = styled.div<{
    copied: boolean;
}>`
    padding: 4px 8px;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;

    &::before {
        content: "Copied!";
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
    ${({ copied }) =>
        copied &&
        `&::before {
  opacity: 1;
}`}
`;
