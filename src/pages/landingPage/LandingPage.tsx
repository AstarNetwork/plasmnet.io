import React from 'react';
import TitleHead from './sections/TitleHead';
import Issues from './sections/Issues';
import WhatWeDo from './sections/WhatWeDo';
import AboutToken from './sections/AboutToken';
import HowToHelp from './sections/HowToHelp';

const LandingPage: React.FC = () => {

    return (
        <div className='landing-page'>
            <TitleHead />

            <Issues />
            <WhatWeDo />
            <AboutToken />
            <HowToHelp />
        </div>
    )
}

export default LandingPage;