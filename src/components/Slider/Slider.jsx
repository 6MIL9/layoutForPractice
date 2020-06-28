import React from 'react';
import styled from 'styled-components';
import SliderSlick from "react-slick";
import slideOne from '../../assets/img/slideOne.jpg';
import slideTwo from '../../assets/img/slideTwo.jpg';
import slideThree from '../../assets/img/slideThree.jpg';
import Slide from './Slide';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <ArrowNext
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <ArrowPrev
            className={className}
            style={{ ...style }}
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
    background: #6E81D0;
    padding: 5rem 0 4rem 0;
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

const Slider = () => {

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: 'slick-slider-fade'
    };

    return (
        <Wrapper>
            <Inner>
                <Text>SED ADIPISCING</Text>

                <SliderSlick {...settings}>
                    <div>
                        <Slide img={slideOne} title="Feugiat lorem ipsum dolor amet"
                            firstLine="Nullam pede semper est vitae luctus metus. Magna lorem ipsum libero eu adipiscing, commodo quis, gravida lorem"
                            secondLine="ipsum. Augue morbi purus sed libero, faucibus sed tempus aliquam lorem ipsum dolor amet." />
                    </div>

                    <div>
                        <Slide img={slideTwo} title="Magna libero faucibus adipiscing" firstLine="Sed egestas, ante et vulputate lorem ipsum dolor sit amet nullam pede semper est, vitae luctus metus libero" 
                        secondLine="eu augue. Morbi purus sed libero, faucibus adipiscing, commodo quis, gravida lorem ipsum." />
                    </div>

                    <div>
                        <Slide img={slideThree} title="Aliquam feugiat sed malesuada" firstLine="Sit amet nullam pede semper est, vitae luctus metus libero eu augue. Morbi purus sed egestas, ante et vulputate" 
                        secondLine="lorem ipsum dolor sit amet nullam. Adipiscing sed nullam tempus aliquam veroeros." />
                    </div>
                </SliderSlick>
            </Inner>
        </Wrapper>
    )
}

export default Slider;