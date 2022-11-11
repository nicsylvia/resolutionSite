import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
// import heart from "../Asset/love.svg";
import blog1 from "./Assets/blog-1.jpg"
import blog2 from "./Assets/blog-2.jpg"
import blog3 from "./Assets/blog-3.jpg"
import blog4 from "./Assets/blog-4.jpg"

const Slide = () => {
  return (
    <div>
      <Container id="blog">
      <Top2>Our Blog & News</Top2>
        <Card1></Card1>
        <Wrapper>
          <Right>
            <Icon>
              {/* <img src={heart} alt="" /> */}
            </Icon>
            <Title>
              <h1>For Impact</h1>
            </Title>
            <Txt>
              <p>
                Working with some of the top social impact funding partners like
                <br /> HP, Act Foundation, we have taken talent development to
                over 60
                <br /> new cities and locations
              </p>
            </Txt>
            <Button>
              <p>Get Started</p>
              <AiOutlineArrowRight />
            </Button>
          </Right>
          <Left>
            <Image src={blog1} />
            <TextHolder>
              <Text>
                <h1>25k</h1>
                <p>Students Trained</p>
              </Text>
              <Text>
                {" "}
                <h1>95%</h1>
                <p>Training Completed</p>
              </Text>
              <Text>
                <h1>35</h1>
                <p>Major Partners</p>
              </Text>
            </TextHolder>
          </Left>
        </Wrapper>
        <Wrapper>
          <Right>
            <Icon>
              {/* <img src={heart} alt="" /> */}
            </Icon>
            <Title>
              <h1>For Business</h1>
            </Title>
            <Txt>
              <p>
              Premium skills learning across the entire digital product lifecycle: data, design, development, marketing, and product management.
              </p>
            </Txt>
            <Button>
              <p>Get Started</p>
              <AiOutlineArrowRight />
            </Button>
          </Right>
          <Left>
            <Image src={blog1} />
            <TextHolder>
              <Text>
                <h1>20k</h1>
                <p>Students Trained</p>
              </Text>
              <Text>
                {" "}
                <h1>75%</h1>
                <p>Training Completed</p>
              </Text>
              <Text>
                <h1>75</h1>
                <p>Major Partners</p>
              </Text>
            </TextHolder>
          </Left>
        </Wrapper>
        <Wrapper>
          <Right>
            <Icon>
              {/* <img src={heart} alt="" /> */}
            </Icon>
            <Title>
              <h1>For Individual</h1>
            </Title>
            <Txt>
              <p>
              We are a Technology Workforce Development company that helps people learn premium technology skills virtually and partners with companies to hire the best talents and invest in workforce development. Currently with learners from 19 countries.
              </p>
            </Txt>
            <Button>
              <p>Get Started</p>
              <AiOutlineArrowRight />
            </Button>
          </Right>
          <Left>
            <Image src={blog3} />
            <TextHolder>
              <Text>
                <h1>15k</h1>
                <p>Students Trained</p>
              </Text>
              <Text>
                {" "}
                <h1>95%</h1>
                <p>Training Completed</p>
              </Text>
              <Text>
                <h1>55</h1>
                <p>Major Partners</p>
              </Text>
            </TextHolder>
          </Left>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Slide;

const Container = styled.div`
   width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #181E5E; */
`;
const Card1 = styled.div`
    height: 8px;
    border-radius: 50px;
    width: 150px;
    background-image: linear-gradient(90deg, hsl(335, 87%, 51%), hsl(29, 99%, 67%));
`

const Top2 = styled.h1`
    font-size: 40px;
    color: #1F2470;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 20px;
`;
const Right = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Icon = styled.div`
  margin-top: 10vh;
  display: flex;
  align-items: center;

  img {
    height: 10vh;
   
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
`;
const Txt = styled.div`
  letter-spacing: 0.8px;
`;
const Button = styled.div`
  margin-top: 5vh;
  display: flex;
  align-items: center;
  color: blue;

  p {
    margin-right: 10px;
    font-size: 1.3rem;
    color: #1F2470;
  }
`;

const Left = styled.div`
  padding: 20px;
  display: flex;
  margin-bottom: 50px;
  position: relative;
`;
const Image = styled.img`
  margin-top: 10vh;
  width: 30vw;
  height: 60vh;
  border-radius: 20px;
  transition: all 350ms;
 :hover{
  filter: grayscale(1);
  transform: scale(0.9);
 }
`;
const TextHolder = styled.div`
  width: 50%;
  height: 14vh;
  border-radius: 20px;
  background-color: #3C2371;
  display: flex;
  align-items: center;
  padding: 20px;
  position: absolute;
  bottom: 0;
  right: 50px;
`;
const Text = styled.div`
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 600;

  h1 {
    margin: 0;
  }
`;
