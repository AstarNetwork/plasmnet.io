import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from "styled-components";
import { theme } from '../styles/theme';
import LockdropInfo from './LockdropInfo';
import { customMedia } from '../styles/globalStyle';
interface Props {

}

const Title: React.FC<Props> = () => {
  return (
    <TitleContainer>
      <div className="title">
        <TitleH1>The Plasm Network is</TitleH1>
        <TitleH1>Scaling Dapps Platform on Substrate</TitleH1>
      </div>
      <div className="ui">
        <div>
          <a href="https://apps.plasmnet.io/" rel="noopener noreferrer" target="_blank">
            <Button positive size='massive' className="ui-button">Launch UI</Button>
          </a>
        </div>
        <div>
          <LockdropInfo />
        </div>
      </div>
    </TitleContainer>
  )
}

export default Title

const TitleContainer = styled.div`
  /* off-set the header height */
  margin-top: 60px;
  width: 100vw;
  height: 60vh;
  margin-left: -20px;

  /* fallback for old browsers */
  background: ${theme.colors.blue};
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #396afc, ${theme.colors.blue});
   /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #396afc, ${theme.colors.blue});

  display: grid;
  grid-template-rows: 40% 60%;
  align-items: center;
  ${customMedia.lessThan("tabletPro")`
    margin-top: -10px;
    height: 70vh;
    grid-template-rows: 34% 66%;
  `}
  ${customMedia.lessThan("mobile")`
    height: 80vh;
  `}

  .ui {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    ${customMedia.lessThan("tabletPro")`
       display: grid;
       grid-template-rows: 30% 70%;
       justify-items: center;
       grid-row-gap: 50px;
       align-self: start;
    `}
    ${customMedia.lessThan("mobile")`
       grid-row-gap: 26px;
    `}
  }
  .ui-button {
    margin-top: 0px;
    ${customMedia.lessThan("tabletPro")`
      align-items: start;
    `}
  }
`

const TitleH1 = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  line-height: 56px;
  ${customMedia.lessThan("laptop")`
    font-size: 46px;
    line-height: 50px;
  `}
  ${customMedia.lessThan("tablet")`
    font-size: 40px;
    line-height: 44px;
  `}
  ${customMedia.lessThan("mobile")`
    font-size: 30px;
    line-height: 44px;
    margin: 0;
  `}
`;