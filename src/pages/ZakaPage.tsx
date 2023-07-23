import React, { useState } from "react";
import Layout from "../hocs/Layout";
import CategoryHeader from "../components/CategoryHeader";
import styled from "styled-components";
import GNavbar from "../components/GuestNavbar";

type Props = {};

const ZakaPage = (props: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [zakatValue, setZakatValue] = useState("");

  const calculateZakat = () => {
    const nisabValue = 200000; // value of nisab in grams of silver due to 30/5/2023

    const inputNumber = parseFloat(inputValue);

    if (isNaN(inputNumber) || inputNumber < nisabValue) {
      setZakatValue("0.00");
    } else {
      const zakat = (inputNumber * 0.025).toFixed(2);
      setZakatValue(zakat);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    calculateZakat();
  };
  return (
    <Layout>
      <GNavbar />
      <CategoryHeader imgPath="/images/zaka-img.webp" title="احسب زكاتك" />
      <div
        className="container flex-col-center"
        style={{ padding: "4rem 2rem 6rem", minHeight: "600px", gap: 30 }}
      >
        <section className="w-100 box-shadow" style={{ padding: "2rem" }}>
          <p className="text-black text-right" style={{ lineHeight: "3" }}>
            <span className="fw-500 fs-20">كيف تحسب زكاتك؟</span>الزكاة هي أحد
            أركان الإسلام الخمسة ، واجبة على جميع المسلمين الذين يتقيدون بقيم
            النصاب . النصاب هو الحد الأدنى لصافي رأس المال الذي يجب أن يمتلكه
            المسلم حتى يكون مؤهلاً لدفع الزكاة ، وهو ما يعادل 87.48 جرامًا (7.5
            تولة) من الذهب و 612.36 جرامًا (52.5 تولة) من الفضة على التوالي.
            فيجب عليه دفع 2.5٪ من تلك الثروة كزكاة سنوياً ، ويجب حساب المبلغ قبل
            التبرع بيوم علي الاكثر.
          </p>
          <p
            className="text-right text-primary-600 fw-500 fs-20"
            style={{ padding: "1rem" }}
          >
            <span>نقرأ في سورة البقرة</span>
            <br />
            <span>
              "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَمَا تُقَدِّمُوا
              لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ الله إِنَّ الله بِمَا
              تَعْمَلُونَ بَصِيرٌ"
            </span>
          </p>

          <p className="text-black text-right" style={{ lineHeight: "3" }}>
            <span className="text-secondary-700 fs-20 fw-500">
              خَـــيِّـــرْ
            </span>{" "}
            يقدم حاسبة الزكاة ، تمكنك من حساب قيمة الزكاة الخاصة بك بعد كتابة
            المال أو المبلغ الذي تملكه بعد تحقق نصاب الزكاة، وبعد ذلك يظهر لك
            قيمة الزكاة الخاصة بها. يرجى التواصل مع جهة أو دار فتوى شرعية حتى
            تتحقق من شروط وضوابط الزكاة الواجبة.
          </p>
        </section>
        <Form>
          <div className="left | box-shadow">
            <div>
              <h2 className="text-right fw-400 fs-20">قيمة الزكاة</h2>
              <hr />
            </div>
            <div className="flex-space-between">
              <span className="total | fs-24 fw-600 ">{zakatValue} ج.م</span>
              <span className="fs-20 fw-400">زكاة المال</span>
            </div>
            <button className="btn btn--secondary-700 text-white fs-20 f2-500 text-center w-100">
              تبرع الان
            </button>
          </div>

          <div
            className="right | flex-col-end box-shadow"
            style={{ gap: "2rem" }}
          >
            <h2 className="text-black fs-32">زكاة المال</h2>
            <p className="text-neutral-400 fw-400 fs-24 text-right">
              ادخل قيمة المال الذي تملكه
            </p>
            <div
              className="input-group flex w-100 m-block-auto"
              style={{ gap: "1rem" }}
            >
              <button
                className="btn btn--primary text-white "
                style={{ padding: "15px 30px" }}
                onClick={handleButtonClick}
              >
                احسب
              </button>
              <input
                type="text"
                className="w-100 text-right text-black"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

export default ZakaPage;

const Form = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  gap: 2rem;
  .right {
    padding: 2rem;
    flex: 3;
    border-radius: 5px;
  }

  .left {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3rem;
    justify-content: space-between;
    border-radius: 5px;
    & > * {
      width: 100%;
    }
    h2 {
      margin-bottom: 2rem;
    }
  }

  @media (width <= 1100px) {
    gap: 1rem;
    flex-direction: column-reverse;
    & > * {
      width: 100%;
    }
    .right {
      align-items: center;
      justify-content: center;
    }

    @media (width<=400px) {
      .input-group {
        flex-direction: column-reverse;
      }
    }
  }
`;
