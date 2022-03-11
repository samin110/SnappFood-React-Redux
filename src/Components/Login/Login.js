import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { HiOutlineLogin } from "react-icons/hi";
import { getRequest } from "../../Api/Requests/GetRequest";
import { useNavigate } from "react-router-dom";

function Login() {
  //  State For Data From Api
  const [dataFromApi, setDataFromApi] = useState();

  // Get Data From Login Inpus
  const [dataFromInput, setDataFromInput] = useState();

  // Redirect page
  const navigate = useNavigate();

  // *** Start => Is User Signup Or Not Signup --- (Comparison between database value and user input value)

  if (dataFromInput && dataFromApi) {
    const findEqualValue = dataFromApi.filter(({ email, password }) => {
      return (
        email === dataFromInput.email && password === dataFromInput.password
      );
    });
    if (findEqualValue.length > 0) {
      // toast
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      // toast
      console.log("Password is invalid!");
    }
  }

  // ==== End => Is User Signup Or Not Signup

  //  *** Start Get Data From Api & set Data in State
  useEffect(() => {
    const getDataFromApi = async () => {
      try {
        const res = await getRequest();
        setDataFromApi(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromApi();
  }, []);
  // ===== End Get Data From Api

  // *** Start Formik and Validation with Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("آدرس ایمیل نامعتبر است!")
        .required("ضروری است!"),
      password: Yup.string()
        .matches(
          /^[aA-zZ\s]+$/gi,
          "رمز انتخابی باید فقط شامل حروف انگلیسی باشد"
        )
        .min(8, "رمز عبور حداقل باید 8 حرف باشد!")
        .required("ضروری است!"),
    }),
    onSubmit: (values) => {
      setDataFromInput(values);
    },
    isValid: false,
    validateOnMount: true,
  });
  // ==== End Formik and Validation with Yup

  // *** Start Login Form Section
  return (
    <section className="login">
      <div className="login__container">
        <div className="login__heading">
          <HiOutlineLogin className="signup__icon" />
          <p>ورود به حساب کاربری</p>
        </div>
        <form className="login" onSubmit={formik.handleSubmit}>
          <div className="signup__input login__input">
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              id="email"
              value={formik.values.email}
              required
            />
            <span className="signup__title">ایمیل</span>
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="signup__input login__input">
            <input
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              id="password"
              value={formik.values.password}
              required
            />
            <span className="signup__title">رمز عبور</span>

            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={!formik.isValid}
            className="signup__submit"
          >
            ورود
          </button>
        </form>
      </div>
    </section>
  );
  // ==== End Login Form Section
}

export default Login;
