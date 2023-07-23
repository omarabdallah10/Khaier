import React from "react";
import Layout from "../hocs/Layout";
import CategoryHeader from "../components/CategoryHeader";
import GridList from "../components/GridList";
import DonationCard from "../components/DonationCard";
import CharitySection from "../components/CharitySection";
import Sub from "../components/Sub";
import Navbar from "../components/Navbar";

type Props = {};

const CategoryPage = (props: Props) => {
  return (
    <Layout>
      <Navbar />
      <CategoryHeader imgPath="/images/medicine-header.png" title="أدوية" />
      <div className="container">
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
      </div>
      <CharitySection />
      <div className="container">
        <GridList>
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
        </GridList>
      </div>
      <Sub />
    </Layout>
  );
};

export default CategoryPage;
