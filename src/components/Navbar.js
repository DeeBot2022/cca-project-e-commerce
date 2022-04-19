import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  RiSearchEyeLine,
  RiMailFill,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { mobileScreenSize, tabletScreenSize } from "../responsiveness";
import DataContext from "../context/DataContext";
import { useContext } from "react";


const Container = styled.div`
  height: 60px;
  margin-bottom: 50px;
  ${mobileScreenSize({ height: "50px" })}
  ${tabletScreenSize({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobileScreenSize({ padding: "10px 0px" })}
  ${tabletScreenSize({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobileScreenSize({ display: "none" })}
  ${tabletScreenSize({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-item: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobileScreenSize({ width: "50px" })}
  ${tabletScreenSize({ width: "50px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobileScreenSize({ flex: 2, justifyContent: "center" })}
  ${tabletScreenSize({ flex: 2, justifyContent: "center" })}
`;
const CountInCart = styled.div`
border-radius: 50%;
background-color: green;
padding: 12px;
position: absolute;
top: 2.5%;
transform: translate(-100%);
color: white;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobileScreenSize({ fontSize: "12px", marginLeft: "10px" })}
  ${tabletScreenSize({ fontSize: "12px", marginLeft: "10px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-size: 50px;
  cursor: pointer;
  font-family: verdana;
  ${mobileScreenSize({ fontSize: "15px" })}
  ${tabletScreenSize({ fontSize: "15px" })}
`;

function Navbar() {

  const { cartItems } = useContext(DataContext);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <RiSearchEyeLine style={{ fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
            <Center>
              <Logo>Cleo MetaShop</Logo>
            </Center>
          </Link>
          <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
            <Link to={`/Cart`}>
              <RiShoppingCart2Line />
              <CountInCart>{cartItems.length}</CountInCart>
            </Link>
            </MenuItem>
            <MenuItem>
              <RiMailFill  />
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Navbar;
