import styled from "styled-components";
import Aos from "aos";
import { useEffect } from "react";
import CharitySection from "../components/CharitySection";
import DonationCard from "../components/DonationCard";
import GridList from "../components/GridList";
import Parteners from "../components/Parteners";
import Layout from "../hocs/Layout";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import GNavbar from "../components/GuestNavbar";
const LandingPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, mirror: true });
  }, []);
  return (
    <Layout>
      <GNavbar />
      <BG>
        <div className="container " data-aos="zoom-in">
          <p className="w-60 text-right fs-48 text-white">
            اجعل حياة شخص ما سعيده من خلال عطائك
          </p>
          <p className="text-neutral-100 fs-24 fw-400 text-right w-70">
            ملايين من الناس مستنيين تبرعك للحصول علي حياة كريمة
          </p>
          <button className="btn btn--secondary-700 fs-20 fw-500 w-20">
            اتبرع الان
          </button>
        </div>
      </BG>
      {/* Who are we */}
      <We className="container">
        <div className="right" data-aos="fade-right">
          <h2 className="text-primary-600 text-right fs-32 fw-500">من نحن</h2>
          <p className="text-black fw500 fs-48 text-right">
            خير هو موقع وتطبيق وسيط بين المتبرع والجمعيات الخيرية
          </p>
          <p className="text-neutral-400 fs-26-fw-400 text-right">
            خير هو موقع و تطبيق وسيط بين المتبرع و الجمعيات الخيريه يوفر طرق
            متعددة للتبرع لتسهيل عملية التبرع من خلال توصيل تبرعك للجمعيات
            الاكثر احتياجا الغير حاصله علي الدعم الكافي لتوفير التبرعات اللازمه
            للمحتاجين بشكل افضل
          </p>
          <Link to="/signup" className="btn btn--primary no-underline">
            انضم الينا الان
          </Link>
        </div>
        <div className="left flex-center" data-aos="fade-left">
          <img src="/images/aboutus.png" alt="" className="w-80" />
        </div>
      </We>

      {/* Services */}
      <div className="bg-secondary-100">
        <div
          className="flex-col-center"
          style={{ padding: "4rem 2rem", gap: "3rem" }}
        >
          <p className="text-center text-primary-600 fw-500 fs-28">خدماتنا</p>
          <p className="text-center text-black fw-500 fs-40 w-80">
            خير هو موقع وتطبيق وسيط بين المتبرع والجمعيات الخيرية خدماتنا
          </p>
          <GridList>
            <div
              className="flex-col-center"
              data-aos="zoom-in"
              style={{ gap: "2rem", padding: "2rem" }}
            >
              <img
                src="/images/service-icon2.png"
                alt=""
                style={{ maxWidth: "75px" }}
              />
              <p className="text-black fw-500 fs-24 text-center">
                الحالات العاجله
              </p>
              <p className="text-neutral-400 text-center fs-24 fw-400">
                اتاحة عرض الحالات العاجله لدي كل جمعية لمساعدة الاكثر احتياجا في
                اسرع وقت
              </p>
            </div>

            <div
              className="flex-col-center"
              data-aos="zoom-in"
              style={{ gap: "2rem" }}
            >
              <img
                src="/images/service-icon3.png"
                alt=""
                style={{ maxWidth: "75px" }}
              />
              <p className="text-black fw-500 fs-24 text-center">
                وسائل متعددة للتبرع
              </p>
              <p className="text-neutral-400 text-center fs-24 fw-400">
                توفير خدمة توصيل التبرعات من المنزل او امكانية التبرع المالي
                اونلاين
              </p>
            </div>
            <div
              className="flex-col-center"
              data-aos="zoom-in"
              style={{ gap: "2rem" }}
            >
              <img
                src="/images/service-icon.png"
                alt=""
                style={{ maxWidth: "75px" }}
              />
              <p className="text-black fw-500 fs-24 text-center">
                توفير جمعيات موثوقه
              </p>
              <p className="text-neutral-400 text-center fs-24 fw-400">
                الجمعيات الخيريه الموثوقه و المرخصه فقط هي المصرح لها بالانضمام
                الينا
              </p>
            </div>
          </GridList>
        </div>
      </div>

      {/* Donation Areas */}
      <Area className="container">
        <div className="right" data-aos="fade-right">
          <h2 className="text-primary-600 text-right fs-32 fw-500">
            اقسام التبرعات
          </h2>
          <p className="text-black fw500 fs-48 text-right">
            تقدر تتبرع بكافة انواع التبرعات
          </p>
          <p className="text-neutral-400 fs-26-fw-400 text-right">
            يتيح لك خير اختيار نوع تبرعك من خلال الاقسام المتعددة المتاحه لدينا
            ثم عرض الحالات و الجمعيات المتاح التبرع لها في هذا القسم
          </p>
          <Link to="/donations" className="btn btn--primary no-underline">
            تبرع الان
          </Link>
        </div>
        <div className="left flex-col-center" data-aos="fade-left">
          <div className="flex w-100">
            <div className="icon-group">
              <div className="img-container">
                <img src="/images/food-icon.png" alt="" />
              </div>
              <h3 className="text-center text-black fw-500 fs-24">طعام</h3>
            </div>
            <div className="icon-group">
              <div className="img-container">
                <img src="/images/medicine-icon.png" alt="" />
              </div>
              <h3 className="text-center text-black fw-500 fs-24">ادوية</h3>
            </div>
          </div>
          <div className="flex w-100">
            <div className="icon-group">
              <div className="img-container">
                <img src="/images/clothes-icon.png" alt="" />
              </div>
              <h3 className="text-center text-black fw-500 fs-24">ملابس</h3>
            </div>
            <div className="icon-group">
              <div className="img-container">
                <img src="/images/plastic-icon.png" alt="" />
              </div>
              <h3 className="text-center text-black fw-500 fs-24">بلاستيك</h3>
            </div>
          </div>
        </div>
      </Area>

      {/* Counters */}
      <div className="bg-primary-100">
        <Counter
          data-aos="zoom-in"
          className="container flex-space-between"
          style={{ padding: "4rem 2rem", gap: "2rem" }}
        >
          <div
            className="flex-col-center "
            style={{ gap: "2rem", padding: "2rem" }}
          >
            <div className="flex">
              <CountUp
                end={65}
                start={0}
                className="text-primary-600 fw-500 fs-48"
                enableScrollSpy={true}
                scrollSpyDelay={6}
                scrollSpyOnce={false}
                useEasing={false}
                duration={5}
                delay={2}
              />
            </div>
            <p className="fs-24 fw-500">جمعية خيرية</p>
          </div>
          <div
            className="flex-col-center "
            style={{ gap: "2rem", padding: "2rem" }}
          >
            <div className="flex" style={{ gap: "1rem" }}>
              <p className="text-primary-600 fw-500 fs-48">ألف</p>

              <CountUp
                end={120}
                start={0}
                className="text-primary-600 fw-500 fs-48"
                enableScrollSpy={true}
                scrollSpyDelay={6}
                scrollSpyOnce={false}
                useEasing={false}
                duration={5}
                delay={2}
              />
            </div>
            <p className="fs-24 fw-500">متبرع</p>
          </div>
          <div
            className="flex-col-center "
            style={{ gap: "2rem", padding: "2rem" }}
          >
            <div className="flex" style={{ gap: "1rem" }}>
              <p className="text-primary-600 fw-500 fs-48">ألف</p>

              <CountUp
                end={255}
                start={0}
                className="text-primary-600 fw-500 fs-48"
                useEasing={false}
                enableScrollSpy={true}
                scrollSpyDelay={6}
                scrollSpyOnce={false}
                duration={5}
                delay={2}
              />
            </div>
            <p className="fs-24 fw-500">حاله عاجلة تمت</p>
          </div>
        </Counter>
      </div>

      {/* Donation cases */}
      <div
        className="container flex-col-center"
        style={{ padding: "4rem 0rem" }}
      >
        <h2 className="text-primary-600 fs-24 fw-500 text-center">
          حالات عاجلة
        </h2>
        <p className="text-black fs-40 fw-500 text-center">
          حالات متاحة للتبرع والدعم
        </p>
        <GridList>
          <div data-aos="zoom-in">
            <DonationCard />
          </div>
          <div data-aos="zoom-in">
            <DonationCard />
          </div>
          <div data-aos="zoom-in">
            <DonationCard />
          </div>
          <div data-aos="zoom-in">
            <DonationCard />
          </div>
        </GridList>
      </div>
      <CharitySection />
      <Parteners />
    </Layout>
  );
};

