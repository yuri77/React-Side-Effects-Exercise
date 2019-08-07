import React from "react";

function ItemList(props) {
  return (
    <div>
      {props.list.map(product => (
        <div key={product.id}>
          {product.item}: ${product.price}
        </div>
      ))}
    </div>
  );
}

export default ItemList;
