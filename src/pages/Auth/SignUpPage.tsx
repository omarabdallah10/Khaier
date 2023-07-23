import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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
              <p className="fw-500 fs-32 text-black">انشاء حساب جديد</p>
              <h1 className="fw-400 fs-22 text-neutral-400">
                انشئ حساب جديد للمتابعة
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
                style={{ marginBottom: "60px" }}
              />
            </div>

            <button
              type="button"
              className="btn w-100 text-center fw-500 fs-20 btn--primary"
            >
              ارسل الرمز
            </button>

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
              <span>لديك حساب بالفعل ؟ </span>
              <Link to="/login" className="text-primary-600 no-underline">
                تسجيل الدخول
              </Link>
            </p>
          </form>
        </Content>
      </div>
      <BG />
    </Container>
  );
};

export default SignUpPage;

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

const BG = styled.div`
  background-image: url("/images/auth-hero.jpg");
  height: 100dvh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  padding: 2.5rem 2rem;
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
