import styled from "styled-components";
import Product from "./Product";

//styles
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export default function Products({data}) {
  return (
    <Container>
      {data.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
}
