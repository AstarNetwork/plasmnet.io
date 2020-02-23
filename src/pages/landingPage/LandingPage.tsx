import React from 'react';
import TitleHead from './sections/TitleHead';
import Issues from './sections/Issues';
import WhatWeDo from './sections/WhatWeDo';
import AboutToken from './sections/AboutToken';
import HowToHelp from './sections/HowToHelp';
import OurTeam from './sections/OurTeam';
import WeWorkWith from './sections/WeWorkWith';
import Roadmap from './sections/Roadmap';
import CommunityLinks from './sections/CommunityLinks';

const LandingPage: React.FC = () => {

    return (
        <div className='landing-page'>
            <TitleHead />
            <Issues />
            <WhatWeDo />
            <AboutToken />
            <HowToHelp />
            <OurTeam />
            <WeWorkWith />
            <Roadmap />
            <CommunityLinks />
        </div>
    )
}

export default LandingPage;