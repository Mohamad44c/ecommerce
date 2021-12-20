import styled from "styled-components";


const Container = styled.div`
    height: 50px;
    background-color: #63B4B8;
    color: white;
    display: flex;
    ${'' /* vertical centering */}
    align-items: center;
    ${'' /* horizontal centering */}
    justify-content: center;
    font-weight: bold;
    ${'' /* font-size: 14px; */}
`;



export default function Announcement() {
    return (
        <Container>
            Free Shipping for purchases over $ 95
        </Container>
    )
}
