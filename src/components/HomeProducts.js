import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import Rating from "./Rating";

const Container = styled.div`
  display: flex;
  padding: 25px;
  justify-content: space-around;
  flex-wrap-wrap: flex;
`;

const Wrapper = styled.div``;
const ImgContainer = styled.div``;

const Image = styled.img`
  width: 80%;
  height: 30vh;
`;
const InfoContainer = styled.div`
  padding: 0px 20px;
`;
const Price = styled.div`
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 3px;
  font-family: "Helvetica Neue";
  color: #296d98;
`;

const ProdName = styled.p`
  margin-top: 5px;
  font-weight: 400;
  white-space: pre;
  width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Button = styled.button`
  padding: 5px;
  width: 200px;
  border: 2px solid #296d98;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  align-items: center;
  border-radius: 8px;
  
  &:hover {
    background-color: #538aac;
    color: white;
  }
`;

function HomeProducts({ product }) {
  const { onAdd } = useContext(DataContext);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Link to={`/data/${product.slug}`}>
            <Image
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
          </Link>
        </ImgContainer>
        <InfoContainer>
          <Link to={`/data/${product.slug}`}>
            <ProdName>{product.name}</ProdName>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Price>Price: ${product.price}</Price>
          <Button onClick={() => onAdd(product)}>Add to Cart</Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

export default HomeProducts;
