import CharitySection from "../components/CharitySection";
import DonationCard from "../components/DonationCard";
import GridList from "../components/GridList";
import Navbar from "../components/Navbar";
import NormalHeader from "../components/NormalHeader";
import Layout from "../hocs/Layout";

type Props = {};

const DonationPage = (props: Props) => {
  return (
    <Layout>
      <Navbar />
      <NormalHeader max_height={280} title="حالات عاجلة للتبرع" />
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
        </GridList>
      </div>
    </Layout>
  );
};

export default DonationPage;
