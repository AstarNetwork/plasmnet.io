import React from "react";
import styled from "styled-components";
import {
  Discussions
} from "../contents/links";
import { customMedia } from "../styles/globalStyle";

interface Props {}

const Discuss: React.FC<Props> = () => {
  return (
    <FooterContainer>
      <div className="discussion">
        <h2>Join the discussion:</h2>
        <div className="icons">
          {Discussions.map(discussion => (
            <a
              href={discussion.link}
              rel="noopener noreferrer"
              target="_blank"
              key={discussion.className}
            >
              <img
                src={discussion.image}
                alt={discussion.className}
                className={discussion.className}
              />
            </a>
          ))}
        </div>
      </div>
    </FooterContainer>
  );
};

export default Discuss;

const FooterContainer = styled.div`
  .discussion {
    margin: 20px 20px;
    padding: 40px 0px;
    display: grid;
    justify-items: center;
    align-items: center;
    ${customMedia.lessThan("mobile")`
      width: auto;
    `}

    h2 {
      font-size: 38px;
      margin-bottom: 20px;
      margin-top: 0;
      ${customMedia.lessThan("mobile")`
        font-size: 28px;
      `}
    }
    .icons {
      display: flex;
      width: 370px;
      justify-content: space-evenly;
      ${customMedia.lessThan("mobile")`
        width: auto;
        justify-content: space-evenly
     `}
    }
    .twitter,
    .github,
    .telegram,
    .discord {
      height: 60px;
      margin: 0px 4px;
      ${customMedia.lessThan("mobile")`
        margin: 0px 8px;
      `}
    }
  }
`;
