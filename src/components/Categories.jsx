import styled from "styled-components";
import Category from "./Category";
import { mobile, tablet } from "../responsive";

import { categories } from "../data";

//styles
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${tablet({
    padding: "0",
  })}
  ${mobile({
    padding: "0",
    flexDirection: "column",
  })}
`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <Category item={item} key={item.id} />
      ))}
    </Container>
  );
}
