import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {};

const CharitySection = (props: Props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, mirror: true });
  }, []);
  return (
    <Charity className="container bg-secondary-100">
      <div className="img-container flex-center" data-aos="fade-right">
        <img src="/images/charity-img.png" alt="" className="w-80" />
      </div>
      <div
        className="right | flex-col-end"
        data-aos="fade-left"
        style={{ paddingInline: "6rem", gap: "3rem" }}
      >
        <h2 className="fs-44 fw-400 w-100 text-right">
          احسب زكاتك مع{" "}
          <span className="fs-44 fw-600 text-primary-600">
            خَـــــيِّـــــرْ{" "}
          </span>
        </h2>
        <p className="text-right w-100 fw-400 fs-22 text-neutral-400">
          حاسبة الزكاة ، تمكنك من حساب قيمة الزكاة الخاصة بك بعد كتابة المال أو
          المبلغ الذي تملكه بعد تحقق نصاب الزكاة، وبعد ذلك يظهر لك قيمة الزكاة
          الخاصة بها.
        </p>
        <Link
          to="/zaka/"
          className="btn btn--primary m-block-auto fs-20 fw-500 no-underline w-100 text-center"
        >
          احسب زكاتك
        </Link>
      </div>
    </Charity>
  );
};

export default CharitySection;

const Charity = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 5rem 1rem;
  button {
    padding: 1rem 3rem;
  }
  & > * {
    flex: 1;
  }
  @media (width<=980px) {
    gap: 2rem;
    flex-direction: column;
    .right {
      align-items: center;
      h2 {
        font-size: 30px;
        span {
          font-size: 30px;
        }
      }
      p {
        font-size: 18px;
      }
    }
  }
`;
