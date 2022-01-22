import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({
    display: "none",
  })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    backgroundColor: "#e8f8f8",
  })}
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px; ;
`;
const Payment = styled.img`
  width: 50%;
`;

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>SHOP</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          ullam aliquam quae consequuntur vel a rerum minus doloribus doloremque
          fuga! Odio dolore distinctio nesciunt perferendis tempore asperiores
          debitis laboriosam explicabo.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline /> contact@shop.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
