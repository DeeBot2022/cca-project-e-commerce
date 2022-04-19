import React from "react";
import { useParams } from "react-router-dom";
import ProductScreenItem from "../components/ProductScreenItem";

export default function ProductScreen({ storeProduct }) {
  const params = useParams();
  const prodDetail = storeProduct.data.filter((x) => x.slug === params.slug);
  const item = prodDetail[0];

  return (
    <div>
      <ProductScreenItem key={item.id} item={item} />
    </div>
  );
}
