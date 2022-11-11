import React from 'react';
import styled from 'styled-components';
import heropic from "./Assets/hero-banner.png";

const Hero = () => {
  return (
   <Container>
    <Wrapper>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" >
            </path>
        </svg>
    </Wrapper>
    <Content>
        <Text>
            <h5>We are Web Developers from Nigeria</h5>
            <h1>We build and Deploy <br /> websites that Users <br /> Love</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Assumenda, <br /> laboriosam. Ad quas odio quibusdam iure  reiciendis sapiente, rerum <br />ducimus perspiciatis.</p>
            <Button>
                    Learn More
                </Button>
        </Text>
        <Image>
            <HeroImg src={heropic} />
        </Image>
    </Content>
   </Container>
  )
}

export default Hero;

const Container = styled.div`
    height: 780px;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;
const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg{
        position: relative;
        display: block;
        width: calc(297% + 1.3px);
        height: 780px;
        transform: rotateY(180deg);
    }
    path{
        fill: #181E5E;
    }
`;
const Content = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    margin-top: 70px;
    
`;
const Text = styled.div`
    color: white;
    h5{
        color: #FF9D41;
        font-size: 25px;
    }
    h1{
        font-size: 45px;
        line-height: 60px;
        width: 500px;
    }
    p{
        width: 500px;
    }
`;
const Image = styled.div``;
const HeroImg = styled.img`
    height: 100%;
	width: 100%;
	object-fit: contain;
    transition: all 350ms;
    :hover{
        transform: scale(0.9);
    }
`;
const Button = styled.div`
    height: 50px;
    width: 150px;
    background-color: #E6257D;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    border-radius: 0px 20px 0px 20px;
    cursor: pointer;
    transition: all 350ms;
    :hover{
        transform: scale(0.9);
        background-image: linear-gradient(to-right, rgba(230, 37, 125, 1) 49,rgba(242, 112, 4, 1) 94%,);
    };
`;