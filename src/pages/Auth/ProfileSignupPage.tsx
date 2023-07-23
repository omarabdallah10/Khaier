import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const ProfileSignupPage = () => {
  const [passVisiable, setPassVisiable] = useState(false);
  return (
    <Container className="col-2">
      <div className="flex">
        <Content
          className="form-container flex-col-end"
          style={{ gap: "2rem", marginBlock: "auto" }}
        >
          <div className="header | flex-col-end" style={{ gap: "20px" }}>
            <img src="/images/Logo.png" alt="" className="logo" />
            <div className="flex-col-end">
              <p className="fw-500 fs-32 text-black">اكمال البيانات</p>
              <h1 className="fw-400 fs-22 text-neutral-400 text-right">
                اكمل بياناتك لانشاء حساب جديد
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
                اسم المستخدم
              </label>
              <input
                type="text"
                placeholder="ادخل اسم المستخدم"
                className="text-right text-black w-100"
                id="phone"
                name="phone"
              />
            </div>
            <div
              className="input-group w-100 flex-col-end"
              style={{ gap: ".5rem" }}
            >
              <label htmlFor="phone" className="fw-400 fs-18 cursor-pointer">
                اسم
              </label>
              <input
                type="text"
                placeholder="ادخل الاسم كامل"
                className="text-right text-black w-100"
                id="phone"
                name="phone"
              />
            </div>
            <div
              className="input-group w-100 flex-col-end"
              style={{ gap: ".5rem" }}
            >
              <label htmlFor="phone" className="fw-400 fs-18 cursor-pointer">
                العنوان
              </label>
              <input
                type="text"
                placeholder="ادخل المدينة والمنطقة"
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
              className="input-group w-100 flex-col-end"
              style={{ gap: ".5rem" }}
            >
              <label htmlFor="password" className="fw-400 fs-18 cursor-pointer">
                تأكيد كلمة المرور
              </label>
              <div className="input-pass w-100">
                <input
                  type={passVisiable ? "text" : "password"}
                  placeholder="ادخل كلمة المرور مرة اخرى"
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

            <button
              type="button"
              className="btn w-100 text-center fw-500 fs-20 btn--primary"
              style={{ marginTop: "40px" }}
            >
              انشاء حساب جديد
            </button>
          </form>
        </Content>
      </div>
      <BG />
    </Container>
  );
};

export default ProfileSignupPage;

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
