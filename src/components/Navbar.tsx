import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineBell, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import styled from "styled-components";
import useToggle from "../custom_hooks/useToggle";
const Navbar = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <AuthenticatedUserNav /> : <GuestUserNav />;
};

export default Navbar;

const GuestUserNav = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <GuestNav className="container" style={{ padding: "10px" }}>
      <nav
        className="flex-space-between w-100"
        style={{ paddingInline: "15px" }}
      >
        {!open ? (
          <MenuOpen
            size={30}
            color="var(--clr-neutral-400)"
            className="cursor-pointer"
            onClick={() => {
              toggleOpen();
            }}
          />
        ) : (
          <MenuClose
            size={30}
            color="var(--clr-neutral-400)"
            className="cursor-pointer"
            onClick={() => {
              toggleOpen();
            }}
          />
        )}
        <div
          className="left | flex-center"
          style={{ gap: "10px", padding: "15px" }}
        >
          <NavLink
            to="/signup"
            className="btn btn--primary no-underline text-white fs-16 fw-500 text-center"
          >
            انشاء حساب
          </NavLink>
          <NavLink
            to="/login"
            className="no-underline text-primary-600 fs-16 fw-500 text-center"
          >
            تسجيل دخول
          </NavLink>
        </div>
        <ul className="flex-center" style={{ gap: "50px" }}>
          <li>
            <NavLink
              to="/contact-us"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover"
            >
              تواصل معنا
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/our-service"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover text-right"
            >
              خدماتنا
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover"
            >
              من نحن
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover text-right link-active"
            >
              الرئيسية
            </NavLink>
          </li>
        </ul>
        <img src="/images/Logo.png" alt="" className="logo" />
      </nav>
      <nav
        className={`flex-space-between w-100 ${open ? "open" : ""}`}
        style={{ paddingInline: "15px" }}
      >
        <ul className="flex-center" style={{ gap: "50px" }}>
          <li>
            <NavLink
              to="/contact-us"
              className="text-neutral-400 fs-20 fw-500  no-underline link-hover"
            >
              تواصل معنا
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/our-service"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover"
            >
              خدماتنا
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover"
            >
              من نحن
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover link-active"
            >
              الرئيسية
            </NavLink>
          </li>
        </ul>
        <div
          className="left | flex-center"
          style={{ gap: "10px", padding: "15px" }}
        >
          <NavLink
            to="/signup"
            className="btn btn--primary no-underline text-white fs-16 fw-500 text-center"
          >
            انشاء حساب
          </NavLink>
          <NavLink
            to="/login"
            className="no-underline text-primary-600 fs-16 fw-500 text-center"
          >
            تسجيل دخول
          </NavLink>
        </div>
      </nav>
    </GuestNav>
  );
};
const MenuOpen = styled(RxHamburgerMenu)`
  display: none;
`;

