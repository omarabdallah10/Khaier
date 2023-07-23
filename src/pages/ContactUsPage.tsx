import Layout from "../hocs/Layout";
import CategoryHeader from "../components/CategoryHeader";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import GNavbar from "../components/GuestNavbar";

type Props = {};

const ContactUsPage = (props: Props) => {
  return (
    <Layout>
      <GNavbar />
      <CategoryHeader title="تواصل معنا" imgPath="/images/contactus-img.jpg" />
      <ContactForm />
    </Layout>
  );
};

export default ContactUsPage;

const ContactForm = () => {
  return (
    <Container className="container ">
      <div className="left | box-shadow">
        <div className=" w-100">
          <h2 className="text-secondary-700 fw-600 fs-22 text-right">
            اتصل بنا
          </h2>

          <ul className="flex-col-end" style={{ gap: "2rem" }}>
            <li className="flex" style={{ gap: "10px" }}>
              <span className="text-black fs-18 fw-400">المنصورة ، مصر</span>
              <CiLocationOn size={25} color="var(--clr-primary-600)" />
            </li>
            <li className="flex" style={{ gap: "10px" }}>
              <span className="text-black fs-18 fw-400">+201003649691</span>
              <FiPhoneCall size={25} color="var(--clr-primary-600)" />
            </li>
            <li className="flex" style={{ gap: "10px" }}>
              <span className="text-black fs-18 fw-400">Khaier@gmail.com</span>
              <AiOutlineMail size={25} color="var(--clr-primary-600)" />
            </li>
          </ul>
          <div className="social w-100">
            <Link
              to=""
              className="bg-primary-600 circle"
              style={{ padding: "8px" }}
            >
              <BsTwitter size={20} color="var(--clr-white)" />
            </Link>
            <Link
              to=""
              className="bg-primary-600 circle"
              style={{ padding: "8px" }}
            >
              <BsFacebook size={20} color="var(--clr-white)" />
            </Link>
            <Link
              to=""
              className="bg-primary-600 circle"
              style={{ padding: "8px" }}
            >
              <BsWhatsapp size={20} color="var(--clr-white)" />
            </Link>
            <Link
              to=""
              className="bg-primary-600 circle"
              style={{ padding: "8px" }}
            >
              <BsInstagram size={20} color="var(--clr-white)" />
            </Link>
          </div>
        </div>
      </div>
      <form className="right box-shadow">
        <div
          className="input-group w-100 flex-col-end"
          style={{ gap: ".5rem" }}
        >
          <label htmlFor="phone" className="fw-400 fs-18 cursor-pointer">
            اسم
          </label>
          <input
            type="text"
            placeholder="ادخل اسم"
            className="text-right text-black w-100"
            id="phone"
            name="phone"
            style={{ marginBottom: "30px" }}
          />
        </div>
        <div
          className="input-group w-100 flex-col-end"
          style={{ gap: ".5rem" }}
        >
          <label htmlFor="phone" className="fw-400 fs-18 cursor-pointer">
            البريد الالكتروني
          </label>
          <input
            type="email"
            placeholder="ادخل البريد الالكتروني"
            className="text-right text-black w-100"
            id="phone"
            name="phone"
            style={{ marginBottom: "30px" }}
          />
        </div>
        <div
          className="input-group w-100 flex-col-end"
          style={{ gap: ".5rem" }}
        >
          <label htmlFor="phone" className="fw-400 fs-18 cursor-pointer">
            الموضوع
          </label>
          <input
            type="text"
            placeholder="ادخل الموضوع"
            className="text-right text-black w-100"
            id="phone"
            name="phone"
            style={{ marginBottom: "30px" }}
          />
        </div>
        <div
          className="input-group w-100 flex-col-end"
          style={{ gap: ".5rem" }}
        >
          <label htmlFor="phone" className="fw-400 fs-18 cursor-pointer">
            الرسالة
          </label>
          <textarea
            placeholder="ادخل الرسالة"
            className="text-right text-black w-100 fw-400 fs-18"
            id="phone"
            name="phone"
            rows={6}
            style={{ marginBottom: "30px" }}
          />
        </div>
        <button
          type="button"
          className="btn btn--primary text-white fw-500 fs-20 w-30"
        >
          ارسال
        </button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
  padding: 8rem 1rem;
  @media (width <= 850px) {
    flex-direction: column-reverse;
  }
  .left {
    padding: 2rem;
    min-width: 288px;
    border-radius: 10px;
    flex: 1;
    h2 {
      margin-bottom: 4rem;
    }
    .social {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1.5rem;
      margin-top: 3rem;
    }
  }
  .right {
    flex: 3;
    border-radius: 10px;
    padding: 2.5rem 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;
