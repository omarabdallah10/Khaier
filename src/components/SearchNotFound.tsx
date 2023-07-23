type Props = {};

const SearchNotFound = (props: Props) => {
  return (
    <div
      className="container flex-col-center"
      style={{
        gap: "2rem",
        paddingBlock: "8rem 10rem",
        paddingInline: "2rem",
      }}
    >
      <img src="images/not-found.png" alt="" style={{ maxWidth: "400px" }} />
      <p className="text-center w-100 fw-600 fs-24">
        لم يتم العثور على تبرعات تطابق البحث
      </p>
    </div>
  );
};

export default SearchNotFound;
