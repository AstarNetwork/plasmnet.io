import React from "react";
import styled from "styled-components";
import { Card, Icon } from "semantic-ui-react";

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
    width: 330px;
    height: 230px;

  .icon {
    font-size: 20px;
    padding: 10px;
  }

`;
