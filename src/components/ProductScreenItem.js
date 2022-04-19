import Rating from "../components/Rating";
import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";
import React, { useContext, useState } from "react";
import DataContext from "../context/DataContext";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 70%;
  height: 60vh;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const ProdName = styled.h1`
  font-weight: 300;
`;
const ProductDesc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border: solid 1px #296d98;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #296d98;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 5px;
  width: 200px;
  margin-left: 50px;
  border: 2px solid #296d98;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #538aac;
    color: white;
  }
`;

function ProductScreenItem({ item }) {
  //const { item } = props;
  const { cartBtn, onAdd, onRemove } = useContext(DataContext);

  const [count, setCount] = useState([item.quantity]);



    

  

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={item.image} className="card-img-top" alt={item.name} />
        </ImgContainer>
        <InfoContainer>
          <ProdName>{item.name}</ProdName>
          <ProductDesc>{item.description}</ProductDesc>

          <Rating rating={item.rating} numReviews={item.numReviews} />
          <Price>${item.price}</Price>

          <FilterContainer>
            <FilterTitle>Color: </FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="white" />
            <FilterColor color="silver" />
            <FilterColor color="gold" />
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <FaMinus onClick={() => onRemove(item)} />
              <Amount>{count}</Amount>
              <FaPlus onClick={() => onAdd(item)} />
            </AmountContainer>
            <Button
              onClick={() => {
                onAdd(item);
                setCount(count - 1);
              }}
            >
              {cartBtn}
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

export default ProductScreenItem;
