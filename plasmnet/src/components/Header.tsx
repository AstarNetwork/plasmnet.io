import React from 'react'
import styled from 'styled-components'

interface Props {

}

const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>
      <div className="leftHeader">
        <h1>Plasm Network</h1>
      </div>
      <div className="rightHeader">
        <button>White paper</button>
        <button>Docs</button>
        <button>Community</button>
        <button>Blogs</button>
      </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

`;
