import React, { useRef } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import { RoadmapList } from "../data/roadmapRecord";
import { TitleH } from "../styles/customH";
import { customMedia } from "../styles/globalStyle";
import { IRoadmap } from "../type/types";
import { ScrollFadeIn, ThresholdPoint } from "../utils/scrollFadeIn";
import RoadmapCard from "./RoadmapCard";
interface Props { }

const Roadmap: React.FC<Props> = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: ThresholdPoint
  });

  ScrollFadeIn(intersection, ".roadmap-cards", false);
  return (
    <RoadmapContainer ref={sectionRef} id="roadmap-id">
      <TitleH>Roadmap</TitleH>
      <div className="roadmap-cards">
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

  .roadmap-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-row-gap: 20px;
    opacity: 0;
    ${customMedia.lessThan("laptop")`
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
    `}
  }
`;
