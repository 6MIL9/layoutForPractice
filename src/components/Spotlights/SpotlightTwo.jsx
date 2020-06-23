import React from 'react';
import styled from 'styled-components';
import classes from './SpotlightTwo.module.scss';
import WOW from 'wowjs';

const Wrapper = styled.div`
    position: relative;
    height: 80vh;
    background-color: #51B9CC;
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
    padding:0 0 0 9rem;
    order: -1;   
`;

const ContentWrapper = styled.div`
    width: 38%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    z-index: 5;
    right: 0;
    padding:0 14% 0 6%;
`;

const Content = styled.div`
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
    background-color: #51B9CC;
    border-radius: 4px;
    padding: 0.9rem 2.5rem;
    width: 22%;

    :hover {
        cursor: pointer;
    }
`;

const SpotlightTwo = () => {

    React.useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <Wrapper>
            <Inner>
                <div className={classes.imgWrapper}>
                    <img src={require('../../assets/img/SpotlightOne.jpg')} alt="" />
                </div>

                <Text className="wow fadeIn" data-wow-duration="1s">
                    INTEGIS<br />
                    VITAE UNON<br />
                    LIBETUE
                </Text>

                <ContentWrapper className="wow fadeIn" data-wow-offset="100" data-wow-duration="1s">
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

export default SpotlightTwo;