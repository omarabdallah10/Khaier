import styled from "styled-components";

const PasswordResetPage = () => {
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
              <p className="fw-500 fs-32 text-black">استعادة كلمة المرور</p>
              <h1 className="fw-400 fs-22 text-neutral-400 text-right">
                ادخل رقم الهاتف المسجل لدينا لاستعادة كلمة المرور
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
                style={{ marginBottom: "40px" }}
              />
            </div>

            <button
              type="button"
              className="btn w-100 text-center fw-500 fs-20 btn--primary"
            >
              ارسل الرمز
            </button>
          </form>
        </Content>
      </div>
      <BG />
    </Container>
  );
};

export default PasswordResetPage;

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
