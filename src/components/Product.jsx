import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";
import { useHistory } from "react-router-dom";

//styles
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;
const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
`;
const Image = styled.img`
  height: 70%;
  z-index: 2;
`;
const Info = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  margin: 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

export default function Product({ item }) {
  const { dispatch } = useCartContext()
  const history = useHistory()
  const addCart = () => {
    const add = {title: item.title, id: item.id, size: "sm" , color: "black", quantity: 1, price: item.price, img: item.img};
    dispatch({type: 'ADD', payload: add})
    history.push("/cart")
  }
  
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={addCart}>
          <ShoppingCartOutlined />
        </Icon>
        <Link to={`/product/${item.id}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
}
