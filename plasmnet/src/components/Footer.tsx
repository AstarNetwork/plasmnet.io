import React from "react";
import styled from "styled-components";
import {
  Company,
  Products,
  Blogs,
  Community,
  Discussions
} from "../data/links";
import { customMedia } from "../styles/globalStyle";
import { theme } from "../styles/theme";

interface Props {}

const Footer: React.FC<Props> = () => {
  const currentYear = new Date().getFullYear();
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
      <div className="footer-columns">
        <ul className="footer-column">
          <h3>Company</h3>
          {Company.map(company => (
            <li key={company.description}>
              <a href={company.link} rel="noopener noreferrer" target="_blank">
                {company.description}
              </a>
            </li>
          ))}
        </ul>

        <ul className="footer-column">
          <h3>Products</h3>
          {Products.map(product => (
            <li key={product.description}>
              <a href={product.link} rel="noopener noreferrer" target="_blank">
                {product.description}
              </a>
            </li>
          ))}
        </ul>

        <ul className="footer-column">
          <h3>Collaboration</h3>
          <li>
            <a href="/" rel="noopener noreferrer" target="_blank">
              Example
            </a>
          </li>
          <li>
            <a href="/" rel="noopener noreferrer" target="_blank">
              Example
            </a>
          </li>
          <li>
            <a href="/" rel="noopener noreferrer" target="_blank">
              Example
            </a>
          </li>
        </ul>

        <ul className="footer-column">
          <h3>Blog</h3>
          {Blogs.map(blog => (
            <li key={blog.description}>
              <a href={blog.link} rel="noopener noreferrer" target="_blank">
                {blog.description}
              </a>
            </li>
          ))}
        </ul>
        <ul className="footer-column">
          <h3>Community</h3>
          {Community.map(community => (
            <li key={community.description}>
              <a
                href={community.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {community.description}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-div">
        <footer>
          © 2019-{currentYear} Stake Technologies, Inc. All Rights Reserved.
        </footer>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  .discussion {
    border-top: 1px groove black;
    border-bottom: 1px groove black;
    margin: 10px 0px;
    padding: 14px 0px;
    padding-top: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      margin-right: 10px;
      margin-bottom: 10px;
      text-shadow: 0px 0px 1px #000, 4px 4px 2px rgba(0, 0, 0, 0.5);
    }
    .icons {
      display: flex;
      width: 170px;
      justify-content: space-evenly;
    }
    .twitter,
    .github,
    .telegram,
    .discord {
      height: 34px;
      margin: 0px 4px;
      -webkit-transition: all 0.3s ease-in;
      -moz-transition: all 0.3s ease-in;
      -ms-transition: all 0.3s ease-in;
      -o-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
      :hover {
        box-shadow: 3px 3px 5px rgba(1, 1, 1, 1);
        padding: 2px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        transform: scale(1.5);
        margin: 0px 16px;
      }
    }
  }

  .footer-div {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  footer {
    display: flex;
    justify-content: center;
    margin: 10px 0px;
    ${customMedia.lessThan("mobile")`
      width: 252px;
      text-align: center;
    `}
  }
  .footer-columns {
    width: 90%;
    margin: auto;
    font-size: 14px;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    ${customMedia.lessThan("tabletSmall")`
      grid-template-columns: repeat(2, 1fr);
    `}
    ul li {
      list-style: none;
      line-height: 2.5;
    }

    a {
      color: ${theme.colors.black};
      :hover {
        cursor: pointer;
      }
    }
  }
  .footer-column {
    text-align: center;
    ${customMedia.lessThan("mobile")`
      padding-left: 0px;;
    `}
  }
`;
