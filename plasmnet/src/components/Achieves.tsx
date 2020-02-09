import React from "react";
import { TitleH } from "../styles/customH";
import styled from "styled-components";
interface Props {}

const Achieves: React.FC<Props> = () => {
  return (
    <AchievesContainer>
      <TitleH>Plasm Networks archives:</TitleH>
    </AchievesContainer>
  );
};

export default Achieves;

const AchievesContainer = styled.div`
  margin: 40px 0px;
`;
