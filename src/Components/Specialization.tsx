import React from 'react'
import styled from 'styled-components'
import image from "./Assets/dow.png"
import {GoTelescope} from "react-icons/go"
import {MdKeyboardArrowRight, MdMonitor} from "react-icons/md"
import {BsGlobe} from "react-icons/bs"

const SpecializationComp = () => {
  return (
    <Container id='services'>
        <Top>Our Specialization</Top>
        <Card></Card>
        <CardHold>
            <Card1>
                <Col>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z"
              transform="translate(100 100)"
            />
          </svg>
                    <Icon><GoTelescope /></Icon>
                </Col>
                <Stra>Strategy & Research</Stra>
                <Pa>Lorem, ipsum dolor sit amet consectetur <br />
                 adipisicing elit. Esse consectetur br<br />
                 voluptatem, molestias consequuntur <br />
                 excepturi architecto facilis reiciendis <br />
                 veniam animi minus perferendis <br />
                 praesentium laborum placeat sed?</Pa>
                 <Cir>
                    <MdKeyboardArrowRight />
                 </Cir>
            </Card1>
            <Card1>
                <Col>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z"
              transform="translate(100 100)"
            />
          </svg>
                    <Icon><MdMonitor /></Icon>
                </Col>
                <Stra>Web Development</Stra>
                <Pa>Lorem, ipsum dolor sit amet consectetur <br />
                 adipisicing elit. Esse consectetur<br />
                 voluptatem, molestias consequuntur <br />
                 excepturi architecto facilis reiciendis<br />
                 veniam animi minus perferendis <br />
                 praesentium laborum placeat sed?</Pa>
                 <Cir>
                    <MdKeyboardArrowRight />
                 </Cir>
            </Card1>
            <Card1>
                <Col>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24,-23.1C34.4,-19.8,48.5,-15.4,50.7,-8.2C52.8,-0.9,43.1,9.1,36.5,21.6C29.9,34,26.5,48.7,18.7,51.8C10.8,54.9,-1.5,46.3,-18.2,43.1C-34.9,40,-56.1,42.3,-60.3,34.8C-64.6,27.4,-52,10.2,-42,-0.6C-32,-11.5,-24.6,-16,-18,-20C-11.5,-23.9,-5.7,-27.4,0.5,-28C6.8,-28.6,13.5,-26.4,24,-23.1Z"
              transform="translate(100 100)"
            />
          </svg>
                    <Icon><BsGlobe /></Icon>
                </Col>
                <Stra>Web Solution</Stra>
                <Pa>Lorem, ipsum dolor sit amet consectetur <br />
                 adipisicing elit. Esse consectetur br<br />
                 voluptatem, molestias consequuntur <br />
                 excepturi architecto facilis reiciendis <br />
                 veniam animi minus perferendis <br />
                 praesentium laborum placeat sed?</Pa>
                 <Cir>
                    <MdKeyboardArrowRight />
                 </Cir>
            </Card1>
        </CardHold>
    </Container>
  )
}

export default SpecializationComp;

const I = styled.div`
    font-size: 25px;
    margin-top: 5px;
    
`
const Cir = styled.div`
    width: 48px;
    height: 48px;
    font-size: 25px;
    border-radius: 50px;
    border: 1px solid #F3478A;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F3478A;
    margin-top: 35px;
    transition: all 350ms;
    cursor: pointer;
    :hover{
        background-color: #EF1F76;
        color: white;
    }
`
const Pa = styled.div`
    text-align: center;
    color: #36216e;
`
const Stra = styled.h2`
    color: #1F2470;
`
const Icon = styled.div`
    position: absolute;
    font-size: 50px;
    color: white;
`
const Ime = styled.img`
    height: 100%;
    width: 100%;
`
const Col = styled.div`
    background-color:  #f395bc;;
    z-index: 1234;
    width: 150px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    transition: all 350ms;
    :hover{
        background-color: #EF1F76;
    }
`
const Card1 = styled.div`
    width: 360px;
    height: 450px;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    padding-top: 50px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
const CardHold = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`
const Card = styled.div`
    height: 8px;
    border-radius: 50px;
    width: 240px;
    background-image: linear-gradient(90deg, hsl(335, 87%, 51%), hsl(29, 99%, 67%));
`

const Top = styled.h1`
    font-size: 40px;
    color: #1F2470;
`

const Container = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
`