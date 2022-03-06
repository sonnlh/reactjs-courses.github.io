import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 characters or less";
//   }
//   return errors;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "" },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => console.log(formik),
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-4">
        <label>Firstname</label>
        <input
          type="text"
          placeholder="enter your first name"
          id="firstName"
          name="firstName"
          {...formik.getFieldProps("firstName")}
          className="p-4 rounded-sm border border-gray-300"
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
          //   value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500 ">{formik.errors.firstName}</div>
        ) : null}
        <label>Last Name</label>
        <input
          type="text"
          placeholder="enter your last name"
          id="lastName"
          name="lastName"
          {...formik.getFieldProps("lastName")}
          className="p-4 rounded-sm border border-gray-300"
          //   onChange={formik.handleChange}
          //   onBlur={formik.handleBlur}
          //   value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500 ">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div>
        <button
          type="submit"
          className="w-full rounded-lg border mt-5 p-4 text-white font-semibold bg-blue-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
