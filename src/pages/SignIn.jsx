import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import SocialSignIn from "./SocialSignIn";
import Logo from "../components/Logo";
import Loader from "../components/Loader";

const Signin = () => {
  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="pt-32 sm:pt-56 pb-10 px-4 bg-grey dark:bg-darkmode">
      <div className="container mx-auto max-w-lg overflow-hidden rounded-lg bg-white dark:bg-darklight text-center px-8 py-14 sm:px-12 md:px-16">
        <div>
          <div className="mb-10 text-center mx-auto inline-block">
            <Logo />
          </div>

          <SocialSignIn />

          <span className="z-1 relative my-8 block text-center">
            <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-border dark:bg-dark_border"></span>
            <span className="text-muted dark:text-white/60 relative z-10 inline-block bg-white px-3 text-base dark:bg-darklight">
              OR
            </span>
          </span>

          <form /*onSubmit={handleSubmit} */>
            <div className="mb-[22px]">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                className="w-full rounded-md border placeholder:text-gray-400  border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mb-[22px]">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition  focus:border-primary focus-visible:shadow-none dark:border-border_color dark:text-white dark:focus:border-primary"
              />
            </div>
            <div className="mb-9">
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary hover:bg-primary/75 dark:hover:bg-darkprimary! px-5 py-3 text-base text-white font-medium transition duration-300 ease-in-out"
              >
                Sign In
                {loading && <Loader />}
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center justify-center">
            <Link
              to="/forgot-password"
              className="mb-2 inline-block text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Forget Password?
            </Link>
            <p className="text-body-secondary text-base">
              Not a member yet?{" "}
              <Link
                to="/signup"
                className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
