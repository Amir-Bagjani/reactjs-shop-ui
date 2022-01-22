import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile, tablet } from "../responsive";
import { useParams } from "react-router-dom";
import { popularProducts } from '../data'
import { useState, useEffect } from "react";
import { useCartContext } from '../hooks/useCartContext'
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${tablet({
    padding: "10px",
  })}
  ${mobile({
    flexDirection: "column",
  })}
`;
const ImgContainer = styled.div`
  flex: 1;
  ${tablet({
    flex: 1.5,
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${tablet({
    padding: "0 20px",
  })}
  ${mobile({
    padding: "10px",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${tablet({
    height: "80vh",
  })}
  ${mobile({
    height: "40vh",
  })}
`;
const Title = styled.h2`
  font-weight: 200;
  font-size: 32px;
`;
const Desc = styled.p`
  margin: 20px 0;
  line-height: 1.4;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${tablet({
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 4px 5px;
  font-size: 14px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({
    width: "100%",
  })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-radius: 10px;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  cursor: pointer;
  background-color: white;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export default function ProductPage() {
  const { dispatch } = useCartContext()
  const { id } = useParams()
  const data = popularProducts.filter(i => i.id.toString() === id.toString())[0]
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(``);
  const [size, setSize] = useState(``);

  const handleClick = () => {
   if(color !== `` && size !== ``){
    const add = {title: data.title, id: data.id, size , color, quantity, price: data.price, img: data.img};
    dispatch({type: 'ADD', payload: add})
    return
   }
   alert(`Please choose a color and size!`)
  }

  //go to top of page when render
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
 

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={data.img} />
        </ImgContainer>``

        <InfoContainer>
          <Title>{data.title}</Title>
          <Desc>
          {data.desc}
          </Desc>
          <Price>$ {data.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {data.color.map(item => (
                <FilterColor key={item} color={item} onClick={()=>setColor(item)} />
              ))}
            </Filter>

            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize  onChange={(e)=>setSize(e.target.value)}>
              <FilterSizeOption value="" >Size</FilterSizeOption>
              {data.size.map(item => (
                <FilterSizeOption value={item} key={item}>{item}</FilterSizeOption>
              ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>setQuantity(quantity>1 ? quantity-1 : 1)} style={{cursor: `pointer`}} />
              <Amount>{quantity}</Amount>
              <Add onClick={()=>setQuantity(quantity+1 )} style={{cursor: `pointer`}} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
