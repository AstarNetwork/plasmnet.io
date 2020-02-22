import React from 'react';
import TitleHead from './sections/TitleHead';
import Issues from './sections/Issues';
import WhatWeDo from './sections/WhatWeDo';

const LandingPage: React.FC = () => {

    return (
        <div className='landing-page'>
            <TitleHead />
            <Issues />
            <WhatWeDo />
        </div>
    )
}

export default LandingPage;