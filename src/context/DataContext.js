import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../context/products";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  
    const items = products;

  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const params = useParams();
  const prodDetail = products.data.filter((x) => x.slug === params.slug);

  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };


  
  return (
    <DataContext.Provider
      value={{
        cartBtn,
        setCartBtn,
        onAdd,
        onRemove,
        cartItems,
        items,
        prodDetail,

      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
