import React, { useRef } from "react";
import { useIntersection } from "react-use";
import styled from "styled-components";
import { AchieveIntroductions } from "../contents/achieveIntroductions";
import { TitleH } from "../styles/customH";
import { customMedia } from "../styles/globalStyle";
import { ScrollFadeIn, ThresholdPoint } from "../utils/scrollFadeIn";
import AchievesCard from "./AchievesCard";
interface Props {}

const Achieves: React.FC<Props> = () => {
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: ThresholdPoint
  });

  ScrollFadeIn(intersection, ".cards", false);
  return (
    <AchievesContainer ref={sectionRef} id="achieves-id">
      <TitleH>Plasm Networks achieves:</TitleH>
      <div className="cards">
        {AchieveIntroductions.map(introduction => (
          <AchievesCard
            icon={introduction.icon}
            title={introduction.title}
            description={introduction.description}
            key={introduction.title}
          />
        ))}
      </div>
    </AchievesContainer>
  );
};

export default Achieves;

const AchievesContainer = styled.div`
  margin: 100px 0px;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    opacity: 0;
    ${customMedia.lessThan("laptop")`
      grid-template-columns: 1fr;
      grid-row-gap: 40px;
    `}
  }
`;