export default LandingPage;

const Counter = styled.div`
  @media (width <= 750px) {
    flex-direction: column;
    & > * {
      width: 100%;
    }
  }
`;

const BG = styled.div`
  background-image: url("/images/hero-img.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .container {
    padding-inline: 2rem;
    min-height: 688px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 3rem;
  }
  @media (width <= 768px) {
    .container {
      align-items: center;
      & > * {
        width: 100%;
        text-align: center;
      }
      .btn {
        width: 40%;
      }
    }
  }
`;

const We = styled.div`
  padding: 8rem 2rem;
  display: flex;
  & > * {
    width: 50%;
  }
  .right {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
  }
  @media (width <= 850px) {
    flex-direction: column-reverse;
    & > * {
      width: 100%;
    }
    p:nth-child(2) {
      font-size: 36px;
    }
  }
`;
const Area = styled.div`
  padding: 8rem 2rem;
  display: flex;
  flex-direction: row-reverse;
  & > * {
    width: 50%;
  }
  .right {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
  }
  .left {
    display: flex;

    gap: 5rem;
    .icon-group {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3rem;
      width: 50%;
      cursor: pointer;
      .img-container {
        padding: 2.5rem;
      }
      &:hover .img-container {
        background-color: var(--clr-secondary-100);
      }
    }
  }

  @media (width <= 850px) {
    flex-direction: column-reverse;
    & > * {
      width: 100%;
    }
    p:nth-child(2) {
      font-size: 36px;
    }
  }
`;
