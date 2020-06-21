import React from 'react';
import Intro from '../Intro/Intro';
import SpotlightOne from '../Spotlights/SpotlightOne';
import SpotlightTwo from '../Spotlights/SpotlightTwo';
import SpotlightThree from '../Spotlights/SpotlightThree';
import Slider from '../Slider/Slider';

const Content = () => {
    return (
        <div>
            <Intro/>
            <SpotlightOne/>
            <SpotlightTwo/>
            <SpotlightThree/>
            <Slider/>
        </div>
    )
}

export default Content;