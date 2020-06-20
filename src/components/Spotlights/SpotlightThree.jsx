import React from 'react';
import styled from 'styled-components';
import classes from './SpotlightOne.module.scss';
import WOW from 'wowjs';

const Wrapper = styled.div`
    position: relative;
    height: 80vh;
    background-color: #5E92CC;
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
    width: 38%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    z-index: 5;
    padding:0 6% 0 14%;
`;

const Content = styled.div`
    /* max-height: 420px; */
    width: 100%;
    background-color: white;
    border-radius: 10px;
    display: block;
    padding: 4rem;
    text-align: left;
`;

const ContentText = styled.h3`
    font-weight: 400;
    color: #555555;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;  
    margin: 0 0 1rem 0;
`;

const Paragraph = styled.p`
    color: #888888;
    font-family: 'Roboto', sans-serif;  
    font-size: 16px;
    line-height: 1.8;
    margin: 0 0 2rem 0;
`;

const Button = styled.a`
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 600;
    display: block;
    text-align: center;
    text-decoration: none;
    background-color: #5E92CC;
    border-radius: 4px;
    padding: 0.9rem 2.5rem;
    width: 22%;

    :hover {
        cursor: pointer;
    }
`;

const SpotlightThree = () => {

    React.useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <Wrapper>
            <Inner>
                <div className={classes.imgWrapper}>
                    <img src={require('../../assets/img/SpotlightOne.jpg')} alt="" />
                </div>

                <Text className="wow fadeInUp" data-wow-duration="0.6s">
                    INTEGIS<br />
                    VITAE UNON<br />
                    LIBETUE
                </Text>

                <ContentWrapper className="wow fadeInUp" data-wow-offset="100" data-wow-duration="0.6s">
                    <Content>
                        <ContentText>
                            Morbi purus sed libero <br />
                            faucibus adipiscing
                        </ContentText>

                        <Paragraph>
                            Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam<br />
                            pede semper est, vitae luctus metus libero eu augue. Morbi purus<br />
                            sed libero, faucibus adipiscing, gravida lorem ipsum.
                        </Paragraph>

                        <Button>LEARN MORE</Button>
                    </Content>
                </ContentWrapper>
            </Inner>
        </Wrapper>
    )
}

export default SpotlightThree;