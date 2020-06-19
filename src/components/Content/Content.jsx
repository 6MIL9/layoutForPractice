import React from 'react';
import Intro from '../Intro/Intro';
import SpotlightOne from '../Spotlights/SpotlightOne';
import SpotlightTwo from '../Spotlights/SpotlightTwo';
import SpotlightThree from '../Spotlights/SpotlightThree';

const Content = () => {
    return (
        <div>
            <Intro/>
            <SpotlightOne/>
            <SpotlightTwo/>
            <SpotlightThree/>
        </div>
    )
}

export default Content;