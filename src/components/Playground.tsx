import styled from "styled-components";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
type Props = {
  direction: "row" | "col";
};

const DonationCard = ({ direction }: Props) => {
  const CardData = {
    type: "ادوية",
    disc: "ساعد ساره في العلاج",
    reached: 60,
    daysLeft: 12,
    isMarked: false,
  };
  const { type, disc, reached, daysLeft, isMarked } = CardData;
  return (
    <Card dir={direction}>
      <div className="img-container">
        <img src="/images/donation-img.png" alt="" />
        <div className="icon-container">
          {!CardData.isMarked ? (
            <BsBookmark color="var(--clr-primary-600)" size={25} />
          ) : (
            <BsBookmarkFill color="var(--clr-primary-600)" size={25} />
          )}
        </div>
      </div>
      <div className="data-container">
        <div className="flex-space-between w-100">
          <Link
            to="/category"
            className="btn btn--outline-primary btn--small no-underline fs-14"
          >
            {type}
          </Link>
          <p className="text-black fs-16 fw-600">
            {disc.length < 25 ? `${disc}` : `...${disc.substring(0, 19)}`}
          </p>
        </div>
        <Status value={reached}>
          <p className="text-right text-black fs-14 fw-400">
            تم الوصول الي{" "}
            <span className="text-secondary-700 fs-14 fw-600">{reached}%</span>{" "}
            من هدفنا
          </p>
          <span className="progress"></span>
          <p className="w-100 text-primary-600 fw-400 fs-14 ">
            متبقي {daysLeft} يوم
          </p>
        </Status>
        <button type="button" className="btn btn--primary text-white w-100">
          تبرع الان
        </button>
      </div>
    </Card>
  );
};

export default DonationCard;
type CardProps = {
  dir: string;
};
const Card = styled.div<CardProps>`
  max-width: ${(props) => (props.dir === "col" ? 290 : 610)}px;
  max-height: ${(props) => (props.dir === "col" ? 350 : 200)}px;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: var(--clr-white);
  display: flex;
  flex-direction: ${(props) =>
    props.dir === "col" ? "column" : "row-reverse"};
  align-items: center;
  justify-content: center;
  gap: 2rem;
  -webkit-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.58);
  .data-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    width: ${(props) => (props.dir === "col" ? 100 : 50)}%;
  }
  .img-container {
    position: relative;
    flex: 1;
    .icon-container {
      background-color: var(--clr-white);
      padding: 5px;
      border-radius: 5px;
      position: absolute;
      top: 15px;
      left: 15px;
    }
  }
`;
type StatusProps = {
  value: number;
};
const Status = styled.div<StatusProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 5px;
  .progress {
    position: relative;
    height: 10px;
    overflow: hidden;
    border-radius: 100vw;
    background-color: var(--clr-neutral-100);
    &::after {
      content: "";
      position: absolute;
      right: 0;
      width: ${(props) => props.value}%;
      height: 100%;
      background-color: var(--clr-secondary-700);
    }
  }
`;
