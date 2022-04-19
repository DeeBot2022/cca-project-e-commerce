import React from "react";
//import products from "../components/Products";
import HomeProducts from "../components/HomeProducts";
import styled from "styled-components";

const Title = styled.h1`
  font-weight: 200;
`;
const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 25px;
justify-content: space-between;
`;

function HomeScreen({ storeProduct}) {
  //const { storeProduct } = props;


  return (
    <div>
      <div>
        <Title>Feature Products:</Title>
      </div>
      <Container>
      {storeProduct.data.map((product) => (
        <div key={product.slug}>
          <HomeProducts product={product} ></HomeProducts>
        </div>
      ))}
      </Container>
    </div>
  );
}

export default HomeScreen;
