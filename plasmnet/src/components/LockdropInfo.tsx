import React from 'react'
import styled from 'styled-components'

interface Props {

}

const LockdropInfo: React.FC<Props> = () => {
  return (
    <LockdropInfoContainer>
      <div className="launch-ui">
        <h1>Launch UI</h1>
      </div>
      <div className="Lockdrop-information">
        <h1>Lockdrop information</h1>
      </div>

    </LockdropInfoContainer>
  )
}

export default LockdropInfo

const LockdropInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`