import React from "react";
import Layout from "../hocs/Layout";
import Slider from "../components/Slider";
import GridList from "../components/GridList";
import DonationCard from "../components/DonationCard";
import CategoryCard from "../components/CategoryCard";
import CharityCard from "../components/CharityCard";
import CharitySection from "../components/CharitySection";
import Sub from "../components/Sub";
import Navbar from "../components/Navbar";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Layout>
      <Navbar />
      <Slider>
        <img src="images\adddddddddddd.png" alt="" />
        <img src="images\adddddddddddd.png" alt="" />
      </Slider>
      <div className="container">
        <h2 className="header-title">حالات عاجلة للتبرع</h2>
        <GridList>
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
        </GridList>
        <div
          className="w-100 flex"
          style={{ paddingBlock: "0rem 3rem", paddingInline: "3rem" }}
        >
          <button className="btn btn--outline-secondary-700 fs-20 fw-400">
            عرض المزيد
          </button>
        </div>
      </div>
      <div className="container">
        <h2 className="header-title">اقسام التبرعات</h2>
        <GridList>
          <CategoryCard imgUrl="/images/food-cat.png" title="طعام" />
          <CategoryCard imgUrl="/images/plastic-cat.png" title="بلاستيك" />
          <CategoryCard imgUrl="/images/clothes-cat.png" title="ملابس" />
          <CategoryCard imgUrl="/images/paper-cat.png" title="ورق" />
          <CategoryCard imgUrl="/images/medicine-cat.png" title="ادوية" />
        </GridList>
        <div
          className="w-100 flex"
          style={{ paddingBlock: "0rem 3rem", paddingInline: "3rem" }}
        ></div>
      </div>
      <CharitySection />
      <div className="container">
        <h2 className="header-title">الجمعيات الاقرب لك</h2>
        <GridList>
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
        </GridList>
        <div
          className="w-100 flex"
          style={{ paddingBlock: "0rem 3rem", paddingInline: "3rem" }}
        >
          <button className="btn btn--primary fs-20 fw-400">عرض المزيد</button>
        </div>
      </div>
      <Sub />
    </Layout>
  );
};

export default HomePage;
