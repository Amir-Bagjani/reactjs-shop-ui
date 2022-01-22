import { Box, Modal, Typography } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useCartContext } from "../hooks/useCartContext";
import { mobile, tablet } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${tablet({
    padding: "10px",
  })}
`;
const Title = styled.h2`
  font-weight: 300;
  text-align: center;
  font-size: 32px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  ${mobile({
    display: "none",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  min-height: 450px;
  ${tablet({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    margin: "5px 15px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 32px;
  font-weight: 200;
  ${mobile({
    marginBottom: "20px",
  })}
`;
const Summary = styled.div`
  flex: 1;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Hr = styled.hr`
  background-color: #ccc;
  border: none;
  height: 1px;
  margin: 5px;
`;
const SummaryTitle = styled.h2`
  font-size: 32px;
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Empty = styled.div`
  width: 100%;
  height:70vh ;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: #ccc;
  font-weight: bold;
  ${mobile({
    fontSize: "32px",
  })}
`;

//modal Material-UI
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  bgcolor: 'white',
  border: 'px solid lightgray',
  boxShadow: 24,
  p: 4,
};

export default function CartPage() {
  const history = useHistory()
  const { cart, dispatch } = useCartContext();
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true)
    dispatch({type: 'CHECKOUT'})
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      {cart.count ? <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={()=>history.go(-1)}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart.count})</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={handleOpen}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.length > 0 &&
              cart.products.map((item) => (
                <div key={item.id}>
                  <Product>
                    <ProductDetail>
                      <Image src={item.img} />
                      <Details>
                        <ProductName>
                          <b>Product: </b> {item.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {item.id}
                        </ProductId>
                        <ProductColor color={item.color} />
                        <ProductSize>
                          <b>Size:</b> {item.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>

                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add style={{cursor: `pointer`}} onClick={()=>dispatch({type:'INC_ITEM', payload: item.id})} />
                        <ProductAmount>{item.quantity}</ProductAmount>
                        <Remove style={{cursor: `pointer`}} onClick={()=>dispatch({type:'DEC_ITEM', payload: item.id})} />
                      </ProductAmountContainer>
                      <ProductPrice>$ {item.quantity * item.price}</ProductPrice>
                    </PriceDetail>
                  </Product>
                  <Hr />
                  </div>
              ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.9</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.9</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleOpen}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper> : <Empty>Your cart is empty!</Empty>}
      <Footer />
      <div>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thanks for shopping
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, placeat.
          </Typography>
        </Box>
      </Modal>
      </div>
    </Container>
  );
}
