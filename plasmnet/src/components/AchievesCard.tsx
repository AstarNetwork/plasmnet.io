import React from "react";
import styled from "styled-components";
import { Card, Icon } from "semantic-ui-react";
import { customMedia } from "../styles/globalStyle";

interface Props {
  icon: string;
  title: string;
  description: string;
}

const AchievesCard: React.FC<Props> = (props: Props) => {
  const { icon, title, description } = props;

  return (
    <CardContainer>
      <Card className="card">
        <Card.Content>
          {/*
          // @ts-ignore */}
          <Icon name={icon} className="icon" />
          <h3>{title}</h3>
          <p>{description}</p>
        </Card.Content>
      </Card>
    </CardContainer>
  );
};

export default AchievesCard;

const CardContainer = styled.div`
  .card {
    width: 370px;
    height: 240px;
    ${customMedia.lessThan("mobile")`
      width: 334px;
    `}

  .icon {
    font-size: 20px;
    padding: 10px;
  }
  p {
    line-height: 26px;
  }
`;
