import React, { useRef } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import { RoadmapList } from "../contents/roadmapRecord";
import { TitleH } from "../styles/customH";
import { customMedia } from "../styles/globalStyle";
import { IRoadmap } from "../type/types";
import { ScrollFadeIn } from "../utils/scrollFadeIn";
import RoadmapCard from "./RoadmapCard";
interface Props {}

const Roadmap: React.FC<Props> = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  });

  ScrollFadeIn(intersection, ".roadmap-cards", false, 0.1);
  return (
    <RoadmapContainer ref={sectionRef} id="roadmap-id">
      <TitleH>Roadmap</TitleH>
      <div className="roadmap-cards">
        {RoadmapList.map((list: IRoadmap) => (
          <RoadmapCard list={list} key={list.id} />
        ))}
      </div>
    </RoadmapContainer>
  );
};

export default Roadmap;

const RoadmapContainer = styled.div`
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
