import { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive"

const Container = styled.div`
  width: 100%;
  overflow-y: hidden;
  height: calc(100vh - 90px);
  overflow-x: hidden;
  display: flex;
  position: relative;
  ${tablet({
    height: "60vh"
  })}
  ${mobile({
    display: "none"
  })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  /* align-items: center; */
  transition: all 1s ease-in-out;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit:contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h2`
  font-size: 70px;
  ${tablet({
    fontSize: "40px"
  })}
`;
const Desc = styled.p`
  margin: 50px 0;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 20px;
  ${tablet({
    fontSize: "16px"
  })}
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${tablet({
    padding: "8px"
  })}
`;

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left")
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slide) => (
          <Slide bg={slide.bg} key={slide.id}>
            <ImgContainer>
              <Image src={slide.img} />
            </ImgContainer>

            <InfoContainer>
              <Title>{slide.title}</Title>
              <Desc>{slide.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}
