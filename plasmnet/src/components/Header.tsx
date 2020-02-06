import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import { Community, Links, Whitepaper } from '../data/links'
import stakedLogo from "../resources/staked-logo.svg"
import { theme } from '../styles/theme'
interface Props {

}

const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>
      <div className="leftHeader">
        <a href='/' className='logo'>
          <img src={stakedLogo} alt="stakedLogo" className="staked-logo" />
          <h1>Plasm Network</h1>
        </a>
      </div>

      <div className="right-header">
        <Dropdown text='Whitepaper' className="header-link">
          <Dropdown.Menu>
            <Dropdown.Header>Whitepaper</Dropdown.Header>
            {Whitepaper.map(whitepaper => (
              <Dropdown.Item>
                <a href={whitepaper.link} rel="noopener noreferrer" target="_blank">{whitepaper.description}</a>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <a href={Links.docs} rel="noopener noreferrer" target="_blank" className="header-link">Docs</a>
        </Menu.Item>

        <Dropdown text='Community' className="header-link">
          <Dropdown.Menu>
            <Dropdown.Header>Community</Dropdown.Header>
            {Community.map(community => (
              <Dropdown.Item>
                <a href={community.link} rel="noopener noreferrer" target="_blank">{community.description}</a>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <a href={Links.blog} rel="noopener noreferrer" target="_blank" className="header-link">Blog</a>
        <a href={Links.twitter} rel="noopener noreferrer" target="_blank">
          <Icon name='twitter' size='large' className="header-link" />
        </a>
        <a href={Links.github} rel="noopener noreferrer" target="_blank">
          <Icon name='github' size='large' className="header-link" />
        </a>

      </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  a {
    color: ${theme.colors.black};
  }

  .header-link{
    color: ${theme.colors.black};
    font-size: 18px;
    :hover{
      color: ${theme.colors.slaty};
    }
  }

  .right-header{
    width: 520px;
    height: 24px;
    display:flex;
    justify-content: space-between;
    margin-top: 26px;
  }

  .logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  opacity: 0.9;

  .staked-logo{
    height: 70px;
  }
  h1{
    margin-top: 0px;
  }
}

`;
