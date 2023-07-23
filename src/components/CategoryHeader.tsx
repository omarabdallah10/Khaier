import styled from "styled-components";


type Props = {
  imgPath: string;
  title: string;
};

const CategoryHeader = ({ imgPath, title }: Props) => {
  return (
    <Header path={imgPath}>
      <div className="container">
        <h1
          className="fw-600 fs-40 text-primary-100"
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

export default CategoryHeader;
type HeaderProps = {
  path: string;
};
const Header = styled.section<HeaderProps>`
  background-image: url(${(prop) => prop.path});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    min-height: 380px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
