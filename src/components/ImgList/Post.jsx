import React from 'react';
import styled from 'styled-components';

const ImgWrapper = styled.div`
    display: block; 
    overflow: hidden;
    width: 100%;
    height: 18rem;
`;

const Img = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background: url(${props => props.img}) center;
    display: block;
    box-shadow: 0 0 0.5rem 0 rgba(191,191,199,1);
    transition: 0.3s;

    :hover {
        transform: scale(1.1);
    }
`;

const Content = styled.div`
    font-family: 'Roboto';
    text-align: center;
    background-color: #FFFFFF;
    color: #555555;
    display: block;
    padding: 1rem 3rem 2rem 3rem;
    text-align: center;
    box-shadow: 0 0 0.5rem 0 rgba(191,191,199,1);
`;

const ContentText = styled.h2`
    font-weight: 400; 
    font-size: 32px;
`;

const Paragraph = styled.p`
    font-weight: 400; 
    font-size: 15px;
    line-height: 2;
    margin: 0 0 2rem 0;
`;

const Button = styled.a`
    font-size: 13px;
    font-weight: 600;
    display: block;
    text-align: center;
    text-decoration: none;
    background-color: ${props => props.color};
    border-radius: 4px;
    padding: 0.9rem 2.5rem;
    width: 17%;
    color: #FFFFFF;
    margin: 0 auto;

    :hover {
        cursor: pointer;
    }
`;

const Post = (props) => {
    return (
        <>
            <ImgWrapper>
            <Img img={props.img}></Img>
            </ImgWrapper>
            <Content>
                <ContentText>
                    {props.title}
                </ContentText>

                <Paragraph>
                    {props.firstLine}<br />
                    {props.secondLine}<br />
                    {props.thirdLine}
                </Paragraph>

                <Button color={props.color}>LEARN MORE</Button>
            </Content>
        </>
    );
}

export default Post;