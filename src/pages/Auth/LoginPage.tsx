import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [passVisiable, setPassVisiable] = useState(false);
  return (
    <Container className="col-2">
      <div>
        <Content
          className="form-container flex-col-end"
          style={{ gap: "2rem" }}
        >
          <div className="header | flex-col-end" style={{ gap: "20px" }}>
            <img src="/images/Logo.png" alt="" className="logo" />
            <div className="flex-col-end">
              <p className="fw-500 fs-32 text-black">أهلا بك</p>
              <h1 className="fw-400 fs-22 text-neutral-400">
                تسجيل الدخول والمتابعة
              </h1>
            </div>
          </div>
          <form
            className="form-content flex-col-end w-100"
            style={{ gap: "1rem" }}
          >
            <div
              className="input-group w-100 flex-col-end"
              style={{ gap: ".5rem" }}
            >
              <label htmlFor="phone" className="fw-400 fs-18 cursor-pointer">
                رقم الهاتف
              </label>
              <input
                type="text"
                placeholder="ادخل رقم الهاتف"
                className="text-right text-black w-100"
                id="phone"
                name="phone"
              />
            </div>
            <div
              className="input-group w-100 flex-col-end"
              style={{ gap: ".5rem" }}
            >
              <label htmlFor="password" className="fw-400 fs-18 cursor-pointer">
                كلمة المرور
              </label>
              <div className="input-pass w-100">
                <input
                  type={passVisiable ? "text" : "password"}
                  placeholder="ادخل كلمة المرور"
                  className="text-right text-black w-100"
                  name="password"
                  id="password"
                />
                {passVisiable ? (
                  <ClosedEye
                    size={22}
                    onClick={() => {
                      setPassVisiable(!passVisiable);
                    }}
                  />
                ) : (
                  <OpenEye
                    size={22}
                    onClick={() => {
                      setPassVisiable(!passVisiable);
                    }}
                  />
                )}
              </div>
            </div>
            <div
              className="flex-space-between w-100"
              style={{ marginBottom: "60px" }}
            >
              <span>
                هل نسيت{" "}
                <Link to="/password-reset" className="text-primary-600">
                  كلمة المرور
                </Link>{" "}
                ؟
              </span>
              <div className="flex" style={{ gap: "10px" }}>
                <label
                  htmlFor="remember"
                  className="cursor-pointer fs-18 fw-400"
                >
                  تذكرني
                </label>
                <input type="checkbox" id="remember" name="remember" />
              </div>
            </div>
            <Link
              to="/homepage"
              className="btn w-100 text-center fw-500 fs-20 btn--primary no-underline"
            >
              تسجيل الدخول
            </Link>

            <Divider className="w-100" />

            <button
              type="button"
              className="btn w-100 btn--outline flex-center"
              style={{ gap: "5px" }}
            >
              <span className="fw-500 fs-20">تسجيل الدخول باستخدام جوجل</span>
              <img
                src="/images/google-icon.png"
                alt="facebook icon"
                style={{ width: "30px" }}
              />
            </button>
            <button
              type="button"
              className="btn w-100 btn--outline flex-center"
              style={{ gap: "5px" }}
            >
              <span className="fw-500 fs-20">
                تسجيل الدخول باستخدام فيس بوك
              </span>
              <img
                src="/images/face-icon.png"
                alt="facebook icon"
                style={{ width: "30px" }}
              />
            </button>
            <p
              className="w-100 text-center fw-600 fs-20"
              style={{ marginTop: 40 }}
            >
              <span>ليس لديك حساب ؟ </span>
              <Link to="/signup" className="text-primary-600 no-underline">
                انشاء حساب
              </Link>
            </p>
          </form>
        </Content>
      </div>
      <BG />
    </Container>
  );
};

export default LoginPage;

// Styles
const Container = styled.div`
  @media (width <= 750px) {
    flex-direction: column-reverse;
    & > * {
      width: 100%;
    }
    & > div:nth-child(2) {
      height: 50dvh;
    }
  }
`;
const ClosedEye = styled(AiOutlineEyeInvisible)``;
const OpenEye = styled(AiOutlineEye)``;
const BG = styled.div`
  background-image: url("/images/auth-hero.jpg");
  height: 100dvh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  padding: 2.5rem 2rem;

  .input-group .input-pass {
    position: relative;
    ${OpenEye} , ${ClosedEye} {
      position: absolute;
      left: 22px;
      top: 52%;
      translate: -50% -50%;
      cursor: pointer;
    }
  }
`;

const Divider = styled.div`
  position: relative;
  height: 2px;
  margin-block: 30px;
  background-color: var(--clr-neutral-100);
  &::after {
    content: "أو";
    position: absolute;
    font-weight: 400;
    font-size: 18px;
    border-radius: 100%;
    background-color: var(--clr-white);
    color: var(--clr-neutral-200);
    text-align: center;
    width: 35px;
    aspect-ratio: 1;
    translate: -50% -50%;
    left: 50%;
    line-height: 27px;
    top: 50%;
  }
`;
