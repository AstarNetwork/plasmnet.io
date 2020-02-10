import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import styled from "styled-components";
import { Community, Links, Whitepaper } from "../data/links";
import stakedLogo from "../resources/staked-logo.svg";
import { customMedia } from "../styles/globalStyle";
import { theme } from "../styles/theme";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>
      <div className="leftHeader">
        <div onClick={() => scroll.scrollToTop()} className="logo">
          <img src={stakedLogo} alt="stakedLogo" className="staked-logo" />
          <h1>Plasm Network</h1>
        </div>
      </div>

      <div className="right-header">
        <Dropdown text="Whitepaper" className="header-link">
          <Dropdown.Menu>
            <Dropdown.Header>Whitepaper</Dropdown.Header>
            {Whitepaper.map(whitepaper => (
              <Dropdown.Item key={whitepaper.description}>
                <a
                  href={whitepaper.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {whitepaper.description}
                </a>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <a
            href={Links.docs}
            rel="noopener noreferrer"
            target="_blank"
            className="header-link"
          >
            Docs
          </a>
        </Menu.Item>

        <Dropdown text="Community" className="header-link">
          <Dropdown.Menu>
            <Dropdown.Header>Community</Dropdown.Header>
            {Community.map(community => (
              <Dropdown.Item key={community.description}>
                <a
                  href={community.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {community.description}
                </a>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <a
          href={Links.blog}
          rel="noopener noreferrer"
          target="_blank"
          className="header-link"
        >
          Blog
        </a>
        <a href={Links.twitter} rel="noopener noreferrer" target="_blank">
          <Icon name="twitter" size="large" className="header-link" />
        </a>
        <a href={Links.github} rel="noopener noreferrer" target="_blank">
          <Icon name="github" size="large" className="header-link" />
        </a>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  ${customMedia.lessThan("tabletPro")`
    display: none;
  `}
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: ${theme.colors.creamWhite};
  width: 100%;
  margin: -10px -20px;
  padding: 0px 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  a {
    color: ${theme.colors.black};
  }

  .header-link {
    color: ${theme.colors.black};
    font-size: 18px;
    :hover {
      color: ${theme.colors.slaty};
    }
  }

  .right-header {
    width: 520px;
    height: 24px;
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
  }

  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    opacity: 0.9;
    cursor: pointer;

    .staked-logo {
      height: 70px;
    }
    h1 {
      margin-top: 0px;
    }
  }
`;
