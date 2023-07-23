import { ReactNode } from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Sub from "../components/Sub";
import DonationCard from "../components/DonationCard";
import CharitySection from "../components/CharitySection";
import CategoryHeader from "../components/CategoryHeader";
import NormalHeader from "../components/NormalHeader";
import CharityCard from "../components/CharityCard";
import GridList from "../components/GridList";
import Slider from "../components/Slider";
import CategoryCard from "../components/CategoryCard";
import Parteners from "../components/Parteners";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
