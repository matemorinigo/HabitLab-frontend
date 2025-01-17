import { Formik } from "formik";
import React from "react";
import SignUpFormStructure from "./SignUpFormStructure";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import { useNavigate } from "react-router-dom";
import { SignUpData } from "../../../service/types";

/**
 * TODO change 401 with 409 conflict when attempting to register an already registered user
 */

const SignUpForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const httpRequestService = useHttpRequestService();

  const handleSubmit = async (data: SignUpData) => {
    try {
      await httpRequestService.signUp(data);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const handleValidation = (values: SignUpData) => {
    let errors: Partial<SignUpData> = {};

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.password
      )
    ) {
      errors.password =
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={handleValidation}
      onSubmit={async (values, { resetForm, setErrors, setSubmitting }) => {
        try {
          await handleSubmit(values);
          resetForm();
          navigate("/");
        } catch (e: any) {
          if (e.response.status === 401)
            setErrors({
              username: " ",
              email: "Username or email already exists",
            });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <SignUpFormStructure
          values={values}
          errors={errors}
          touched={touched}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      )}
    </Formik>
  );
};

export default SignUpForm;
