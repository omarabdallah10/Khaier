import React, { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const GridList = ({ children }: Props) => {
  return <Grid className="container">{children}</Grid>;
};

export default GridList;

const Grid = styled.section`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 5rem 2rem;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
