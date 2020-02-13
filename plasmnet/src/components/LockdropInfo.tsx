import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { BlogLinks } from "../data/links";
import { customMedia } from "../styles/globalStyle";
import { theme } from "../styles/theme";

interface Props {}

const LockdropInfo: React.FC<Props> = () => {
  return (
    <LockdropInfoContainer>
      <TitleH1>Lockdrop Information</TitleH1>
      <div className="expired">
        <ExpiredH2>Expired:</ExpiredH2>
        <div className="time">
          <div>
            <HeaderTimeSpan>7</HeaderTimeSpan>
            <p>Days</p>
          </div>
          <div>
            <HeaderTimeSpan>12</HeaderTimeSpan>
            <p>Hours</p>
          </div>
          <div>
            <HeaderTimeSpan>10</HeaderTimeSpan>
            <p>Min</p>
          </div>
          <div>
            <HeaderTimeSpan>25</HeaderTimeSpan>
            <p>Sec</p>
          </div>
        </div>
      </div>
      <div className="total">
        <AmountH2>Total Amount Lock:</AmountH2>
        <TotalAmountH2>888</TotalAmountH2>
        <span className="currency">ETH</span>
      </div>
      <div className="reference">
        <Icon name="attention" className="icon" />
        <a
          href={BlogLinks.lockdropIntroduction}
          rel="noopener noreferrer"
          target="_blank"
        >
          What is the Lockdrop?
        </a>
      </div>
    </LockdropInfoContainer>
  );
};

export default LockdropInfo;

const LockdropInfoContainer = styled.div`
  width: 630px;
  height: 300px;
  display: grid;
  align-items: center;
  background-color: silver;
  border: 4px solid ${theme.colors.black};
  border-radius: 10px;
  padding: 20px 10px;

  ${customMedia.lessThan("tabletSmall")`
      width: 558px;
      /* height: 250px;
      border: 3px solid ${theme.colors.black};
      margin 0;
      padding: 10px 4px; */
  `}
  ${customMedia.lessThan("mobile")`
      width: 330px;
      height: 250px;
      border: 3px solid ${theme.colors.black};
      margin 0;
      padding: 10px 4px;
  `}

  .expired, .total {
    display: grid;
    align-items: center;
    grid-template-columns: 60% 30% 30%;
    padding: 8px 6%;
    height: 42px;
    ${customMedia.lessThan("tabletSmall")`
      grid-template-columns: 70% 15% 15%;
      padding: 0 4px;
    `}
  }
  .expired {
    grid-template-columns: 50% 50%;
    padding-bottom: ${customMedia.lessThan("tabletSmall")`
      grid-template-columns: 55% 45%;
    `};
  }

  .currency {
    font-size: 18px;
  }
  .warning {
    height: 8px;
    padding-bottom: 6px;
    color: ${theme.colors.red};
    font-size: 14px;
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;
    ${customMedia.lessThan("tabletSmall")`
      font-size: 8px;
    `}
  }
  .time {
    display: flex;
    justify-content: space-around;
    text-align: center;
    p {
      ${customMedia.lessThan("mobile")`
      font-size: 12px;
    `}
    }
  }
  .reference {
    margin-top: 30px;
    .icon {
      margin-left: 34px;
      font-size: 16px;
      ${customMedia.lessThan("tabletSmall")`
      margin-left: 4px;
      font-size: 14px;
    `}
    }
    a {
      margin-left: 10px;
      font-size: 16px;
      color: ${theme.colors.black};
      cursor: pointer;
      ${customMedia.lessThan("tabletSmall")`
        margin-left: 4px;
        font-size: 14px;
      `}
      &:hover {
        border-bottom: double 2px ${theme.colors.blue};
      }
    }
  }
`;

const TitleH1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  ${customMedia.lessThan("mobile")`
    font-size: 24px;
  `}
`;

const ExpiredH2 = styled.h2`
  margin-bottom: 0px;
  ${customMedia.lessThan("mobile")`
    font-size: 18px;
  `}
`;
const AmountH2 = styled(ExpiredH2)``;

const TotalAmountH2 = styled.h2`
  margin: 0px;
  padding: 0px;
  ${customMedia.lessThan("mobile")`
    font-size: 18px;
  `}
`;

const HeaderTimeSpan = styled.span`
  font-weight: bold;
  font-size: 22px;
  opacity: 0.9;
  ${customMedia.lessThan("mobile")`
    font-size: 18px;
  `}
`;
