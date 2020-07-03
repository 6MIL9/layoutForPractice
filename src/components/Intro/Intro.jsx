import React from 'react';
import classes from './Intro.module.scss';
import styled from 'styled-components';

const Surface = styled.div`
    height: 100vh;
    background-color: #1e2731;
    opacity: 0.8;
`;

const Inner = styled.div`
    position: absolute;
    height: 495px;
    width: 595px;
    top: 55%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    color: #FFFFFF;
    font-weight: 300;   
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1280px)
    {
        top: 50%;
        height: 400px;
        width: 500px;
    }
    @media screen and (max-width: 980px)
    {
        top: 50%;
        height: 300px;
        width: 400px;
    }

    @media screen and (max-width: 480px)
    {
        top: 40%;
        height: 200px;
        width: 300px;
    }
`;

const Title = styled.h1`
    font-weight: 200;
    font-size: 56px;
    text-align: center;
    margin: 0;

    :after {
    content: '';
    background-color: #ffffff;
    display: block;
    height: 3px;
    margin: 2rem auto;
    width: 4rem;
    }

    @media screen and (max-width: 1280px)
    {
        font-size: 3.5rem;
    }
    @media screen and (max-width: 980px)
    {
        font-size: 2.75rem;
    }
`;

const Paragraph = styled.p`
    font-size: 1rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    line-height: 180%;
    padding: 0 1rem 2rem 1rem;    

    @media screen and (max-width: 1280px)
    {
        font-size: 0.9rem;
        padding: 0 0 2rem 0;    
    }
    @media screen and (max-width: 980px)
    {
        font-size: 0.9rem;
        padding: 0 0 2rem 0;    
    }
`;

const Button = styled.a`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    display: block;
    text-align: center;
    text-decoration: none;
    width:242px;
    padding-top: 15px;
    padding-bottom: 15px;
    border: solid 2px white;
    border-radius: 5px;


    :hover {
        cursor: pointer;
    }
`;


const Intro = () => {
    return (
        <div className={classes.introWrapper}>
            <Surface>
                <Inner>
                    <Title>
                        LOREM <br />
                        IPSUM DOLOR <br />
                        SIT AMET
                    </Title>

                    <Paragraph>
                        Dolor sit amet nullam pede semper est, vitae luctus metus libero eu augue.
                        Morbi purus sed libero, faucibus adipiscing, commodo.
                    </Paragraph>

                    <Button>GET STARTED</Button>
                </Inner>
            </Surface>
        </div>
    )
}

export default Intro;