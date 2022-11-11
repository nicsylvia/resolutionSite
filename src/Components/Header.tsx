import React from 'react';
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-scroll";

const Header = () => {

    const [show, setShow] = React.useState(false);

	const changeHeaderColor = () => {
		if (window.scrollY >= 70) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	window.addEventListener("scroll", changeHeaderColor);

  return (
    <>
    {show ? (
        <Container bgCol='white' col='#221E63' br="" bx=" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;">
        <Wrapper>
            <Logo>
                <h1>Resolution</h1>
            </Logo>
            <Navigation>
                <Nav smooth={true} duration={500} to='home'>Home</Nav>
                <Nav smooth={true} duration={500} to='about'>About</Nav>
                <Nav smooth={true} duration={500} to='services'>Services</Nav>
                <Nav smooth={true} duration={500} to='features'>Features</Nav>
                <Nav  smooth={true} duration={500} to='blog'>Blog</Nav>
                <Nav  smooth={true} duration={500} to='contact'>Contact Us</Nav>
                <Button>
                    <IoIosArrowForward />
                    <h5>Get A Quote</h5>
                </Button>
            </Navigation>
        </Wrapper>
    </Container>
    ) : (
        <Container bgCol='#221E63' col='white' br="#221E63" bx="">
        <Wrapper>
            <Logo>
                <h1>Resolution</h1>
            </Logo>
            <Navigation>
            <Nav smooth={true} duration={500} to='home'>Home</Nav>
                <Nav smooth={true} duration={500} to='home'>About</Nav>
                <Nav smooth={true} duration={500} to='services'>Services</Nav>
                <Nav smooth={true} duration={500} to='features'>Features</Nav>
                <Nav  smooth={true} duration={500} to='blog'>Blog</Nav>
                <Nav  smooth={true} duration={500} to='contact'>Contact Us</Nav>
                <Button>
                    <IoIosArrowForward />
                    <h5>Get A Quote</h5>
                </Button>
            </Navigation>
        </Wrapper>
        </Container>
        )}
    </>
);
};

export default Header;

const Container = styled.div<{ bgCol: string; col: string; br: string; bx: string }>`
    height: 70px;
    width: 100%;
    background-color: ${(props) => props.bgCol};
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${(props) => props.br};
    color: ${(props) => props.col};
    position: sticky;
	top: 0;
	z-index: 19189;
	transition: all 350ms;
    box-shadow: ${(props) => props.bx};
`;
const Wrapper = styled.div`
    height: 50px;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
    h1{
        font-size: xx-large;
        font-weight: bolder;
    }
`;
const Navigation = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;
const Nav = styled(Link)`
    font-weight: bolder;
`;
const Button = styled.div`
    height: 50px;
    width: 150px;
    background-color:  #e6257d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 20px 0px 20px;
    cursor: pointer;
    transition: all 350ms;
    color: white;
    :hover{
        transform: scale(0.9);
        background-color: #fc8a4c;
    };
`;