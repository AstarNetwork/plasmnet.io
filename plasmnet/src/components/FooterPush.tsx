import React from "react";
import styled from "styled-components";

interface Props {}

const FooterPush: React.FC<Props> = () => {
  return <FooterPushContainer></FooterPushContainer>;
};

export default FooterPush;

const FooterPushContainer = styled.div`
  flex: 1;
`;