const MenuClose = styled(AiOutlineClose)`
  display: none;
`;
const GuestNav = styled.div`
  nav:nth-child(2) {
    max-height: 0;

    gap: 3rem;
    flex-direction: column;
    transition: 1s ease-in-out;
    .left {
      flex-direction: column;
      transition: 1s ease-in-out;
      scale: 0;
      width: 100%;
      gap: 3rem !important;
      flex-direction: column;
      & > * {
        width: 60%;
      }
    }
    ul {
      width: 100%;
      flex-direction: column-reverse;
      transition: 1s ease-in-out;
      scale: 0;
      li {
        width: 100%;
        text-align: center;
      }
    }
  }
  @media (width <= 900px) {
    nav:nth-child(1) {
      ul {
        display: none;
      }
      .left {
        display: none;
      }
      ${MenuOpen} , ${MenuClose} {
        display: block;
      }
    }
    nav:nth-child(2).open {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      transition-delay: 0;
      max-height: 100vh;
      ul {
        scale: 1;
        flex-direction: column-reverse;
        transition-delay: 0;
        width: 100%;
        li {
          width: 100%;
          text-align: center;
        }
      }
      .left {
        transition-delay: 0;
        scale: 1;
        width: 100%;
        gap: 3rem !important;
        flex-direction: column;
        & > * {
          width: 60%;
        }
      }
    }
  }
`;
const AuthenticatedUserNav = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <AuthNav className="container">
      <nav
        className={`flex-space-between w-100 relative`}
        style={{ gap: "50px", paddingInline: "10px" }}
      >
        {!open ? (
          <MenuOpen
            size={30}
            color="var(--clr-neutral-400)"
            className="cursor-pointer"
            onClick={() => {
              toggleOpen();
            }}
          />
        ) : (
          <MenuClose
            size={30}
            color="var(--clr-neutral-400)"
            className="cursor-pointer"
            onClick={() => {
              toggleOpen();
            }}
          />
        )}

        <div
          className="left | flex-center"
          style={{ gap: "15px", padding: "15px" }}
        >
          <div className="flex-center" style={{ gap: "10px" }}>
            <FiChevronDown className="cursor-pointer" size={25} />
            <img
              src="/images/profile-img.png"
              alt=""
              className="profile-img-logo"
            />
          </div>
          <span className="v-divider bg-neutral-400"></span>
          <AiOutlineBell
            color="var(--clr-primary-600)"
            className="cursor-pointer"
            size={30}
          />
          <NavLink
            to="/zaka"
            className="btn btn--primary no-underline text-white fs-20 fw-500"
          >
            احسب ذكاتك
          </NavLink>
        </div>
        <div className="input-group | relative" style={{ flex: "1" }}>
          <input
            type="text"
            name="search"
            id=""
            className="w-100 text-right rounded"
            placeholder="بحث عن تبرعات"
          />
          <SearchIcon size={20} color="var(--clr-neutral-400)" />
        </div>
        <ul className="flex-center" style={{ gap: "30px" }}>
          <li>
            <NavLink
              to="/donations"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover"
            >
              اقسام التبرعات
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/charites/"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover"
            >
              الجمعيات الخيرية
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/homepage"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover link-active"
            >
              الرئيسية
            </NavLink>
          </li>
        </ul>

        <img src="/images/Logo.png" alt="" className="logo" />
      </nav>
      <nav
        className={`flex-space-between w-100 relative ${open ? "open" : ""}`}
        style={{ gap: "50px", paddingInline: "10px" }}
      >
        <div
          className="left | flex-center"
          style={{ gap: "15px", paddingBottom: "25px" }}
        >
          <div className="flex-center" style={{ gap: "10px" }}>
            <FiChevronDown className="cursor-pointer" size={25} />
            <img
              src="/images/profile-img.png"
              alt=""
              className="profile-img-logo"
            />
          </div>

          <AiOutlineBell
            color="var(--clr-primary-600)"
            className="cursor-pointer"
            size={30}
          />
          <NavLink
            to="/signup"
            className="btn btn--primary no-underline text-white fs-16 fw-500"
          >
            احسب ذكاتك
          </NavLink>
        </div>
        <div className="input-group | relative" style={{ flex: "1" }}>
          <input
            type="text"
            name="search"
            id=""
            className="w-100 text-right rounded"
            placeholder="بحث عن تبرعات"
          />
          <SearchIcon size={20} color="var(--clr-neutral-400)" />
        </div>
        <ul className="flex-center" style={{ gap: "30px" }}>
          <li>
            <NavLink
              to="#"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover"
            >
              اقسام التبرعات
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover"
            >
              الجمعيات الخيرية
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              className="text-neutral-400 fs-20 fw-500 no-underline link-hover link-active"
            >
              الرئيسية
            </NavLink>
          </li>
        </ul>
      </nav>
    </AuthNav>
  );
};

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  translate: 50% -50%;
  top: 50%;
  left: 0;
`;

const AuthNav = styled.div`
  nav:nth-child(2) {
    display: none;
  }
  @media (width <= 1080px) {
    nav:nth-child(2) {
      display: flex;
    }
    nav:nth-child(1) {
      ul {
        display: none;
      }
      div {
        display: none;
      }

      ${MenuOpen} , ${MenuClose} {
        display: block;
      }
    }
    nav:nth-child(2) {
      max-height: 0;
      flex-direction: column-reverse;

      transition: 1s ease-in-out;
      ul {
        flex-direction: column-reverse;
      }
      .input-group {
        flex-direction: column-reverse;
        width: 60%;
      }
      .left {
        transition: all 1s ease-in-out;
        scale: 0;
        opacity: 0;
      }
    }
    nav.open {
      max-height: 100vh;
      transition-delay: 0s;
      .left {
        scale: 1;
        opacity: 1;
        transition-delay: 0s;
      }
    }
  }
`;
