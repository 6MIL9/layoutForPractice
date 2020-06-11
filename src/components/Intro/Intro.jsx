import React from 'react';
import classes from './Intro.module.scss';
import styled from 'styled-components';

const Surface = styled.div`
    height: 100vh;
    background-color: #1e2731;
    opacity: 0.7;
`;


const Intro = () => {
    return (
        <div className={classes.introWrapper}>
            <Surface></Surface>
        </div>
    )
}

export default Intro;