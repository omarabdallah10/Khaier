import React from "react";
import GridList from "./GridList";
import Slider from "./Slider";

type Props = {};

const Parteners = (props: Props) => {
  return (
    <div className="container" style={{ marginBlock: "4rem" }}>
      <h2
        className="text-primary-600 fs-28 fw-500 text-center"
        style={{ paddingBlock: "2rem" }}
      >
        شركاؤنا
      </h2>
      <Slider>
        <GridList>
          <img src="/images/charityorg1-img.png" alt="" />
          <img src="/images/charityorg2-img.png" alt="" />
          <img src="/images/charityorg3-img.png" alt="" />
          <img src="/images/charityorg4-img.png" alt="" />
        </GridList>
        <GridList>
          <img src="/images/charityorg1-img.png" alt="" />
          <img src="/images/charityorg2-img.png" alt="" />
          <img src="/images/charityorg3-img.png" alt="" />
          <img src="/images/charityorg4-img.png" alt="" />
        </GridList>
      </Slider>
    </div>
  );
};

export default Parteners;
