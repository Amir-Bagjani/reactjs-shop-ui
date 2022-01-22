import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  font-size: 70px;
  margin-bottom: 20px;
  
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({
    textAlign: "center"
  })}
`;
const InputContainer = styled.div`
  width: 50%;
  background-color: white;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    width: "80%"
  })}
`;
const Input = styled.input`
  font-size: 16px;
  outline: none;
  border: none;
  padding: 0 20px;
  flex: 8;
`;
const Button = styled.button`
  padding-top: 3px;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export default function Newsletter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
