import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #51CCA8;
    text-align: center;
    padding: 4rem 2rem 5rem 2rem;
`;  

const Text = styled.h1`
    color: #FFF;
    font-size: 52px;
    font-weight: 400;

    :after {    
        background-color: currentColor;
        content: '';
        display: block;
        height: 3px;
        margin: 1.5rem auto;
        width: 4rem;
    }
`;

const Paragraph = styled.div`
    color: #B9EBDC;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto';
    margin: 0 0 2.5rem 0;
    line-height: 1.8;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        br {
            display: none;
        }
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Email = styled.input`
    border: none;
    outline: none;
	padding: 0 5rem 0 1rem;
	border-radius: 2px;
    height: 3rem;
    font-weight: 400;
    font-size: 1rem;
    cursor: text;
    color: #51CCA8;

    ::-webkit-input-placeholder {
    color: #BFBFBF;
   } 

   ::-ms-input-placeholder  {
    color: #BFBFBF;
   } 

   ::-moz-placeholder   {
    color: #BFBFBF;
   } 

    :focus {
        outline: #6E81D0 solid 2px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

const Button = styled.input`
    height: 3rem;
    background-color: #6E81D0;
    border: none;
    color: #FFF;
    padding: 0 2rem;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;

    :focus {
        outline: none;
    }

    :hover {
        color: #FEF102;
    }
`;

const Contact = () => {
    return (
        <Wrapper>
            <Text>TEMPUS AMET</Text>
            <Paragraph>
                Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam pede semper est, vitae luctus metus <br/>
                libero eu augue. Morbi purus sed libero, faucibus adipiscing, commodo quis, gravida lorem ipsum.
            </Paragraph>
            <Form>
                <Email placeholder="Your email address" type="email"></Email>
                <Button type="button" value="SUBCRIBE"></Button>
            </Form>
        </Wrapper>
    );
}

export default Contact;