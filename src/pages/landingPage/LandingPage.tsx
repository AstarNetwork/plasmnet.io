import React from 'react';
import TitleHead from './sections/TitleHead';
import AboutPlasm from './sections/AboutPlasm';

const LandingPage: React.FC = () => {

    return (
        <div className='landing-page'>
            <TitleHead />
            <AboutPlasm />
        </div>
    )
}

export default LandingPage;