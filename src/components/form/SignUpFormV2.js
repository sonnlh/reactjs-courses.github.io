import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        gender: "",
        acception: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string().email().required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean(),
        gender: Yup.string().required("Required"),
        acception: Yup.boolean().isTrue(
          "You have not accept the terms and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
       
        setTimeout(() => {
          actions.resetForm({
          firstName: "",
          lastName: "",
          email: "",
          intro: "",
          gender: "",
          acception: false,
        });
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form className="p-10 w-full max-w-[500px] mx-auto">
            <div className="flex flex-col gap-4">
              {/* FIRST NAME */}
              {/* <label>Firstname</label>
          <Field
            placeholder="enter your first name"
            id="firstName"
            name="firstName"
            className="p-4 rounded-lg border border-gray-300"
            type="text"
          ></Field>
          <div className="text-sm text-red-500 font-semibold">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div> */}
              <MyInput
                placeholder="Enter your first name"
                label="First Name"
                name="firstName"
                id="firstName"
              ></MyInput>
              {/* LASTNAME */}
              <MyInput
                placeholder="Enter your last name"
                label="Last Name"
                name="lastName"
                id="lastName"
              ></MyInput>
              {/* //EMAIL */}
              <MyInput
                placeholder="Enter your email address"
                label="Email Address"
                name="email"
                type="email"
                id="email"
              ></MyInput>
              {/* INTRO */}
              <MyTextarea
                placeholder="Introduce about yourself"
                label="Intro"
                name="intro"
                type="textarea"
                id="intro"
              ></MyTextarea>
              {/* GENDER */}
              <label>Gender</label>
              <div
                className="flex flex-row gap-4"
                role="group"
                aria-labelledby="gender"
              >
                <label>
                  <Field type="radio" name="gender" value="male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="female" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="gender" value="others" />
                  Others
                </label>
              </div>
              <div className="text-sm text-red-500 font-semibold">
                <ErrorMessage name="gender"></ErrorMessage>
              </div>
              {/* JOB */}
              <MySelectBox name="job" label="Are you">
                <option
                  className="rounded-lg p-4 border border-gray-300"
                  value="worker"
                >
                  Worker
                </option>
                <option
                  className="rounded-lg p-4 border border-gray-300"
                  value="officer"
                >
                  Officer
                </option>
                <option
                  className="rounded-lg p-4 border border-gray-300"
                  value="freelancer"
                >
                  Frelancer
                </option>
                <option
                  className="rounded-lg p-4 border border-gray-300"
                  value="other"
                >
                  Other
                </option>
              </MySelectBox>
              <MyCheckbox name="acception">
                I accept the terms and conditions{" "}
              </MyCheckbox>
            </div>
            <div>
              <button
                disabled={formik.isSubmitting}
                type="submit"
                className="w-full rounded-lg border mt-5 p-4 text-white font-semibold bg-blue-500"
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
//useField
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="p-4 rounded-lg border border-gray-300"
        type="text"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 font-semibold">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 rounded-lg border border-gray-300 h-[150px]"
        type="text"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 font-semibold">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-lg border border-gray-300"
        type="text"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 font-semibold">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2">
        <input
          className="p-4 rounded-lg border border-gray-300"
          type="checkbox"
          {...field}
          {...props}
        />
      </label>

      {meta.touched && meta.error ? (
        <div className="error text-sm text-red-500 font-semibold">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default SignUpFormV2;
