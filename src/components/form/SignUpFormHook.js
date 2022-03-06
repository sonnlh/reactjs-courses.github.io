import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("Required")
    .max(10, "Must be less than 10 characters "),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ resolver: yupResolver(validationSchema), mode: "onChange" });
  const watchShowAge = watch("showAge", false);
  console.log(isSubmitting);
  const onSubmit = (values) => {
    if (isValid) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          reset({
            firstName: "",
            lastName: "",
            email: "",
          });
        }, 3000);
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-4">
        <label>Firstname</label>
        <input
          type="text"
          placeholder="enter your first name"
          id="firstName"
          name="firstName"
          className="p-4 rounded-lg border border-gray-300"
          {...register("firstName")}
        />
        {errors.firstName && (
          <div className="text-sm text-red-500 ">
            {errors.firstName.message}
          </div>
        )}
        <label>Last Name</label>
        <input
          type="text"
          placeholder="enter your last name"
          id="lastName"
          name="lastName"
          {...register("lastName")}
          className="p-4 rounded-lg border border-gray-300"
        />

        <label>Email</label>
        <input
          {...register("email")}
          type="email"
          placeholder="enter your email address"
          id="email"
          name="email"
          className="p-4 rounded-lg border border-gray-300"
        />
        <div className="flex flex-col gap-2 mb-5">
          <input type="checkbox" {...register("showAge")} />
          {watchShowAge && (
            <input
              type="number"
              name=""
              id=""
              placeholder="Please enter your age"
            />
          )}
        </div>
      </div>
      <div>
        <button
          type="submit"
          className={` w-full rounded-lg border mt-5 p-4 font-semibold ${
            isSubmitting
              ? " disabled pointer-events-none bg-white text-blue-500"
              : " text-white bg-blue-500"
          } `}
        >
          {isSubmitting ? (
            <div className="absolute w-5 h-5 border-4 border-blue-500 border-t-4 border-t-transparent rounded-full animate-spin"></div>
          ) : null}
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
