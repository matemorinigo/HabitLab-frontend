import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import SignInFormStructure from "./SignInFormStructure";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import { SignInData } from "../../../service/types";

const SignInForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const httpRequestService = useHttpRequestService();

  const handleSubmit = async (data: SignInData) => {
    try {
        await httpRequestService.signIn(data);
    } catch (e) {
        return Promise.reject(e);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: Partial<SignInData> = {}

        if(!values.username) 
            errors.username = "Username is required"
    
        if(!values.password)
            errors.password = "Password is required"

        return errors;
      }}
      onSubmit={async (values, { resetForm, setErrors, setSubmitting }) => {
        try {
            await handleSubmit(values);
            resetForm();
            navigate('/');
        } catch (e) {
            setErrors({
                username: "",
                password: "Invalid username or password"
            })
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
        <SignInFormStructure
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

export default SignInForm;
