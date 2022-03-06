import React from "react";
import { useGallery } from "../../contexts/galerry-context";

const CartList = () => {
  const { cartItems, deleteCartItem } = useGallery();
  return (
    <div className="flex flex-row gap-5 px-5 py-10">
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-between gap-3 p-3 bg-gray-200 rounded-lg"
          >
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={item.url}
              alt=""
            />
            <button onClick={()=>deleteCartItem(item)} className="p-2 text-sm text-white bg-red-400 rounded-lg">Delete</button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
