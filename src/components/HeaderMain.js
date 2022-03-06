import React from "react";
import { useAuth } from "../contexts/authContext";
import { useGallery } from "../contexts/galerry-context";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  
  console.log(user);
  return (
    <div className="flex items-center justify-center p-4 bg-white shadow-md">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src={user.avatar}
            alt=""
            className="object-cover w-10 h-10 rounded-full"
          />
          <span className="text-sm font-medium">
            Welcome back, <strong>{user.fullname}</strong>
          </span>
        </div>
      ) : (
        <span className="text-sm font-medium"> Welcome</span>
      )}
      <div className="flex items-center justify-center gap-10 ml-auto">
        <CartItem></CartItem>
        <button
          onClick={() => {
            setUser(null);
          }}
          className="p-2 ml-auto text-white bg-gray-500 rounded-lg"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
const CartItem = (props) => {
  const {cartItems} = useGallery();
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <svg
        width="44"
        height="41"
        viewBox="0 0 44 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="20.9584"
          cy="37.7083"
          rx="3.125"
          ry="3.125"
          fill="#292D32"
        />
        <circle cx="33.4584" cy="37.7083" r="3.125" fill="#292D32" />
        <path
          d="M5.33333 13.75L3.25 13.75"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.41671 26.25L5.33337 26.25"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.41669 20H1.16669"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M11.0873 8.54167L15.7094 29.2435C15.8625 29.9291 16.4709 30.4167 17.1734 30.4167H36.7473C37.4498 30.4167 38.0582 29.9291 38.2113 29.2435L42.4255 10.3685C42.6347 9.43136 41.9218 8.54167 40.9615 8.54167H11.0873ZM11.0873 8.54167L9.40419 2.35616C9.2265 1.70315 8.63356 1.25 7.95682 1.25H1.16669"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-white font-medium relative right-0 -translate-y-2/4 -translate-x-2/4 top-0 w-8 h-8 rounded-full bg-[#FC2872] flex items-center justify-center">
        {cartItems.length}
      </span>
    </div>
  );
};

export default HeaderMain;
