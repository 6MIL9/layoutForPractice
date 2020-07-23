import React from 'react';
import styled from 'styled-components';
import WOW from 'wowjs';
import img from "../../assets/img/SpotlightTwo.jpg";

const Wrapper = styled.div`
    height: 80vh;
    position: block;
    background-color: #51B9CC;
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
    background: url(${props => props.img}) no-repeat top;
    background-size: cover; 

    @media screen and (max-width: 1024px)
    {
        width: 100%;
        height: 70vh;
        order: 0;
        background-position: 50% 35%;
    }

    @media screen and (max-width: 320px)
    {
        min-width: 320px;
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
    padding: 0 6rem;
    margin: 0;
    order: -1;   


    @media screen and (max-width: 1024px)
    {
        width: auto;
        height: auto;
        padding: 2rem;
        margin: 0 auto;
        font-size: 2rem;
        display: inline-block;
        text-align: center;
        min-width: 320px;

        br {
            display: none;
        }
    }
`;

const ContentWrapper = styled.div`
    width: 38%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 5;
    padding:0 14% 0 6%;
    right: 0;

    @media screen and (max-width: 1024px)
    {
        width: 100%;
        padding: 0;
        bottom: 0;
        order: 3;
        position: relative;
    }
    
`;

const Content = styled.div`
    max-height: 50%;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    display: block;
    padding: 4rem;
    text-align: left;
    
    @media screen and (max-width: 1366px) {
        height: 100%;
        border-radius: 0;
        text-align: center;
        
        br {
            display: none;
        }
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        max-height: 100%;
        padding: 0 2.5rem;

        br {
            display: none;
        }
    }

    @media screen and (max-width: 480px)
    {
        padding: 0 1rem; 
    }
`;

const ContentText = styled.h3`
    font-weight: 400;
    color: #555555;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;  
    margin: 0 0 1rem 0;
    padding-top: 3rem; 

    @media screen and (max-width: 1024px) {
        padding-top: 2rem; 
    }
    
    @media screen and (max-width: 480px)
    {
        width: 320px;
        margin: 0 auto 1rem auto;
    }
`;

const Paragraph = styled.p`
    color: #888888;
    font-family: 'Roboto', sans-serif;  
    font-size: 16px;
    line-height: 1.8;
    margin: 0 0 2rem 0;
    display: block;

    @media screen and (max-width: 480px)
    {
        font-size: 14px;
        width: 320px;
        margin: 0 auto 2rem auto;
    }
`;

const Button = styled.a`
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 600;
    display: block;
    text-align: center;
    text-decoration: none;
    background-color: #51CCA8;
    border-radius: 4px;
    padding: 0.9rem 2.5rem;
    width: 22%;
    :hover {
        cursor: pointer;
    }
    @media screen and (max-width: 1366px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 1024px) {
        margin-bottom: 2rem; 
    }

    @media screen and (max-width: 480px)
    {
        width: 320px;
        margin: 0 auto 2rem auto;
    }
`;
const SpotlightTwo = () => {

    React.useEffect(() => {
        new WOW.WOW().init();
    }, []);

    return (
        <Wrapper>
            <Inner>
                <Img img={img} />

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