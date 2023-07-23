import styled from "styled-components";

type Props = {
  max_height: number;
  title: string;
};

const NormalHeader = ({ max_height, title }: Props) => {
  return (
    <Header maxHeight={max_height} className="bg-secondary-100">
      <div className="container">
        <h1
          className="fw-600 fs-40 text-primary-600"
          style={{
            padding: "2rem",
          }}
        >
          {title}
        </h1>
      </div>
    </Header>
  );
};

export default NormalHeader;
type HeaderProps = {
  maxHeight: number;
};
const Header = styled.section<HeaderProps>`
  .container {
    min-height: ${(prop) => prop.maxHeight}px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
