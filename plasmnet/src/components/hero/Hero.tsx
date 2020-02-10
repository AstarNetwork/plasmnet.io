import { Power3, TimelineLite, TweenMax } from 'gsap';
import React, { useEffect, useRef } from "react";
import { Link } from 'react-scroll';
import imgBoy from "./images/boy.webp";
import imgGirl from "./images/girl.webp";
import { HeroContainer } from "./images/Hero.styled";


interface Props {

}

const Hero: React.FC<Props> = () => {
  let app = useRef()
  let images = useRef()
  let content = useRef()
  let tl = new TimelineLite({ delay: .8 });

  useEffect(() => {
    // Images Vars

    // @ts-ignore
    const girlImage = images.firstElementChild; // or children[0]
    // @ts-ignore
    const boyImage = images.lastElementChild;

    //content vars

    // @ts-ignore
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    // @ts-ignore
    const contentP = content.children[1];
    // @ts-ignore
    const locationFirst = content.children[2].children[0];
    const locationSecond = locationFirst.nextSibling;
    const locationThird = locationSecond.nextSibling;
    const locationFour = locationThird.nextSibling;
    const locationFive = locationFour.nextSibling;
    const locationSix = locationFive.nextSibling;

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: 'visible' } })

    //Images Animation
    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
      // .2: will run after 0.2sec above
      .from(girlImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
      .from(boyImage, 1.4, { y: 1280, ease: Power3.easeOut }, .2)
      .from(boyImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)

    //Content Animation

    // @ts-ignore
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
      y: 44,
      ease: Power3.easeOut,
      delay: .8
    }, .15, 'Start')
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4, "content")
      .staggerFrom([locationFirst.children, locationSecond.children, locationThird.children, locationFour.children, locationFive.children, locationSix.children], 1, {
        y: 20,
        ease: Power3.easeOut,
        opacity: 0,
      }, .15, "content")
  }, [tl])

  return (
    <HeroContainer>
      {/*
        // @ts-ignore */}
      <div className="hero" ref={el => app = el}>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              {/*
                  // @ts-ignore */}
              <div className="hero-content-inner" ref={el => content = el}>
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
                    <Link className="link" to="ui-id" smooth={true} offset={-70} duration={700}>Launch UI</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="ui-id" smooth={true} offset={-70} duration={700}>Lockdrop Information</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="archives-id" smooth={true} offset={-70} duration={700}>Plasm Networks archives</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="testnet-id" smooth={true} offset={-70} duration={700}>Plasm Testnet v3</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="roadmap-id" smooth={true} offset={-70} duration={700}>Roadmap</Link>
                  </div>
                  <div className="btn-row">
                    <Link className="link" to="sponsor-id" smooth={true} offset={-70} duration={700}>Sponsors</Link>
                  </div>
                </p>
              </div>
            </div>
            <div className="hero-images">
              {/*
                  // @ts-ignore */}
              <div ref={el => images = el} className="hero-images-inner">
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

export default Hero
