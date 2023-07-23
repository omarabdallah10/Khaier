import React, { useState } from "react";
import Layout from "../hocs/Layout";
import NormalHeader from "../components/NormalHeader";
import styled from "styled-components";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import GridList from "../components/GridList";
import DonationCard from "../components/DonationCard";
import Navbar from "../components/Navbar";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <Layout>
      <Navbar />
      <NormalHeader max_height={180} title="البيانات الشخصية" />
      <ProfileForm />
      <NormalHeader max_height={180} title="تبرعاتي" />
      <GridList>
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </GridList>
      <NormalHeader max_height={180} title="تتبع التبرع" />
    </Layout>
  );
};

export default ProfilePage;

const ProfileForm = () => {
  const [passVisiable, setPassVisiable] = useState(false);

  return (
    <FormContainer className="container">
      <form className="form box-shadow">
        <div className="row">
          <div
            className="input-group w-100 flex-col-end"
            style={{ gap: ".5rem" }}
          >
            <label htmlFor="phone" className="fw-400 fs-18 cursor-pointer">
              رقم الهاتف
            </label>
            <input
              type="text"
              placeholder="ادخل رقم الهاتف"
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
            <label htmlFor="name" className="fw-400 fs-18 cursor-pointer">
              اسم
            </label>
            <input
              type="text"
              placeholder="ادخل اسم"
              className="text-right text-black w-100"
              id="name"
              name="name"
              style={{ marginBottom: "30px" }}
            />
          </div>
        </div>
        <div className="row">
          <div
            className="input-group w-100 flex-col-end"
            style={{ gap: ".5rem" }}
          >
            <label htmlFor="password" className="fw-400 fs-18 cursor-pointer">
              كلمة المرور
            </label>
            <div className="input-pass w-100">
              <input
                type={passVisiable ? "text" : "password"}
                placeholder="ادخل كلمة المرور"
                className="text-right text-black w-100"
                name="password"
                id="password"
              />
              {passVisiable ? (
                <ClosedEye
                  size={22}
                  onClick={() => {
                    setPassVisiable(!passVisiable);
                  }}
                />
              ) : (
                <OpenEye
                  size={22}
                  onClick={() => {
                    setPassVisiable(!passVisiable);
                  }}
                />
              )}
            </div>
          </div>
          <div className="row">
            <div
              className="input-group w-100 flex-col-end"
              style={{ gap: ".5rem" }}
            >
              <label htmlFor="name" className="fw-400 fs-18 cursor-pointer">
                المنطقة
              </label>
              <input
                type="text"
                placeholder="اختار المنطقة"
                list="district"
                className="text-right text-black w-100"
                id="distriction"
                name="name"
                style={{ marginBottom: "30px" }}
              />

              <datalist id="district">
                <option value="طلخا" />
                <option value="حي الجامعة" />
                <option value="توريل" />
              </datalist>
            </div>
            <div
              className="input-group w-100 flex-col-end"
              style={{ gap: ".5rem" }}
            >
              <label htmlFor="name" className="fw-400 fs-18 cursor-pointer">
                المدينة
              </label>
              <input
                type="text"
                placeholder="اختار المدينة"
                className="text-right text-black w-100"
                id="city"
                list="cityOptions"
                name="name"
                style={{ marginBottom: "30px" }}
              />
              <datalist id="cityOptions">
                <option value="المنصورة" />
                {/* <option value="option2" />
                <option value="option3" /> */}
              </datalist>
            </div>
          </div>
        </div>

        <button className="btn btn--primary w-20">تعديل</button>
      </form>
    </FormContainer>
  );
};
const ClosedEye = styled(AiOutlineEyeInvisible)``;
const OpenEye = styled(AiOutlineEye)``;
const FormContainer = styled.form`
  padding: 4rem 2rem;
  form {
    padding: 2rem;

    .row {
      display: flex;
      gap: 3rem;
      & > * {
        width: 50%;
      }
    }
  }
  .input-group .input-pass {
    position: relative;
    ${OpenEye} , ${ClosedEye} {
      position: absolute;
      left: 22px;
      top: 52%;
      translate: -50% -50%;
      cursor: pointer;
    }
  }
  @media (width <= 730px) {
    form > .row {
      gap: 1rem;
      flex-direction: column;
      & > * {
        width: 100%;
      }
    }
    .btn {
      width: 40%;
    }
  }
`;
