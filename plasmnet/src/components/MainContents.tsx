import React from 'react'
import Sponsor from './Sponsor'
import Roadmap from './Roadmap'
import TestnetInfo from './TestnetInfo'
import Achieves from './Achieves'
import LockdropInfo from './LockdropInfo'
import Title from './Title'

interface Props {

}

const MainContents: React.FC<Props> = () => {
  return (
    <>
      <Title />
      <LockdropInfo />
      <Achieves />
      <TestnetInfo />
      <Roadmap />
      <Sponsor />
    </>
  )
}

export default MainContents
