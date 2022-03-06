import React, { useEffect, useState } from "react";
import axios from "axios";

const getPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const  handleLoadMore = async () => {
    setPage((page) => page + 1);
    getPhotos(page + 1).then((images) => {
      setRandomPhotos(randomPhotos.concat(images));
    });
  };

  useEffect(() => {
    getPhotos(page).then((images) => {
      setRandomPhotos(images);
    });
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-5 p-5">
        {randomPhotos.length > 0 &&
          randomPhotos.map((item, index) => {
            return (
              <div
                key={item.id}
                className="p-3 bg-white shadow-md rounded-lg h-72"
              >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={item.download_url}
                  alt={item.author}
                />{" "}
              </div>
            );
          })}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="inline-block px-8 py-4 bg-pink-500 text-white rounded-lg"
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default Photos;
