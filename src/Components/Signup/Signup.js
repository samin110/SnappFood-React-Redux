import React, { useState } from "react";
import { useFormik } from "formik";
import "./Signup.css";
import { FiUserPlus } from "react-icons/fi";
import * as Yup from "yup";
import { postRequest } from "../../Api/Requests/PostRequest";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUsers } from "../../Redux/actions/actionUsers/usersAsyncAction";
function Signup() {
  // State For get Error from backend
  const { error, data } = useSelector(({ usersReducer }) => usersReducer);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "نام باید حداقل 6 حرف باشد !")
        .max(15, " نام باید حداکثر 15 حرف باشد!")
        .required("ضروری است!"),
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
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "رمز عبور یکسان نیست")
        .required("ضروری است!"),
    }),
    isValid: false,

    onSubmit: async (values) => {
      //***  dispatch for request
      dispatch(signupUsers(values));

      // try {
      // const response = await postRequest("/signup", values);
      // localStorage.setItem("userToken", JSON.stringify(response.data));
      // navigate("/");
      //   setError(null);
      // } catch (error) {
      //   if (error && error.response.data.message) {
      //     setError(error.response.data.message);
      //   }
      // }
    },

    validateOnMount: true,
  });
  return (
    <section className="signup">
      <div className="signup__container">
        <div className="signup__heading">
          <div>
            <FiUserPlus className="signup__icon" />
            <h2>عضویت</h2>
          </div>
          <img src="assets/images/snappnavbar.svg" />
        </div>
        <p>به اسنپ‌فود خوش اومدی!</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="signup__input-container">
            <div className="signup__input">
              <input
                type="text"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="name"
                name="name"
                value={formik.values.name}
              />
              <span className="signup__title">نام</span>
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="signup__input">
              <input
                type="text"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email"
                name="email"
                value={formik.values.email}
              />
              <span className="signup__title">ایمیل</span>
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="signup__input-container">
            <div className="signup__input">
              <input
                type="password"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="password"
                name="password"
                value={formik.values.password}
              />
              <span className="signup__title">رمز عبور</span>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="signup__input">
              <input
                type="password"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="confirmPassword"
                name="confirmPassword"
                value={formik.values.confirmPassword}
              />
              <span className="signup__title">تائید رمز عبور</span>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="error">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
          </div>
          {error ? <div className="error ">{error}</div> : null}
          <button
            className="signup__submit"
            disabled={!formik.isValid}
            type="submit"
          >
            ثبت نام
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
