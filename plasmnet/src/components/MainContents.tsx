import React from "react";
import Sponsor from "./Sponsor";
import Roadmap from "./Roadmap";
import TestnetInfo from "./TestnetInfo";
import Achieves from "./Achieves";
import Title from "./Title";
import Hero from "./hero/Hero";

interface Props {}

const MainContents: React.FC<Props> = () => {
  return (
    <div>
      <Hero />
      <Title />
      <Achieves />
      <TestnetInfo />
      <Roadmap />
      <Sponsor />
    </div>
  );
};

export default MainContents;
