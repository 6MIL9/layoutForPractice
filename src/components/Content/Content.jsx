import React from 'react';
import Intro from '../Intro/Intro';
import SpotlightOne from '../Spotlights/SpotlightOne';
import SpotlightTwo from '../Spotlights/SpotlightTwo';
import SpotlightThree from '../Spotlights/SpotlightThree';
import Slider from '../Slider/Slider';
import ImgList from '../ImgList/ImgList'
import Contact from '../Contact/Contact';
import Footer from './../Footer/Footer';

const Content = () => {
    return (
        <div>
            <Intro/>
            <SpotlightOne/>
            <SpotlightTwo/>
            <SpotlightThree/>
            <Slider/>
            <ImgList/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Content;