import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import classes from './SpotlightOne.module.scss';

const Wrapper = styled.div`
    height: 80vh;
    background-color: #51CCA8;
`;

const Inner = styled.div`
    height: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`;

const SpotlightOne = () => {

    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    let Flag = null;

    let ViewportH = window.innerHeight;


    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // const Px = () => {
    //     console.log(scroll);
    //     console.warn(ViewportH);
    //     if ((scroll * 4) >= ViewportH) {
    //         console.warn(true);
    //         Flag=true;
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // }

    // Px();

    // if ((scroll * 4) >= ViewportH) {
    //     Flag = true;
    // }

    return (
        <Wrapper>
            <div className={classes.img}></div>
            {/* {Flag && <div>sss</div>} */}
            <Inner/>
        </Wrapper>
    )
}

export default SpotlightOne;