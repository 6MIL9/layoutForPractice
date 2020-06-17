import React from 'react';
import styled from 'styled-components';
import classes from './SpotlightOne.module.scss';
import WOW from 'wowjs';

const Wrapper = styled.div`
    position: relative;
    height: 80vh;
    background-color: #51CCA8;
`;

const Inner = styled.div`
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
`;

const Text = styled.h1`
    width: 30%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 54px;
    padding:0 6rem;
`;

const ContentWrapper = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    z-index: 5;
    padding:0 6% 0 20%;
`;

const Content = styled.div`
    height: 470px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    display: block;
    padding: 2rem;
`;

const ContentText = styled.h3`
    font-weight: 400;
    color: #555555;
    font-size: 32px;
`;

const SpotlightOne = () => {

    React.useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <Wrapper>
            <Inner>
                <div className={classes.imgWrapper}>
                    <img src={require('../../assets/img/SpotlightOne.jpg')} alt="" />
                </div>

                <Text className="wow fadeInUp" data-wow-duration="0.8s">
                    INTEGIS<br />
                    VITAE UNON<br />
                    LIBETUE
                </Text>

                <ContentWrapper className="wow fadeInUp" data-wow-offset="100" data-wow-duration="0.8s">
                    <Content>
                        <ContentText>FACK</ContentText>
                    </Content>
                </ContentWrapper>
            </Inner>
        </Wrapper>
    )
}

export default SpotlightOne;