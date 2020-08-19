import React from 'react';
// import TitleHead from './sections/TitleHead';
import Title from './sections/Title';
import Issues from './sections/Issues';
import WhatWeDo from './sections/WhatWeDo';
import AboutToken from './sections/AboutToken';
import HowToHelp from './sections/HowToHelp';
//import OurTeam from './sections/OurTeam';
import WeWorkWith from './sections/WeWorkWith';
import Roadmap from './sections/Roadmap';
import CommunityLinks from './sections/CommunityLinks';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationMessage from '../../components/NotificationMessage';
import { BlogLinks } from '../../database/links';
import SocialButtons from '../../components/SocialButtons';

// toast content
const toastContent = (): JSX.Element => {
    return (
        <NotificationMessage
            message="Our lockdrop is about to launch!"
            gotoUrl={BlogLinks.lockdropIntroduction}
            btnName="Learn More"
        />
    );
};

// this will run as soon as the component is mounted when there is content
if (!toastContent) {
    //Currently not used.(!)
    // toast configuration
    toast.configure();
    toast.info(toastContent, {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
    });
}

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <Title />
            <SocialButtons />
            <Issues />
            <WhatWeDo />
            <AboutToken />
            <HowToHelp />
            {/* <OurTeam /> */}
            <WeWorkWith />
            <Roadmap />
            <CommunityLinks />
        </div>
    );
};

export default LandingPage;
