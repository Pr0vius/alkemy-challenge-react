import React, { useContext, useEffect } from "react";
import auth from "../../services/auth";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context";
import Input from "../../Components/Input";
import { Formik } from "formik";
import Alert from "../../Components/Alert";

const Login = () => {
  const history = useHistory();
  const { setAuthState } = useContext(AuthContext);

  const initialValues = {
    email: "",
    password: "",
  };
  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  const submitHandler = (values, { setSubmitting }) => {
    auth.login(values.email, values.password).then(() => {
      setAuthState({ auth: auth.authentication, token: auth.token });
      setSubmitting(false);
      history.push("/");
    });
  };

  useEffect(() => {
    setAuthState({ auth: auth.authentication, token: auth.token });
  }, [setAuthState]);

  return (
    <div className="container bg-dark mt-5">
      <div className="row d-flex justify-content-center ">
        <div className="col col-md-6">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={submitHandler}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  name="email"
                  label="Email address"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && touched.email && <Alert msg={errors.email} />}
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.password && touched.password && (
                  <Alert msg={errors.password} />
                )}
                <button
                  type="submit"
                  className="btn btn-primary mx-auto d-block"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
