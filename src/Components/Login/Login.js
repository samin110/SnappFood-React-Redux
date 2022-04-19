import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useQuery } from "../../Utils/queryParameters";
import * as Yup from "yup";
import "./Login.css";
import { HiOutlineLogin } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/actions/actionUsers/usersAsyncAction";
function Login() {
  // State For Error
  const { error } = useSelector(({ usersReducer }) => usersReducer);

  const dispatch = useDispatch();
  // Redirect page
  const navigate = useNavigate();

  const query = useQuery();
  const queryParameter = query.get("redirect") || "/";

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

    onSubmit: async (values) => {
      dispatch(loginUser(values));
      if (queryParameter === "cart") {
        navigate(`/${queryParameter}`);
      }
      // try {
      //   const response = await postRequest("/login", values);
      //   console.log(response);
      //   dispatch(getUserInfo(response.data));
      //   setError(null);
      //   // navigate("/");
      // } catch (error) {
      //   if (error && error.response.data.message) {
      //     console.log(error.response.data.message);
      //     setError(error.response.data.message);
      //   }
      // }
    },
    isValid: false,

    validateOnMount: true,
  });
  // ==== End Formik and Validation with Yup

  // *** Start Login Form Section
  return (
    <section className='login'>
      <div className='login__container'>
        <div className='login__heading'>
          <HiOutlineLogin className='signup__icon' />
          <p>ورود به حساب کاربری</p>
        </div>
        <form className='login' onSubmit={formik.handleSubmit}>
          <div className='signup__input login__input'>
            <input
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='email'
              id='email'
              value={formik.values.email}
              required
            />
            <span className='signup__title'>ایمیل</span>
            {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='signup__input login__input'>
            <input
              type='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name='password'
              id='password'
              value={formik.values.password}
              required
            />
            <span className='signup__title'>رمز عبور</span>

            {formik.touched.password && formik.errors.password ? (
              <div className='error'>{formik.errors.password}</div>
            ) : null}
          </div>
          {error && <div className='error'>{error}</div>}
          <button
            type='submit'
            disabled={!formik.isValid}
            className='signup__submit'
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
