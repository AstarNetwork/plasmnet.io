import React from 'react'
import styled from 'styled-components'
import { TitleH } from '../styles/customH'
import { Sponsors } from '../data/links'

interface Props {

}

const Sponsor: React.FC<Props> = () => {
  return (
    <SponsorContainer>
      <TitleH>Sponsors</TitleH>
      <div className="sponsors">
        {
          Sponsors.map(sponsor => (
            <div className="sponsor" key={sponsor.className}>
              <a href={sponsor.link} rel="noopener noreferrer" target="_blank">
                <img src={sponsor.image} alt={sponsor.description} className={sponsor.className} />
              </a>
            </div>
          ))
        }
      </div>
    </SponsorContainer>
  )
}

export default Sponsor

const SponsorContainer = styled.div`
  margin: 40px 0px;
  
  .sponsors{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    justify-items: center;
  }
  .sponsor{
    width: 200px;
    height: 200px;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px;

    .cryptoeconomics-lab, .parity-technologies, .web3-foundation, .istudy, .long-hash, .university-of-tokyo {
      height: 130px;
      padding: 20px;
      display: flex;
      text-align: center;
      justify-content: center;
    }

    .cryptoeconomics-lab,.parity-technologies,.web3-foundation{
      height: 150px;
    }
  }
`