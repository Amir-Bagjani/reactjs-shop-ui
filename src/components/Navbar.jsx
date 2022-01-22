import { Badge } from "@material-ui/core";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";
import { useCartContext } from "../hooks/useCartContext";

//styles
const Container = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  ${tablet({
    height: "50px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tablet({
    padding: "10px 10px 10px 2px",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${tablet({
    display: "none",
  })}
`;
const Search = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${tablet({
    width: "50px",
  })}
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${tablet({
    fontSize: "24px",
    textAlign: "right",
  })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({
    justifyContent: "center",
    flex: 2,
  })}
`;
const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

const Navbar = () => {
  const { cart } = useCartContext()
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <Search>
            <Input placeholder="Search" />
            <SearchOutlined style={{ color: `gray`, fontSize: 16 }} />
          </Search>
        </Left>
        <Center>
          <Link to="/">
            <Logo>SHOP</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart">
              <Badge color="primary" badgeContent={cart.count}>
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
