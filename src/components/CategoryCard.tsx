import React from "react";
import styled from "styled-components";

type Props = {
  imgUrl: string;
  title: string;
};

const CategoryCard = ({ imgUrl, title }: Props) => {
  return (
    <Card>
      <img src={imgUrl} alt="" />
      <div className="cat-data | flex-col-end">
        <h2 className="text-white fs-24 fw-500">{title}</h2>
        <p className="fs-16 fw-400 text-white">1200 حالة عاجلة</p>
      </div>
    </Card>
  );
};

export default CategoryCard;

const Card = styled.div`
  max-width: 220px;
  position: relative;
  .cat-data {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;
