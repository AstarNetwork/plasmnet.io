import React, { useRef } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import { Sponsors } from "../contents/links";
import { customMedia } from "../styles/globalStyle";
import { ScrollFadeIn, ThresholdPoint } from "../utils/scrollFadeIn";
interface Props {}

const Sponsor: React.FC<Props> = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: ThresholdPoint
  });

  ScrollFadeIn(intersection, ".sponsor", false);
  return (
    <SponsorContainer ref={sectionRef} id="sponsor-id">
      <TitleH1>Sponsors</TitleH1>
      <div className="sponsors">
        {Sponsors.map(sponsor => (
          <div className="sponsor" key={sponsor.className}>
            <a href={sponsor.link} rel="noopener noreferrer" target="_blank">
              <img
                src={sponsor.image}
                alt={sponsor.description}
                className={sponsor.className}
              />
            </a>
          </div>
        ))}
      </div>
    </SponsorContainer>
  );
};

export default Sponsor;

const SponsorContainer = styled.div`
  margin: 100px 0px;
  margin-bottom: 60px;

  .sponsors {
    padding-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    align-items: center;
    justify-items: center;
    ${customMedia.lessThan("laptop")`
      grid-template-columns: 1fr 1fr;
    `}
    ${customMedia.lessThan("tabletSmall")`
      grid-template-columns: 1fr;
    `}
  }
  .sponsor {
    opacity: 0;
    width: 200px;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px;
    a {
      align-self: center;
    }

    .cryptoeconomics-lab,
    .parity-technologies,
    .web3-foundation,
    .istudy,
    .long-hash,
    .university-of-tokyo {
      height: 130px;
      padding: 20px;
      display: flex;
      text-align: center;
      justify-content: center;
      ${customMedia.lessThan("mobile")`
      width: 300px;
      height: auto;
    `}
    }

    .cryptoeconomics-lab,
    .parity-technologies,
    .web3-foundation {
      height: 150px;
    }
  }
`;

const TitleH1 = styled.h1`
  text-align: center;
  font-size: 38px;
  margin-bottom: 70px;
  ${customMedia.lessThan("mobile")`
    margin-bottom: 0px;
  `}
`;
