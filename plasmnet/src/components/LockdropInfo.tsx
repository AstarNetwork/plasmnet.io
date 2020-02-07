import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

interface Props {

}

const LockdropInfo: React.FC<Props> = () => {
  const [eth, setEth] = useState()
  const [msg, setMsg] = useState("")

  const convertToEth = (
    e: string,
    setEth: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    setEth(Number(e))
  }

  const isNotContainString = (
    value: string,
    setMsg: React.Dispatch<React.SetStateAction<string>>
  ): void => {
    const valueArray = value.split("");

    for (const value of valueArray) {
      if (/^[^.0-9]*$/.test(value)) {
        setMsg("Please enter number only")
        return
      }
    }
    setMsg("")
    return
  }

  return (
    <LockdropInfoContainer>
      <TitleH1>Lockdrop Information</TitleH1>
      <div className="warning">
        <div />
        {msg}
      </div>
      <div className="expected">
        <ExpectedH2>Expected:</ExpectedH2>
        <TextField
          id="standard-basic"
          className="input"
          onChange={(e) => {
            isNotContainString(e.target.value, setMsg);
            convertToEth(e.target.value, setEth)
          }}
        />
        <span className="currency">PLM</span>
      </div>
      <div className="total">
        <AmountH2>Total Amount Lock:</AmountH2>
        <TextField
          InputProps={{
            readOnly: true,
          }}
          id="standard-basic"
          className="input amount"
          value={eth}
        />
        <span className="currency">ETH</span>
      </div>
    </LockdropInfoContainer>
  )
}

export default LockdropInfo

const LockdropInfoContainer = styled.div`
  width: 600px;
  height: 220px;
  display: grid;
  align-items:center;
  background-color:${theme.colors.creamWhite};
  border: 4px solid ${theme.colors.black};
  border-radius: 6px;
  padding: 20px 10px;

  .expected, .total{
    display:grid;
    align-items: center;
    grid-template-columns:50% 40% 10%;
    padding:0px 6%;
  }
  input{
    font-size: 20px;
    text-align: center;
  }
  .input{
    width: 170px;
    padding-bottom: 10px;
    align-self: center;
    font-weight: bold;
  }
  .amount{
    input {
      cursor: default;
    }
  }
  .currency{
    font-size: 18px;
  }
  .warning{
    height: 20px;
    color: ${theme.colors.red};
    font-size:14px;
    display:grid;
    align-items: center;
    grid-template-columns:30% 70%;
  }
`

const TitleH1 = styled.h1`
  text-align: center;
`

const ExpectedH2 = styled.h2``
const AmountH2 = styled.h2``