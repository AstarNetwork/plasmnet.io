import React from "react";
import styled from "styled-components";
import { Card, Icon } from "semantic-ui-react";
import { customMedia } from "../styles/globalStyle";
import { theme } from "../styles/theme";

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
          <div className="header">
            {/*
          // @ts-ignore */}
            <Icon name={icon} className="icon" />
            <div />
          </div>
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
    height: 320px;
    width: 370px;
    box-shadow: 0 20px 60px rgba(1, 50, 204, 0.1);
    border-radius: 10px;
    ${customMedia.lessThan("laptop")`
      width: 600px;
      `}
    ${customMedia.lessThan("tabletSmall")`
      width: 334px;
      `}
    .content {
      padding: 0 !important;
      /* display: grid; */
    }

    .header {
      height: 90px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: grid !important;
      grid-template-columns: 1 1;
      align-items: center;
      padding: 20px;
      background-color: ${theme.colors.rat};
    }

    .icon {
      font-size: 40px;
      grid-column: 1/2;
      padding-top: 10px;
    }

    h3 {
      color: ${theme.colors.blue};
      padding: 10px;
      margin-bottom: 0;
    }

    p {
      font-size: 18px;
      line-height: 26px;
      padding: 10px;
    }
  }
`;
