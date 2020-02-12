import React, { useRef, useState } from "react";
import { Link } from 'react-scroll';
import { useIntersection } from "react-use";
import { ScrollFadeIn, ThresholdPoint, DeepFadeIn } from "../../utils/scrollFadeIn";
import imgBoy from "./images/boy.webp";
import imgGirl from "./images/girl.webp";
import { HeroContainer } from "./Hero.styled";

interface Props {
}

const HeroWithoutAnimation: React.FC<Props> = (props: Props) => {

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: ThresholdPoint
  });
  // ScrollFadeIn(intersection, ".hero", false, threshHoldPoint);
  ScrollFadeIn(intersection, ".hero", false, ThresholdPoint, DeepFadeIn);

  let offsetInitialState = window.screen.width > 920 ? -70 : 0
  const [offset] = useState(offsetInitialState)

  return (
    <HeroContainer ref={sectionRef} style={{ paddingTop: "80px", paddingBottom: "0px" }}>
      {/*
        // @ts-ignore */}
      <div className="hero" >
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              {/*
                  // @ts-ignore */}
              <div className="hero-content-inner">
                <h1>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">The Plasm Network</div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">is Scaling Dapps Platform</div>
                  </div>
                  <div className="hero-content-line">
                    <div className="hero-content-line-inner">on Substrate</div>
                  </div>
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
                <p>
                  <div className="btn-row">
                    <Link className="link" to="ui-id" smooth={true} offset={offset} duration={700}>Launch UI</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="ui-id" smooth={true} offset={offset} duration={700}>Lockdrop Information</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="achieves-id" smooth={true} offset={offset} duration={700}>Plasm Networks archives</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="testnet-id" smooth={true} offset={offset} duration={700}>Plasm Testnet v3</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="roadmap-id" smooth={true} offset={offset} duration={700}>Roadmap</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="sponsor-id" smooth={true} offset={offset} duration={700}>Sponsors</Link>
                  </div>
                </p>
              </div>
            </div>
            <div className="hero-images">
              {/*
                  // @ts-ignore */}
              <div className="hero-images-inner">
                <div className="hero-image girl">
                  <img src={imgGirl} alt="girl" />
                </div>
                <div className="hero-image boy">
                  <img src={imgBoy} alt="boy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  )
}

export default HeroWithoutAnimation
