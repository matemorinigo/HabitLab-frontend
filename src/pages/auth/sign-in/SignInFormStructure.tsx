import { Button, TextField, ThemeProvider, createTheme } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import React from "react";
import { useNavigate } from "react-router";

interface SignInFormStructureProps {
  values: { username: string; password: string };
  errors: FormikErrors<{
    username: string;
    password: string;
  }>;
  touched: FormikTouched<{
    username: string;
    password: string;
  }>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
}

/**
 * TODO 
 * 
 */

const SignInFormStructure = ({
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
}: SignInFormStructureProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF8C00",
      },
      secondary: {
        main: "#FF8C00",
      },
    },
  });

  const navigate = useNavigate();

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <div className={"input-container flex flex-col gap-5"}>
            <TextField
              label="Username"
              variant="outlined"
              required
              error={!!errors.password && touched.username}
              onChange={handleChange}
              helperText={touched.username && errors.username}
              value={values.username}
              name="username"
              onBlur={handleBlur}
            />

            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
              error={!!errors.password && touched.password}
              onChange={handleChange}
              helperText={touched.password && errors.password}
              name="password"
              value={values.password}
              onBlur={handleBlur}
            />

            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ fontWeight: "bold" }}
                type="submit"
              >
                Login 
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                style={{ fontWeight: "bold", borderWidth: "2px" }}
                onClick={() => navigate('/sign-up')}
                type="button"
              >
                Register
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInFormStructure;
