import styled from "styled-components";
import { Facebook, Instagram, Pinterest, Room, Phone, Email } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    letter-spacing: 3px;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialMediaContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px; 
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
    letter-spacing: 3px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    letter-spacing: 3px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#D7E9F7" })}
`;

const ContactItem = styled.div`
    letter-spacing: 3px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;


export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>Matte.</Logo>
                <Description>Matte is a brand dedicated exclusively to men.<br />
                    Our collection of clothing are essentials for a mans wardrobe. </Description>
                <SocialMediaContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialMediaContainer>
            </Left>
            <Center>
                <Title>Customer Service</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Bag</ListItem>
                    <ListItem>Mens Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Track My Order</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Return Policy</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact Us</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} />Downtown Beirut, Lebanon</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} />+961 78 80999</ContactItem>
                <ContactItem><Email style={{ marginRight: "10px" }} />Matte@info.com</ContactItem>
            </Right>
        </Container>
    )
}
