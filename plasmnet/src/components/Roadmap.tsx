import React, { useRef } from "react";
import styled from "styled-components";
import roadmap from "../resources/roadmap.svg";
import { customMedia } from "../styles/globalStyle";
import { TitleH } from "../styles/customH";
import { useIntersection } from "react-use";
import { ThresholdPoint, ScrollFadeIn } from "../utils/scrollFadeIn";
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
      <div className="image-container">
        <img src={roadmap} alt="roadmap" className="roadmap" />
      </div>
    </RoadmapContainer>
  );
};

export default Roadmap;

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 40px 0px;
  margin-top: 20px;

  .roadmap {
    opacity: 0;
    padding-top: 20px;
  }

  .image-container {
    width: 100%;

    img {
      width: 75%;
      max-width: 900px;
      height: auto;
      ${customMedia.lessThan("tablet")`
        width: 100%;
      `}
    }
  }
`;
