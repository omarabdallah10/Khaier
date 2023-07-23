import React from "react";
import Layout from "../hocs/Layout";
import CategoryHeader from "../components/CategoryHeader";
import Parteners from "../components/Parteners";
import GNavbar from "../components/GuestNavbar";

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <Layout>
      <GNavbar />
      <CategoryHeader imgPath="/images/aboutus-img.png" title="من نحن" />
      <div className="container" style={{ padding: "3rem 2rem" }}>
        <h1
          className="fw-600 fs-40 text-primary-600 text-right"
          style={{ paddingBlock: "3rem" }}
        >
          مساعدة الانسان..مهمتنا الأساسية
        </h1>
        <section className="w-100 box-shadow" style={{ padding: "2rem" }}>
          <p className="text-black text-right" style={{ lineHeight: "1.5" }}>
            موقع وتطبيق{" "}
            <span className="text-secondary-700 fs-20 fw-500">
              خَـــيِّـــرْ
            </span>{" "}
            يعد منصة الكترونية هدفها نشر الخير من خلال زيادة وتسهيل عملية التبرع
            للجمعيات الخيرية ليعم الخير علي الفئات الأكثر احتياجا بشكل أكبر
            والارتقاء الي حياة كريمة. تم البدء في انشاء خَيِّر في شهر سبتمبر سنة
            2022 كمشروع تخرج علي يد مجموعه من طلبة كلية الهندسة قسم الحاسبات
            ونظم التحكم بجامعة المنصورة وكان هدف الفريق المؤسس نشر الخير
            والإيجابية لتعم الفائدة على المجتمع كله.
          </p>
        </section>
      </div>
      <Parteners />
    </Layout>
  );
};

export default AboutUsPage;
