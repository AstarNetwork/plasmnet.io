import React from 'react'
import styled from 'styled-components'
import { Sponsors } from '../data/links'
import { customMedia } from '../styles/globalStyle'

interface Props {

}

const Sponsor: React.FC<Props> = () => {
  return (
    <SponsorContainer>
      <TitleH1>Sponsors</TitleH1>
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
    align-items: center;
    justify-items: center;
    ${customMedia.lessThan("laptop")`
      grid-template-columns: 1fr 1fr;
    `}
    ${customMedia.lessThan("mobile")`
      grid-template-columns: 1fr;
    `}
  }
  .sponsor{
    width: 200px;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 10px;
    a {
      align-self: center
    }

    .cryptoeconomics-lab, .parity-technologies, .web3-foundation, .istudy, .long-hash, .university-of-tokyo {
      height: 130px;
      padding: 20px;
      display: flex;
      text-align: center;
      justify-content: center;
    ${customMedia.lessThan("mobile")`
      width: 300px;
      height: auto;
    `}
    }

    .cryptoeconomics-lab,.parity-technologies,.web3-foundation{
      height: 150px;
    }
  }
`

const TitleH1 = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  ${customMedia.lessThan("mobile")`
    margin-bottom: 0px;
  `}
`;