import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
${'' /* same size images */}
    flex:1;
    margin:3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width:100%;
    height:100%;
    ${'' /* to keep the image from squeezing */}
    object-fit: cover;
    ${mobile({ height: "70vh" })}
`;

const Info = styled.p`
    position: absolute;
    width:100%;
    height:100%;
    ${'' /* positioning info to top left side of image */}
    top: 0;
    left: 0;
    ${'' /* info centers inside the image */}
    display: flex;
    ${'' /* flex-direction will position items vertically */}
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: white;
    margin: 20px;
    letter-spacing: 3px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #63B4B8;
    letter-spacing: 3px;
    font-weight: bold;
    border-radius: 5%;
    cursor: pointer;
`;
export default function Category({ product }) {
    return (
        <Container>
            <Image src={product.productImg} />
            <Info>
                <Title>{product.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}