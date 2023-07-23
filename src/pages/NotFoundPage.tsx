import React from "react";
import Layout from "../hocs/Layout";
import NormalHeader from "../components/NormalHeader";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <Layout>
      <NormalHeader max_height={200} title="خطأ" />
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
          لم يتم العثور على هذه الصفحة
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
