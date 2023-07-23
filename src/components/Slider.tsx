import { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
type Props = {
  children: ReactElement[];
};

const ArrowNext = (
  clickHandler: () => void,
  hasNext: boolean,
  label: string
): ReactNode => {
  return (
    <ArrowRight
      size={25}
      color="var(--clr-neutral-400)"
      onClick={clickHandler}
    />
  );
};
const ArrowPrev = (
  clickHandler: () => void,
  hasNext: boolean,
  label: string
): ReactNode => {
  return (
    <ArrowLeft
      size={25}
      color="var(--clr-neutral-400)"
      onClick={clickHandler}
    />
  );
};
const Slider = ({ children }: Props) => {
  return (
    <Slide>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        transitionTime={1000}
        renderArrowNext={ArrowNext}
        renderArrowPrev={ArrowPrev}
      >
        {children}
      </Carousel>
    </Slide>
  );
};

export default Slider;

const Slide = styled.section`
  
`;

const ArrowRight = styled(AiOutlineArrowRight)`
  position: absolute;
  top: 50%;
  z-index: 5;
  right: 0;
  cursor: pointer;
`;
const ArrowLeft = styled(AiOutlineArrowLeft)`
  position: absolute;
  z-index: 5;
  top: 50%;
  left: 0;
  cursor: pointer;
`;
