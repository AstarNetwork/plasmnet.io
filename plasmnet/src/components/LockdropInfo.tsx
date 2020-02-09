import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { customMedia } from "../styles/globalStyle";

interface Props {}

const LockdropInfo: React.FC<Props> = () => {
  const [msg, setMsg] = useState("");

  const isNotContainString = (
    value: string,
    setMsg: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    const valueArray = value.split("");

    for (const value of valueArray) {
      if (/^[^.0-9]*$/.test(value)) {
        setMsg("Please enter number only");
        return;
      }
    }
    setMsg("");
    return;
  };

  return (
    <LockdropInfoContainer>
      <TitleH1>Lockdrop Information</TitleH1>
      <div className="expired">
        <ExpiredH2>Expired:</ExpiredH2>
        <div className="time">
          <div>
            <HeaderTimeSpan>137</HeaderTimeSpan>
            <p>Days</p>
          </div>
          <div>
            <HeaderTimeSpan>8</HeaderTimeSpan>
            <p>Hours</p>
          </div>
          <div>
            <HeaderTimeSpan>23</HeaderTimeSpan>
            <p>Min</p>
          </div>
          <div>
            <HeaderTimeSpan>7</HeaderTimeSpan>
            <p>Sec</p>
          </div>
        </div>
      </div>
      <div className="total">
        <AmountH2>Total Amount Lock:</AmountH2>
        <TextField
          id="standard-basic"
          className="input amount"
          onChange={e => {
            isNotContainString(e.target.value, setMsg);
          }}
        />
        <span className="currency">ETH</span>
      </div>
      <div className="warning">
        <div />
        {msg}
      </div>
    </LockdropInfoContainer>
  );
};

export default LockdropInfo;

const LockdropInfoContainer = styled.div`
  width: 600px;
  height: 230px;
  display: grid;
  align-items: center;
  background-color: ${theme.colors.creamWhite};
  border: 4px solid ${theme.colors.black};
  border-radius: 6px;
  padding: 20px 10px;
  ${customMedia.lessThan("tabletSmall")`
      width: 450px;
      /* border: 3px solid ${theme.colors.black}; */
  `}
  ${customMedia.lessThan("mobile")`
      width: 350px;
      height: 220px;
      border: 3px solid ${theme.colors.black};
  `}

  .expired, .total {
    display: grid;
    align-items: center;
    grid-template-columns: 50% 40% 10%;
    padding: 8px 6%;
    height: 42px;
    ${customMedia.lessThan("tabletSmall")`
      grid-template-columns: 55% 35% 10%;
      padding: 0 4px;
    `}
  }
  .expired {
    grid-template-columns: 50% 50%;
    padding-bottom: ${customMedia.lessThan("tabletSmall")`
      grid-template-columns: 55% 45%;
    `};
  }
  input {
    font-size: 20px;
    text-align: center;
  }
  .input {
    width: 170px;
    align-self: center;
    font-weight: bold;
    ${customMedia.lessThan("tabletSmall")`
      width: 130px;
    `}
    ${customMedia.lessThan("mobile")`
      width: 100px;
    `}
  }
  .amount {
    input {
      cursor: default;
    }
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
  }
  .time {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

const TitleH1 = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  ${customMedia.lessThan("tabletPro")`
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

const HeaderTimeSpan = styled.span`
  font-weight: bold;
  font-size: 22px;
  opacity: 0.9;
`;
