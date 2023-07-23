import React from "react";
import Layout from "../hocs/Layout";
import GridList from "../components/GridList";
import DonationCard from "../components/DonationCard";
import Sub from "../components/Sub";
import NormalHeader from "../components/NormalHeader";
import SearchNotFound from "../components/SearchNotFound";
import Navbar from "../components/Navbar";

type Props = {};

const SearchResultPage = (props: Props) => {
  return (
    <Layout>
      <Navbar />
      <NormalHeader title="نتائج البحث" max_height={270} />
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
      <SearchNotFound />
      <Sub />
    </Layout>
  );
};

export default SearchResultPage;
