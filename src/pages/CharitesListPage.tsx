import React from "react";
import Layout from "../hocs/Layout";
import NormalHeader from "../components/NormalHeader";
import GridList from "../components/GridList";
import CharityCard from "../components/CharityCard";
import CharitySection from "../components/CharitySection";
import Sub from "../components/Sub";
import Navbar from "../components/Navbar";

type Props = {};

const CharitesListPage = (props: Props) => {
  return (
    <Layout>
      <Navbar />
      <NormalHeader title="الجمعيات الخيرية" max_height={270} />
      <div className="container">
        <GridList>
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
        </GridList>
      </div>
      <CharitySection />
      <div className="container">
        <GridList>
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
          <CharityCard imgUrl="/images/charityorg-img.png" />
        </GridList>
      </div>
      <Sub />
    </Layout>
  );
};

export default CharitesListPage;
