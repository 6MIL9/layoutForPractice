import React from 'react';
import styled from 'styled-components';
import classes from './SpotlightOne.module.scss';

const Wrapper = styled.div`
    height: 80vh;
    background-color: #51CCA8;
`;


const SpotlightOne = () => {
    return (
        <Wrapper>
            <div className={classes.img}></div>
        </Wrapper>
    )
}

export default SpotlightOne;