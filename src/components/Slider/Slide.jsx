import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
    height: 92vh;
    background-position: center;
    position: relative;
    background: url(${props => props.img}) center;
`;

const Content = styled.div`
    font-family: 'Roboto';
    text-align: center;
    background-color: #FFFFFF;
    bottom: 0;
    width: 100%;
    color: #555555;
    position: absolute;
    display: block;
    padding: 4rem 0 4rem 0;
`;

const ContentText = styled.h2`
    font-weight: 400; 
    font-size: 32px;
    padding: 0 2rem;

`;

const Paragraph = styled.p`
    font-weight: 400; 
    font-size: 15px;
    line-height: 2;
    margin: 0 0 2rem 0;

    @media screen and (max-width: 1024px) {
        br {
            display: none;
        }

        padding: 0 2rem;
    }
`;

const ButtonWrapper = styled.div`
    font-size: 13px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
`;

const Button = styled.a`
    display: block;
    text-align: center;
    text-decoration: none;
    background-color: #6E81D0;
    border-radius: 4px;
    padding: 0.9rem 2.5rem;
    color: #FFFFFF;
    margin: 0 auto;

    :hover {
        cursor: pointer;
    }

`;

const Slide = (props) => {
    return (
        <>
            <Img img={props.img}>
                <Content>
                    <ContentText>
                        {props.title}
                    </ContentText>

                    <Paragraph>
                        {props.firstLine} <br />
                        {props.secondLine}
                    </Paragraph>

                    <ButtonWrapper>
                        <Button>LEARN MORE</Button>
                    </ButtonWrapper>
                </Content>
            </Img>
        </>
    );
}

export default Slide;