import React from "react";
import Layout from "../hocs/Layout";
import CategoryCard from "../components/CategoryCard";
import CategoryHeader from "../components/CategoryHeader";
import styled from "styled-components";
import GNavbar from "../components/GuestNavbar";

type Props = {};

const OurServicePage = (props: Props) => {
  return (
    <Layout>
      <GNavbar />
      <CategoryHeader imgPath="/images/service-img.png" title="خدماتنا" />
      <div className="container" style={{ padding: "20rem 2rem" }}>
        <Grid>
          <Card className="box-shadow">
            <div className="content">
              <h3 className="text-right text-black fs-28 fw-500">
                {" "}
                وسائل متعددة للتبرع
              </h3>
              <p
                className="fw-400 fs-24 text-neutral-400 text-right"
                style={{ lineHeight: "2" }}
              >
                توفير خدمة توصيل التبرعات من المنزل او امكانية التبرع المالي
                اونلاين
              </p>
            </div>
            <div className="icon-container">
              <img src="/images/service-icon.png" alt="" />
            </div>
          </Card>
          <Card className="box-shadow">
            <div className="content">
              <h3 className="text-right text-black fs-28 fw-500">
                {" "}
                الحالات العاجله
              </h3>
              <p
                className="fw-400 fs-24 text-neutral-400 text-right"
                style={{ lineHeight: "2" }}
              >
                اتاحة عرض الحالات العاجله لدي كل جمعية لمساعدة الاكثر احتياجا في
                اسرع وقت
              </p>
            </div>
            <div className="icon-container">
              <img src="/images/service-icon.png" alt="" />
            </div>
          </Card>
          <Card className="box-shadow">
            <div className="content">
              <h3 className="text-right text-black fs-28 fw-500">
                {" "}
                منبه الصدقات
              </h3>
              <p
                className="fw-400 fs-24 text-neutral-400 text-right"
                style={{ lineHeight: "2" }}
              >
                خير يذكرك دائما باحب الاوقات للصدقات و اكثرها ثوابا و يذكرك
                باخراج زكاتك
              </p>
            </div>
            <div className="icon-container">
              <img src="/images/service-icon.png" alt="" />
            </div>
          </Card>
          <Card className="box-shadow">
            <div className="content">
              <h3 className="text-right text-black fs-28 fw-500">
                {" "}
                توفير جمعيات موثوقه
              </h3>
              <p
                className="fw-400 fs-24 text-neutral-400 text-right"
                style={{ lineHeight: "2" }}
              >
                الجمعيات الخيريه الموثوقه و المرخصه فقط هي المصرح لها بالانضمام
                الينا
              </p>
            </div>
            <div className="icon-container">
              <img src="/images/service-icon.png" alt="" />
            </div>
          </Card>
        </Grid>
      </div>
    </Layout>
  );
};

export default OurServicePage;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
`;

const Card = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8rem 2rem;
  gap: 2rem;
  .img-container {
    max-width: 100px;
  }
`;
