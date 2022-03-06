import React, { useState } from "react";
import useHandelChange from "../../hooks/useHandleChange";

const Form = () => {
  const {values, handleChange } = useHandelChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    console.log("values: ", values);
    e.preventDefault();
    values.fullname === '' || values.fullname === null ? setNameError("Your fullname is empty") : setNameError('');
  };

  console.log("FOrm", values);
  return (
    <div className="p-5">
      <form
        className="flex flex-col gap-x-3 m-5"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        {nameError}

        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email address"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="hobby"
          className="p-5 border border-gray-200 rounded-lg"
          placeholder=""
          onChange={handleChange}
        />
        <label>Hobby</label>
        <button
          type="submit"
          className="border-gray-200 text-white p-3 rounded-lg bg-blue-300 w-[200px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
