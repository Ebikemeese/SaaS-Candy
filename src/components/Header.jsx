import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { headerData } from "./Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import Signin from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const navbarRef = useRef();
  const signInRef = useRef();
  const signUpRef = useRef();
  const mobileMenuRef = useRef();

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event) => {
    if (signInRef.current && !signInRef.current.contains(event.target)) {
      setIsSignInOpen(false);
    }
    if (signUpRef.current && !signUpRef.current.contains(event.target)) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 py-1 z-50 w-full bg-transparent transition-all ${
        sticky ? "shadow-lg bg-white dark:bg-darklight" : "shadow-none"
      }`}
    >
      <div
        className={`container mx-auto lg:max-w-xl md:max-w-screen-md flex items-center justify-between  xl:gap-15 gap-10 duration-300 px-4 ${
          sticky ? "py-3" : "py-6"
        }`}
      >
        <Logo />
        <ul className="hidden xl:flex flex-grow items-center justify-start gap-10 ">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center text-body-color duration-300 hover:cursor-pointer hover:text-primary dark:text-white bg-white rounded-full dark:bg-darklight p-2 outline-none"
          >
            <Icon
              icon="solar:sun-2-bold"
              width="24"
              height="24"
              className="hidden dark:block"
            />
            <Icon
              icon="solar:moon-bold"
              width="24"
              height="24"
              className="dark:hidden block"
            />
          </button>
          <Link
            to="/signin"
            className="hidden xl:block bg-transparent border border-primary text-primary px-4 py-2 rounded-lg outline-none hover:bg-primary hover:text-white duration-500 text-base font-semibold"
          >
            Sign In
          </Link>
          {isSignInOpen && (
            <div
              ref={signInRef}
              className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
            >
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-darkmode">
                <button
                  onClick={() => setIsSignInOpen(false)}
                  className="w-5 h-5 absolute top-0 right-0 mr-8 mt-8 text-black/50 dark:text-white/50"
                  aria-label="Close Sign In Modal"
                >
                  <Icon icon="ph:x-circle" width="24" height="24" />
                </button>
                <Signin />
              </div>
            </div>
          )}
          <Link
            to="/signup"
            className="hidden xl:block bg-primary text-white px-4 py-2 rounded-lg outline-none hover:bg-orange-600 border border-primary duration-500 text-base font-semibold"
          >
            Sign Up
          </Link>
          {/* {user?.user || session?.user ? (
            <>
              <div className="relative group flex items-center justify-center">
                <img
                  src="/images/profile.png"
                  alt="Image"
                  width={35}
                  height={35}
                  quality={100}
                  className="rounded-full cursor-pointer"
                />
                <p className="absolute w-fit text-sm font-medium text-center z-10 invisible group-hover:visible transition-opacity duration-200 bg-primary text-white py-1 px-3 min-w-28 rounded-md shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3">
                  {user?.user || session?.user?.name}
                </p>
              </div>
              <button
                onClick={() => handleSignOut()}
                className="hidden lg:block bg-primary text-sm hover:bg-orange-600 text-white px-4 py-3.5 border border-primary duration-500 leading-none rounded-lg font-medium text-nowrap cursor-pointer"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="hidden xl:block bg-transparent border border-primary text-primary px-4 py-2 rounded-lg outline-none hover:bg-primary hover:text-white duration-500 text-base font-semibold"
              >
                Sign In
              </Link>
              {isSignInOpen && (
                <div
                  ref={signInRef}
                  className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
                >
                  <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-darkmode">
                    <button
                      onClick={() => setIsSignInOpen(false)}
                      className="w-5 h-5 absolute top-0 right-0 mr-8 mt-8 text-black/50 dark:text-white/50"
                      aria-label="Close Sign In Modal"
                    >
                      <Icon icon="ph:x-circle" width="24" height="24" />
                    </button>
                    <Signin />
                  </div>
                </div>
              )}
              <Link
                to="/signup"
                className="hidden xl:block bg-primary text-white px-4 py-2 rounded-lg outline-none hover:bg-orange-600 border border-primary duration-500 text-base font-semibold"
              >
                Sign Up
              </Link>
              {isSignUpOpen && (
                <div
                  ref={signUpRef}
                  className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
                >
                  <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center dark:bg-darkmode">
                    <button
                      onClick={() => setIsSignUpOpen(false)}
                      className="w-5 h-5 absolute top-0 right-0 mr-8 mt-8 text-black/50 dark:text-white/50"
                      aria-label="Close Sign Up Modal"
                    >
                      <Icon icon="ph:x-circle" width="24" height="24" />
                    </button>
                    <SignUp />
                  </div>
                </div>
              )}
            </>
          )} */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block xl:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary"></span>
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary mt-1.5"></span>
            <span className="block w-6 h-0.5 bg-primary dark:bg-primary mt-1.5"></span>
          </button>
        </div>
      </div>
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
      )}
      <div
        ref={mobileMenuRef}
        className={`xl:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-darklight shadow-lg transform transition-transform duration-300 max-w-xs ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-midnight_text"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-4 flex gap-4 w-full">
            <Link
              to="/signin"
              className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-orange-600 hover:text-white"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
