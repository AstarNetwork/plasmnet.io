import React, { useRef } from "react";
import styled from "styled-components";
import roadmap from "../resources/roadmap.svg";
import { customMedia } from "../styles/globalStyle";
import { TitleH } from "../styles/customH";
import { useIntersection } from "react-use";
import { ThresholdPoint, ScrollFadeIn } from "../utils/scrollFadeIn";
import { Icon } from "semantic-ui-react";
import RoadmapCard from "./RoadmapCard";
import { RoadmapList } from "../data/roadmapRecord";
import { IRoadmaps, IRoadmap } from "../type/types";
interface Props {}

const Roadmap: React.FC<Props> = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: ThresholdPoint
  });

  ScrollFadeIn(intersection, ".roadmap", false);
  return (
    <RoadmapContainer ref={sectionRef} id="roadmap-id">
      <TitleH>Roadmap</TitleH>
      <div className="cards">
        {RoadmapList.map((list: IRoadmap) => (
          <RoadmapCard list={list} />
        ))}
      </div>
    </RoadmapContainer>
  );
};

export default Roadmap;

const RoadmapContainer = styled.div`
  .next {
    margin-top: 94px;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-row-gap: 20px;
    ${customMedia.lessThan("laptop")`
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
    `}
  }
`;
