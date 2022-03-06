import { createContext, useContext, useState } from "react";
import _ from "lodash";
import useLocalStorage from "../hooks/useLocalStorage";

const GalleryContext = createContext();

const fakeData = [
  {
    id: 1,
    url:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url:
      "https://images.unsplash.com/photo-1612882515336-6143febd9d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
  {
    id: 3,
    url:
      "https://images.unsplash.com/photo-1521488674203-62bf581664be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    isFavorite: true,
  },
  {
    id: 4,
    url:
      "https://images.unsplash.com/photo-1526430439824-f9701bdb2320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url:
      "https://images.unsplash.com/photo-1608142172654-318a624fe4ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    isFavorite: true,
  },
  {
    id: 6,
    url:
      "https://images.unsplash.com/photo-1605311090403-5d80b14159ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: true,
  },
  {
    id: 7,
    url:
      "https://images.unsplash.com/photo-1610740654950-070baeb919ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
  {
    id: 8,
    url:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: true,
  },
];

function GalleryProvider(props) {
  const [storedValue, setValue] = useLocalStorage("photos", fakeData);
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCardItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState();
  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue("photos", updatedArray)
  }
  function addToCart(newItem) {
    setCardItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      if (isExisted) return [...prevItems];
      return [...prevItems, newItem];
    });
  }
  function deleteCartItem(item) {
    var newCartItems = _.remove(cartItems, function (cartItem) {
      return cartItem !== item;
    });
    setCardItems(newCartItems);
  }

  const value = {
    photos,
    setPhotos,
    favoriteList,
    setFavoriteList,
    cartItems,
    setCardItems,
    toggleFavorite,
    addToCart,
    deleteCartItem,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be use in GalleryProvider");
  return context;
}
export { useGallery, GalleryProvider };
