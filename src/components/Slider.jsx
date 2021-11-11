import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { SliderInfo } from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #476072;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "leftSide" && "10px"};
    right: ${props => props.direction === "rightSide" && "10px"};
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw); 
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    ${'' /* sets the color of each slider according to their props */}
    background-color: #${props => props.bg};
`;

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 86%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

`;

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const switchSlide = (direction) => {
        if (direction === "leftSide") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    return (
        <Container>
            {/* using props to control the position of the arrows for the slider */}
            <Arrow direction="leftSide" onClick={() => switchSlide("leftSide")}>
                <KeyboardArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {/* slider 1 */}
                {SliderInfo.map((slider) => (
                    <Slide bg={slider.bg} key={slider.id}>
                        <ImageContainer>
                            <Image src={slider.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{slider.title}</Title>
                            <Description>{slider.description}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
                {/* end of slider 1 */}
            </Wrapper>
            <Arrow direction="rightSide" onClick={() => switchSlide("rightSide")}>
                <KeyboardArrowRightOutlined />
            </Arrow>
        </Container>
    )
}
