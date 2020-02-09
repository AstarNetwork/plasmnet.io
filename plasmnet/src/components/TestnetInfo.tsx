import React from "react";
import { TitleH } from "../styles/customH";
import styled from "styled-components";
interface Props {}

const TestnetInfo: React.FC<Props> = () => {
  return (
    <TestnetInfoContainer>
      <TitleH>Plasm Testnet v3</TitleH>
    </TestnetInfoContainer>
  );
};

export default TestnetInfo;

const TestnetInfoContainer = styled.div`
  margin: 40px 0px;
`;
