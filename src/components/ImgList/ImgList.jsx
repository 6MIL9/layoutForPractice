import React from 'react';
import styled from 'styled-components';
import postOne from '../../assets/img/postOne.jpg';
import postTwo from '../../assets/img/postTwo.jpg';
import postThree from '../../assets/img/postThree.jpg';
import postFour from '../../assets/img/postFour.jpg';
import Post from './Post.jsx'

const Wrapper = styled.div`
    height: 200vh;
    background: #FFFFFF;
    color: #555555;
    padding: 3rem 0 1.5rem 0;
`;

const Text = styled.h1`
    text-align: center;
    font-size: 52px;
    font-weight: 400;
    padding-bottom: 1rem;
    :after {
        background-color: currentColor;
        content: '';
        display: block;
        height: 3px;
        margin: 1.5rem auto;
        width: 4rem;
    }
`;

const Inner = styled.div`
    margin: 0 auto;
    max-width: 75rem;
    width: calc(100% - 6rem);
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
`;

const ItemOne = styled.div`
    border-radius: 6px;
    text-align: center;
    width: calc(50% - 1.5rem);
    padding: 0 1.5rem 1.5rem 0; 
    overflow: hidden;
`;

const ItemTwo = styled.div`
    border-radius: 6px;
    text-align: center;
    width: calc(50% - 1.5rem);
    padding: 0 0 1.5rem 1.5rem; 
`;

const ItemThree = styled.div`
    border-radius: 6px;
    text-align: center;
    width: calc(50% - 1.5rem);
    padding: 1.5rem 1.5rem 0 0; 
`;

const ItemFour = styled.div`
    border-radius: 6px;
    text-align: center;
    width: calc(50% - 1.5rem);
    padding: 1.5rem 0 0 1.5rem; 
`;

const ImgList = () => {
    return (
        <Wrapper>
            <Inner>
                <Text>ANTE LIBERO</Text>
                <List>
                    <ItemOne>
                        <Post color="#51CCA8" title="Sed faucibus" firstLine="Sed egestas, ante et vulputate lorem ipsum sed dolor sit amet" 
                        secondLine="Morbi purus sed libero, faucibus adipiscing, commodo quis." 
                        thirdLine="Lorem ipsum dolor sit amet nullam sed adipiscing." img={postOne}/>
                    </ItemOne>
                    <ItemTwo>
                        <Post color="#51B9CC" title="Morbi commodo" firstLine="Sed egestas, ante et vulputate lorem ipsum sed dolor sit amet" 
                        secondLine="Morbi purus sed libero, faucibus adipiscing, commodo quis." 
                        thirdLine="Lorem ipsum dolor sit amet nullam sed adipiscing." img={postTwo}/>
                    </ItemTwo>
                    <ItemThree>
                        <Post color="#5E92CC" title="Tempus lorem" firstLine="Sed egestas, ante et vulputate lorem ipsum sed dolor sit amet" 
                        secondLine="Morbi purus sed libero, faucibus adipiscing, commodo quis." 
                        thirdLine="Lorem ipsum dolor sit amet nullam sed adipiscing." img={postThree}/>
                    </ItemThree>
                    <ItemFour>
                        <Post color="#6E81D0" title="Libero adipiscing" firstLine="Sed egestas, ante et vulputate lorem ipsum sed dolor sit amet" 
                        secondLine="Morbi purus sed libero, faucibus adipiscing, commodo quis." 
                        thirdLine="Lorem ipsum dolor sit amet nullam sed adipiscing." img={postFour}/>
                    </ItemFour>
                </List>
            </Inner>
        </Wrapper >
    )
}

export default ImgList;