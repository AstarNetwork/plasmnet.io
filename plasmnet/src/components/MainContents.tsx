import React from "react";
import Sponsor from "./Sponsor";
import Roadmap from "./Roadmap";
import TestnetInfo from "./TestnetInfo";
import Title from "./Title";
import Hero from "./hero/Hero";
import HeroWithoutAnimation from "./hero/HeroWithoutAnimation";
import Achieves from "./Achieves";
import styled from "styled-components";

interface Props {}

const MainContents: React.FC<Props> = () => {
  return (
    <MainContentsContainer>
      <Title />
      {/* <Hero /> */}
      <HeroWithoutAnimation />
      <Achieves />
      <TestnetInfo />
      <Roadmap />
      <Sponsor />
    </MainContentsContainer>
  );
};

export default MainContents;

const MainContentsContainer = styled.div`
  width: 100%;
`;
