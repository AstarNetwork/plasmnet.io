import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from "styled-components";
import { theme } from '../styles/theme';
import LockdropInfo from './LockdropInfo';
interface Props {

}

const Title: React.FC<Props> = () => {
  return (
    <TitleContainer>
      <div>
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


  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction:column;

  .ui {
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .ui-button {
    margin-top: 0px;
  }
`

const TitleH1 = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 56px;
`;