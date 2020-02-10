import React from "react";
import Sponsor from "./Sponsor";
import Roadmap from "./Roadmap";
import TestnetInfo from "./TestnetInfo";
import Title from "./Title";
import Hero from "./hero/Hero";
import Achieves from "./Achieves";

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
