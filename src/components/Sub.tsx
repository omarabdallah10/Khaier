import React from "react";
import styled from "styled-components";

type Props = {};

const Sub = (props: Props) => {
  return (
    <Container
      className="container"
      style={{ paddingBlock: "4rem", paddingInline: "1rem" }}
    >
      <div className="col-2">
        <div className="left | flex-col-end" style={{ gap: "2rem" }}>
          <h2 className="text-black fs-32">تسجيل النشرة الإخبارية</h2>
          <p className="text-neutral-400 fw-400 fs-24 text-right">
            سجل في نشرتنا الإخبارية للحصول على آخر الأخبار الخيرية
          </p>
          <div
            className="input-group flex w-100 m-block-auto"
            style={{ gap: "1rem" }}
          >
            <button
              className="btn btn--primary text-white "
              style={{ padding: "15px 30px" }}
            >
              تسجيل
            </button>
            <input
              type="text"
              className="w-80 text-right text-black"
              placeholder="ضع ايميلك هنا"
            />
          </div>
        </div>
        <div className="img-container | flex-center">
          <img src="/images/sub-img.png" alt="" className="w-80" />
        </div>
      </div>
    </Container>
  );
};

export default Sub;

const Container = styled.div`
  @media (width <= 845px) {
    .col-2 {
      gap: 1rem;
      flex-direction: column-reverse;
      & > * {
        width: 100%;
      }
      img {
        width: 70%;
      }
    }
    .left {
      align-items: center;
      justify-content: center;
    }
  }
  @media (width<=400px) {
    .input-group {
      flex-direction: column-reverse;
      input {
        width: 100%;
      }
    }
  }
`;
