import React from 'react';
import styled from 'styled-components';
import agencyImg from "./Assets/about-banner.png";

const AgencyComp = () => {
  return (
    <Container id='about'>
        <Wrapper>
            <Image>
                <img src={agencyImg} alt="" />
            </Image>
            <AgencyContent>
                <h1>Why Our Agency</h1>
                <Stroke></Stroke>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, provident beatae, repellat asperiores sequi error esse assumenda quibusdam cumque, alias non earum explicabo sit officiis dignissimos architecto accusantium natus dolore nobis blanditiis consequatur! Sunt, at!
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat. Quos reiciendis officiis nulla beatae illo deleniti molestias distinctio eius?
                </p>
               <CardHold>
                    <Card>
                            <Num>9875</Num>
                            <Bio>Satisfied Clients</Bio>
                    </Card>
                    <Card>
                            <Num>7894</Num>
                            <Bio>Projects Launched</Bio>
                    </Card>
                    <Card>
                            <Num>75</Num>
                            <Bio>Years Completed</Bio>
                    </Card>
               </CardHold>
            </AgencyContent>
        </Wrapper>
    </Container>
  )
}

export default AgencyComp;

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 85%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Image = styled.div`
    width: 40%;
    height: 60vh;
    img{
        width: 120%;
        height: 120%;
        object-fit: contain;
        transition: all 350ms;
        :hover{
            transform: scale(0.9);
        }
    }
`;
const AgencyContent = styled.div`
    width: 50%;
    height: 60vh;
    background-color: white;
   

    h1{
        font-size: 40px;
        color: #1F2470;
    }
    p{
        color: #51558A;
    }
`;
const Stroke = styled.div`
    width: 250px;
    height: 5px;
    margin-top: -15px;
    border-radius: 10px;
    background-image: linear-gradient(to right, #F34C83, #FD9E5A);
`;
const Card = styled.div`
    width: 150px;
    height: 90px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1F2470;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
`;
const CardHold = styled.div`
    display: flex;
    justify-content: space-between;
    color: #1F2470;
    margin-top: 30px;
`;
const Num = styled.div`
    font-size: 40px;
`;
const Bio = styled.div`
`;