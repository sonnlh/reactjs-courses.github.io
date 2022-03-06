import React, { useRef, useState } from "react";
import axios from "axios";
import _ from "lodash";
import "../../App.css";
//https://hn.algolia.com/api/v1/search?query=react
const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
};
const HackerNewReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_MESSAGE": {
      return { ...state, errorMessage: action.payload };
    }
    default:
      break;
  }
};
const HackerNewsWithReducer = () => {
  const [state, dispatch] = React.useReducer(HackerNewReducer, initialState);
  const handleFetchData = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${state.query}`
      );
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_MESSAGE",
        payload: null,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      // setMessage(`Error happen  ${error}`);
      dispatch({
        type: "SET_MESSAGE",
        payload: `Error happen  ${error}`,
      });
      dispatch({
        type: "SET_DATA",
        payload: [],
      });
    }
  };
 
  React.useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="bg-white mt-5 mx-auto p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-3 block w-full h-full rounded-md transition-all focus:border-blue-300"
          defaultValue={state.query}
          placeholder="Typing your keyword"
          onChange={(e) => dispatch({
            type: "SET_QUERY",
            payload: e.target.value
          })}
        />
        <button
          disabled={state.loading}
          onClick={handleFetchData}
          className="bg-blue-500 text-white font-semibold flex-shrink-0 p-3 rounded-md disabled:bg-blue-100"
        >
          Fetch
        </button>
      </div>
      {state.loading && (
        <div className="animate-spin loading w-8 h-8 rounded-full border-4 border-r-4 border-r-transparent border-blue-500 mx-auto my-10"></div>
      )}
      {!state.loading && state.errorMessage && <p>{state.errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => (
            <h3 key={item.id} className="p-3 bg-gray-100 rounđe-sm">
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
