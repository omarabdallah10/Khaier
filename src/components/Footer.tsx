import React from "react";
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitter, BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  return (
    <Foot className="bg-primary-600">
      <div className="container">
        <div
          className="grid-auto-fit"
          style={{
            padding: "5rem 2rem 2rem",
            gap: "3rem",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div className=" w-100">
            <h3
              className="section-title text-secondary-400 fs-22 fw-600 text-right"
              style={{ marginBottom: "2.5rem" }}
            >
              اتصل بنا
            </h3>
            <ul className="flex-col-end" style={{ gap: "2rem" }}>
              <li className="flex" style={{ gap: "10px" }}>
                <span className="text-white fs-18 fw-400">المنصورة ، مصر</span>
                <CiLocationOn size={25} color="white" />
              </li>
              <li className="flex" style={{ gap: "10px" }}>
                <span className="text-white fs-18 fw-400">+201003649691</span>
                <FiPhoneCall size={25} color="white" />
              </li>
              <li className="flex" style={{ gap: "10px" }}>
                <span className="text-white fs-18 fw-400">
                  Khaier@gmail.com
                </span>
                <AiOutlineMail size={25} color="white" />
              </li>
            </ul>
          </div>
          <div className=" w-100">
            <h3
              className="section-title text-secondary-400 fs-22 fw-600 text-right"
              style={{ marginBottom: "2.5rem" }}
            >
              روابط تهمك
            </h3>
            <ul className="flex-col-end" style={{ gap: "2rem" }}>
              <li className="flex text-white fs-18 fw-400">اقسام التبرعات</li>
              <li className="flex text-white fs-18 fw-400">الحالات العاجلة</li>
              <li className="flex text-white fs-18 fw-400">
                الجمعيات المتعاقدة
              </li>
              <li className="flex text-white fs-18 fw-400">حاسبة الزكاة</li>
            </ul>
          </div>
          <div className=" w-100">
            <h3
              className="section-title text-secondary-400 fs-22 fw-600 text-right"
              style={{ marginBottom: "2.5rem" }}
            >
              خريطة الموقع
            </h3>
            <ul className="flex-col-end" style={{ gap: "2rem" }}>
              <li className="flex text-white fs-18 fw-400">الرئيسية</li>
              <li className="flex text-white fs-18 fw-400">من نحن</li>
              <li className="flex text-white fs-18 fw-400">خدماتنا</li>
              <li className="flex text-white fs-18 fw-400">تواصل معنا</li>
            </ul>
          </div>

          <div className="flex-col-end  w-100" style={{ gap: "25px" }}>
            <div className="flex-center" style={{ gap: "10px" }}>
              <h3 className="fs-20 fw-500 text-white">خَـــيِّـــرْ</h3>
              <img src="/images/footer-logo.png" alt="" className="logo" />
            </div>
            <p
              className="text-neutral-100 fs-16 fw-400 text-right"
              style={{ width: "60%" }}
            >
              خير هو موقع وتطبيق وسيط بين المتبرع والجمعيات الخيرية ذات صلة.
            </p>
            <img
              src="/images/app-store.png"
              alt=""
              style={{ maxWidth: "100px" }}
            />
          </div>
        </div>
        <div
          className="social w-100 flex-center"
          style={{ gap: "3rem", paddingBlock: "2rem" }}
        >
          <Link to="" className="bg-white circle" style={{ padding: "8px" }}>
            <BsTwitter size={25} color="var(--clr-primary-600)" />
          </Link>
          <Link to="" className="bg-white circle" style={{ padding: "8px" }}>
            <BsFacebook size={25} color="var(--clr-primary-600)" />
          </Link>
          <Link to="" className="bg-white circle" style={{ padding: "8px" }}>
            <BsWhatsapp size={25} color="var(--clr-primary-600)" />
          </Link>
          <Link to="" className="bg-white circle" style={{ padding: "8px" }}>
            <BsInstagram size={25} color="var(--clr-primary-600)" />
          </Link>
        </div>
      </div>
      <p
        className="w-100 text-center text-white fw-600 fs-16"
        style={{ paddingBlock: "1rem 2rem" }}
      >
        خَـــيِّـــر - جميع الحقوق محفوظة © 2023
      </p>
    </Foot>
  );
};

export default Footer;

const Foot = styled.footer``;
