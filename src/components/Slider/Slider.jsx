import React from 'react';
import styled from 'styled-components';
import SliderSlick from "react-slick";
import slideOne from '../../assets/img/slideOne.jpg';
import slideTwo from '../../assets/img/slideTwo.jpg';
import slideThree from '../../assets/img/slideThree.jpg';

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <ArrowNext
            className={className}
            style={{ ...style}}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <ArrowPrev
            className={className}
            style={{ ...style}}
            onClick={onClick}
        />
    );
}

const ArrowNext = styled.div`
    :before {
    color: #FFFFFF;
    font-size: 4rem;
    position: absolute;
    right: -300%;
    }
`;

const ArrowPrev = styled.div`
    :before {
    color: #FFFFFF;
    font-size: 4rem;
    position: absolute;
    left: -300%;
    }
`;

const Wrapper = styled.div`
    height: 120vh;
    background: #6E81D0;
    padding: 5rem 0 2.5rem 0;
`;

const Inner = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 75rem;
    width: calc(100% - 6rem);
`;

const Text = styled.h1`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 52px;
    text-align: center;
    margin: 0 0 5rem 0; 

    :after {
    content: '';
    background-color: #ffffff;
    display: block;
    height: 3px;
    margin: 2rem auto;
    width: 4rem;
    }
`;

const Img = styled.div`
    height: 92vh;
    background-position: center;
    position: relative;
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
    background-color: #6E81D0;
    border-radius: 4px;
    padding: 0.9rem 2.5rem;
    width: 7%;
    color: #FFFFFF;
    margin: 0 auto;

    :hover {
        cursor: pointer;
    }
`;

const Slider = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Wrapper>
            <Inner>
                <Text>SED ADIPISCING</Text>

                <SliderSlick {...settings}>
                    <div>
                        <Img style={{
                            background: `url(${slideOne}) center`
                        }}>
                            <Content>
                                <ContentText>
                                    Feugiat lorem ipsum dolor amet 
                                </ContentText>

                                <Paragraph>
                                    Nullam pede semper est vitae luctus metus. Magna lorem ipsum libero eu adipiscing, commodo quis, gravida lorem <br />
                                    ipsum. Augue morbi purus sed libero, faucibus sed tempus aliquam lorem ipsum dolor amet.
                                </Paragraph>

                                <Button>LEARN MORE</Button>
                            </Content>
                        </Img>
                    </div>

                    <div>
                        <Img style={{
                            background: `url(${slideTwo}) center`
                        }}>
                            <Content>
                                <ContentText>
                                    Feugiat lorem ipsum dolor amet
                                </ContentText>

                                <Paragraph>
                                    Nullam pede semper est vitae luctus metus. Magna lorem ipsum libero eu adipiscing, commodo quis, gravida lorem <br />
                                    ipsum. Augue morbi purus sed libero, faucibus sed tempus aliquam lorem ipsum dolor amet.
                                </Paragraph>

                                <Button>LEARN MORE</Button>
                            </Content>
                        </Img>
                    </div>

                    <div>
                        <Img style={{
                            background: `url(${slideThree}) center`
                        }}>
                            <Content>
                                <ContentText>
                                    Feugiat lorem ipsum dolor amet  
                                </ContentText>

                                <Paragraph>
                                    Nullam pede semper est vitae luctus metus. Magna lorem ipsum libero eu adipiscing, commodo quis, gravida lorem <br />
                                    ipsum. Augue morbi purus sed libero, faucibus sed tempus aliquam lorem ipsum dolor amet. 
                                </Paragraph>

                                <Button>LEARN MORE</Button>
                            </Content>
                        </Img>
                    </div>
                </SliderSlick>
            </Inner>
        </Wrapper>
    )
}

export default Slider;