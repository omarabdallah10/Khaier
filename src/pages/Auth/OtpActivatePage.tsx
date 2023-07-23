import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import OtpInput from "react-otp-input";
const OtpActivatePage = () => {
  const [otp, setOtp] = useState("");
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
              <h1 className="fw-500 fs-32 text-black">ادخل الرمز</h1>
              <p className="fw-400 fs-18 text-neutral-400 text-right">
                <span>تم إرسال رمز مكون من 6 أرقام إلى </span>
                <br />
                <span className="text-black fw-500 fs-18">
                  +20100369874
                </span>{" "}
                <Link to="/signup" className="no-underline text-primary-600">
                  تعديل
                </Link>
              </p>
            </div>
          </div>
          <form
            className="form-content flex-col-end w-100"
            style={{ gap: "1rem" }}
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              containerStyle={{
                display: "flex",

                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBlock: "1rem",
              }}
              inputType="tel"
              inputStyle={{ width: "3em" }}
              shouldAutoFocus={true}
              renderInput={(props) => <input {...props} />}
            />
            <p style={{ paddingBlock: "1rem" }}>
              <span className="fw-400 fs-18 text-neutral-400">
                اعادة ارسال الرمز بعد
              </span>{" "}
              <span className="text-primary-600 fs-18 fw-500">20 ثانية</span>
            </p>
            <button
              type="button"
              className="btn w-100 text-center fw-500 fs-20 btn--primary"
              disabled={otp.length !== 6}
            >
              استمرار
            </button>
            <Link
              to="/signup"
              className="fw-500 fs-18 text-primary-600 no-underline text-center w-100"
              style={{ paddingBlock: "1rem" }}
            >
              اعادة ارسال الرمز
            </Link>
          </form>
        </Content>
      </div>
      <BG />
    </Container>
  );
};

export default OtpActivatePage;

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
