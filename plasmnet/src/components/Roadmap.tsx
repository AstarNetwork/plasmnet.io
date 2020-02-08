import React from 'react'
import styled from 'styled-components'
import roadmap from '../resources/roadmap.svg'
import { customMedia } from '../styles/globalStyle'
interface Props {

}

const Roadmap: React.FC<Props> = () => {
  return (
    <RoadmapContainer>
      <h1>Roadmap</h1>
      <div className="image-container">
        <img src={roadmap} alt="roadmap" />
      </div>
    </RoadmapContainer>
  )
}

export default Roadmap

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  .image-container{
    width: 100%;

    img {
      width: 75%;
      height: auto;
      ${customMedia.lessThan("laptop")`
        width: 90%;
      `}
      ${customMedia.lessThan("tablet")`
        width: 100%;
      `}
    }
  }
`