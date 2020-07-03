import React from 'react';
import styled from 'styled-components';
import WOW from 'wowjs';
import img from "../../assets/img/SpotlightThree.jpg";

const Wrapper = styled.div`
    position: relative;
    height: 80vh;
    background-color: #5E92CC;

    @media screen and (max-width: 1024px)
    {
        height: 95vh;
    }

    @media screen and (max-width: 625px)
    {
        height: 100vh;
    }

    @media screen and (max-width: 550px)
    {
        height: 120vh;
    }

    @media screen and (max-width: 460px)
    {
        height: 130vh;
    }


    @media screen and (max-width: 390px)
    {
        height: 100vh;
    }
`;

const Inner = styled.div`
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;

    @media screen and (max-width: 1024px)
    {
        flex-direction: column;
        justify-content: start;
    }
`;

const Img = styled.div`
    height: 100%;
    width: 45%;
    background: url(${props => props.img});

    @media screen and (max-width: 1024px)
    {
        width: 100%;
        height: 30%;
        order: 0;
        background-position: 50% 50%;
    }
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

    @media screen and (max-width: 1024px)
    {
        padding: 4rem 2rem 2rem 2rem;
        order: 1;
        height: 4rem;
        display: block;
        width: 100%;
        font-size: 48px;
        text-align: center;
        margin: 0;

        br {
            display: none;
        }
    }

    @media screen and (max-width: 625px)
    {
        padding: 2rem 2rem;
        order: 1;
        max-height: 8rem;
        display: block;
        width: 100%;
        font-size: 48px;
        text-align: center;
        margin: 0;

        br {
            display: none;
        }
    }
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

    @media screen and (max-width: 1024px)
    {
        max-height: 45%;
        width: 100%;
        padding: 0;
        bottom: 0;
        order: 3;
    }

    @media screen and (max-width: 550px)
    {
        max-height: 50%;
    }
`;

const Content = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    display: block;
    padding: 4rem;
    text-align: left;

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 100%;
        max-height: 100%;
        border-radius: 0;
        text-align: center;
        padding: 0 2.5rem;
        br {
            display: none;
        }
    }

    @media screen and (max-width: 1366px) {
        border-radius: 0;
        text-align: center;

        br {
            display: none;
        }
    }
`;

const ContentText = styled.h3`
    font-weight: 400;
    color: #555555;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;  
    margin: 0 0 1rem 0;

    @media screen and (max-width: 1366px) {
        padding-top: 6rem;
    }

    @media screen and (max-width: 1024px)
    {
        padding-top: 3rem;
    }
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

    @media screen and (max-width: 1366px) {
        margin: 0 auto;
    }
`;

const SpotlightThree = () => {

    React.useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <Wrapper>
            <Inner>
                <Img img={img}/>

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

export default SpotlightThree;