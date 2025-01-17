import { ThemeProvider } from "@emotion/react";
import { Button, TextField, createTheme } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";
import { useNavigate } from "react-router-dom";

interface SignUpFormStructureProps {
  values: {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  errors: FormikErrors<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  touched: FormikTouched<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
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

const SignUpFormStructure = ({
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
  handleBlur,
}: SignUpFormStructureProps) => {
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
              error={!!errors.username && touched.username}
              onChange={handleChange}
              helperText={touched.username && errors.username}
              value={values.username}
              name="username"
              onBlur={handleBlur}
              fullWidth
            />

            <TextField
              label="Email"
              variant="outlined"
              required
              error={!!errors.email && touched.email}
              onChange={handleChange}
              helperText={touched.email && errors.email}
              value={values.email}
              name="email"
              onBlur={handleBlur}
              fullWidth
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
              fullWidth
            />

            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              required
              error={!!errors.confirmPassword && touched.confirmPassword}
              onChange={handleChange}
              helperText={touched.confirmPassword && errors.confirmPassword}
              name="confirmPassword"
              value={values.confirmPassword}
              onBlur={handleBlur}
              fullWidth
            />

            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ fontWeight: "bold" }}
                type="submit"
                disabled={(errors.email !== undefined || errors.username !== undefined || errors.password !== undefined || errors.confirmPassword !== undefined 
                    || values.email === undefined || values.username === undefined || values.password === undefined || values.confirmPassword === undefined)}
              >
                Register
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                style={{ fontWeight: "bold", borderWidth: "2px" }}
                onClick={() => navigate("/sign-in")}
                type="button"
              >
                Login
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpFormStructure;
