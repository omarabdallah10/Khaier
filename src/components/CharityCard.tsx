import React from "react";
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { BiBadgeCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
type Props = {
  imgUrl: string;
};

const CharityCard = ({ imgUrl }: Props) => {
  const CardData = {
    name: "جمعية رسالة الخيرية",
    location: "المنصورة، الدقهلية",
    disc: "ساعد ساره في العلاج",
    isMarked: false,
  };
  const { name, disc, location } = CardData;
  return (
    <Card>
      <div className="img-container">
        <img src={imgUrl} alt="" />
        <div className="icon-container">
          {!CardData.isMarked ? (
            <BsBookmark color="var(--clr-primary-600)" size={25} />
          ) : (
            <BsBookmarkFill color="var(--clr-primary-600)" size={25} />
          )}
        </div>
      </div>
      <div className="flex-center" style={{ gap: ".5rem" }}>
        <BiBadgeCheck color="var(--clr-secondary-700)" size={25} />
        <p className="text-black fs-20 fw-600">{name}</p>
      </div>
      <div className="flex-center" style={{ gap: ".5rem" }}>
        <p className="text-neutral-400 fs-16 fw-600">{location}</p>
        <CiLocationOn color="var(--clr-primary-600)" size={25} />
      </div>
      <p className="fs-14 text-black fw-500 text-right">
        جمعية الأمل نشأت في ظل الظروف الراهنة والصعبة كما هي حال الطــــــــــبي
        الخــــيري الطــــــــــبي الخــــيري جمعية الأمل نشأت في ظل الظروف...
        <span className="text-primary-600">المزيد</span>
      </p>
    </Card>
  );
};

export default CharityCard;

const Card = styled.div`
  max-width: 300px;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: var(--clr-white);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  -webkit-box-shadow: 0px 0px 0px 0.3px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 0px 0.3px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 0px 0.3px rgba(0, 0, 0, 0.58);
  .img-container {
    position: relative;

    .icon-container {
      background-color: var(--clr-white);
      padding: 5px;
      border-radius: 5px;
      position: absolute;
      top: 15px;
      left: 10px;
    }
  }
`;
