import React, { useRef } from "react";
import { useIntersection } from "react-use";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { AppLinks } from "../contents/links";
import coinMiningColorImg from "../resources/coin-mining-color.svg";
import { TitleH } from "../styles/customH";
import { customMedia } from "../styles/globalStyle";
import { ScrollFadeIn } from "../utils/scrollFadeIn";
import { theme } from "../styles/theme";
interface Props {}

const TestnetInfo: React.FC<Props> = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  });

  ScrollFadeIn(intersection, ".container", false, 0.1);
  return (
    <TestnetInfoContainer ref={sectionRef} id="testnet-id">
      <TitleH>Plasm Testnet v3</TitleH>
      <div className="container">
        <div className="image">
          {/* https://www.iconpacks.net/free-icon/coin-mining-2474.html */}
          <img src={coinMiningColorImg} alt="coin-mining" className="logo" />
        </div>
        <div className="introduction">
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
            <Button size="massive" color="purple" className="button">
              Telemetry Plasm Testnet
            </Button>
          </a>
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
    align-items: center;
    padding: 0 10%;
    opacity: 0;
    ${customMedia.lessThan("laptop")`
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
      padding: 0;
      text-align: center;
    `}
    .image {
      .logo {
        height: 350px;
        ${customMedia.lessThan("mobile")`
          height: 250px;
        `}
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
  .button {
    font-family: ${theme.font};
  }
`;
