import React from "react";
import Sponsor from "./Sponsor";
import Roadmap from "./Roadmap";
import TestnetInfo from "./TestnetInfo";
import Title from "./Title";
import Achieves from "./Achieves";
import Discuss from "./Discuss";
import styled from "styled-components";

interface Props {}

const MainContents: React.FC<Props> = () => {
  return (
    <MainContentsContainer>
      <Title />
      <Discuss />
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
