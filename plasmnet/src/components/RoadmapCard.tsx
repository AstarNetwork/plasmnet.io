import React from "react";
import styled from "styled-components";
import { Card, Icon } from "semantic-ui-react";
import { customMedia } from "../styles/globalStyle";
import { theme } from "../styles/theme";
import { IRoadmap } from "../type/types";

interface Props {
  list: IRoadmap;
}

const RoadmapCard: React.FC<Props> = (props: Props) => {
  const { list } = props;

  return (
    <RoadmapCardContainer>
      <Card className={`${list.id % 2 === 0 ? "card-down" : "card"}`}>
        <Card.Content>
          <div className="header">
            <Icon name="calendar check outline" className="icon" />
            <h3>{list.month}</h3>
          </div>
          <div className="task">
            <ul>
              {list.task.map((task: any) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </Card.Content>
      </Card>
    </RoadmapCardContainer>
  );
};

export default RoadmapCard;

const RoadmapCardContainer = styled.div`

  .card {
    width: 470px;
    box-shadow: 0 20px 60px rgba(1,50,204,.1);
    border-radius: 10px;
    display: grid;
    grid-template-rows:20% 80%;
    ${customMedia.lessThan("laptop")`
        width: 600px;
      `}
    ${customMedia.lessThan("tabletSmall")`
        width: 334px;
      `}
  }
  .card-down {
    width: 470px;
    box-shadow: 0 20px 60px rgba(1,50,204,.1);
    border-radius: 10px;
    display: grid;
    grid-template-rows:20% 80%;
    ${customMedia.greaterThan("laptop")`
      margin-top: 94px !important;
    `}
    ${customMedia.lessThan("laptop")`
      width: 600px;
    `}
    ${customMedia.lessThan("tabletSmall")`
      width: 334px;
    `}
  }
  .content {
    padding:0 !important;
    display: grid;
    min-height: 260px;
  }
  .header{
    height: 100px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    display: grid !important;
    grid-template-columns: 1 1;
    align-items: center;
    padding: 20px;
    background-color: ${theme.colors.blue};
    ${customMedia.lessThan("tabletSmall")`
      height: 90px;
    `}
  }
    .icon {
      font-size: 40px;
      grid-column: 1/2;
      margin-top: 14px;
      ${customMedia.lessThan("tabletSmall")`
        font-size: 30px;
        margin-top: 6px;
      `}
    }

    .task{
      display: grid;
      align-self:center;
    }


    h3 {
      font-size: 28px;
      color: ${theme.colors.black};
      margin: 0;
      grid-column: 4/8;
      ${customMedia.lessThan("tabletSmall")`
        font-size: 26px;
      `}
    }

    p {
      font-size: 18px;
      line-height: 26px;
    }

    ul{
      display: grid;
      align-items: center;
    }

    li{
      font-size: 20px;
      line-height:38px;
      ${customMedia.lessThan("tabletSmall")`
        font-size: 18px;
      `}
    }
`;
