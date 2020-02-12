import React from "react";
import { TitleH } from "../styles/customH";
import styled from "styled-components";
import { Button } from "semantic-ui-react";
import { AppLinks } from "../data/links";
import coinMiningImg from "../resources/coin-mining.svg";
import coinMiningColorImg from "../resources/coin-mining-color.svg";
import { customMedia } from "../styles/globalStyle";
interface Props {}

const TestnetInfo: React.FC<Props> = () => {
  return (
    <TestnetInfoContainer id="testnet-id">
      <TitleH>Plasm Testnet v3</TitleH>
      <div className="container">
        <div className="image">
          {/* https://www.iconpacks.net/free-icon/coin-mining-2203.html */}
          {/* <img src={coinMiningImg} alt="coin-mining" className="logo" /> */}

          {/* https://www.iconpacks.net/free-icon/coin-mining-2474.html */}
          <img src={coinMiningColorImg} alt="coin-mining" className="logo" />
        </div>
        <div className="introduction">
          {/* <div className="contents"> */}
          <div>
            <p>This is the most interesting network.</p>
            <p>
              Testnet v3 DApp owners and users can stake PLM tokens for
              applications and get a part of network block rewards as same as
              validators.
            </p>
          </div>
          <a
            href={AppLinks.polkadotNetwork}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button size="massive" color="purple">
              Telemetry Plasm Testnet
            </Button>
          </a>
          {/* </div> */}
        </div>
      </div>
    </TestnetInfoContainer>
  );
};

export default TestnetInfo;

const TestnetInfoContainer = styled.div`
  margin: 150px 0px;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 0 10%;
    ${customMedia.lessThan("laptop")`
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
      padding: 0;
      text-align: center;
    `}
    .image {
      .logo {
        height: 300px;
      }
    }
  }
  .introduction {
    padding: 0 10%;
    display: grid;
    grid-row-gap: 60px;
  }
  p {
    font-size: 26px;
    margin-bottom: 0;
    ${customMedia.lessThan("mobile")`
      font-size: 16px;
      /* width: 300px; */
    `}
  }
`;
