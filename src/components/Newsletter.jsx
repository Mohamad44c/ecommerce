import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* changes from horizontal to vertical */}
    flex-direction: column;
`;


const Title = styled.h1`
    font-size: 70px;
    margin: 20px;
    letter-spacing: 3px;
`;


const Description = styled.div`
    font-size: 24px;
    letter-spacing: 3px;
    font-weight: 300;
    margin-bottom: 20px;
`;


const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    ${'' /* separates input from button */}
    justify-content: space-between;
    border: 1px solid lightgray;
`;


const Input = styled.input`
    border: none;
    font-size: 20px;
    display: flex;
    text-align: center;
    letter-spacing: 3px;
    flex: 8;
`;


const Button = styled.button`
    flex: 1;
    background-color: #63B4B8;
    color: white;
    border: none;
`;


export default function Newsletter() {
    return (
        <Container>
            <Title>Let's Stay Connected</Title>
            <Description>For More News and Exclusive Benefits!</Description>
            <InputContainer>
                <Input placeholder="Join our mailing list" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}