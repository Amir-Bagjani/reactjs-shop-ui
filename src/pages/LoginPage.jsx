import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  ${tablet({
    width: "50%"
  })}
  ${mobile({
    width: "75%"
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 6px 8px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Span = styled.span`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export default function LoginPage() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Span>DO NOT YOU REMEMBER THE PASSWORD?</Span>
          <Link to="/register"><Span>CREATE A NEW ACCOUNT</Span></Link>
        </Form>
      </Wrapper>
    </Container>
  );
}
