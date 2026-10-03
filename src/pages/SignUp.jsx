import { useNavigate, Link } from "react-router-dom";
import SocialSignUp from "./socialSignUp";
import Logo from "../components/Logo";
import { useState } from "react";
import Loader from "../components/Loader";

const SignUp = () => {
  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div className="pt-32 sm:pt-56 pb-10 px-4 bg-grey dark:bg-darkmode">
        <div className="container mx-auto max-w-lg overflow-hidden rounded-lg bg-white dark:bg-darklight text-center px-8 py-14 sm:px-12 md:px-16">
          <div className="mb-10 text-center mx-auto inline-block">
            <Logo />
          </div>

          <SocialSignUp />

          <span className="z-1 relative my-8 block text-center">
            <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-border dark:bg-dark_border"></span>
            <span className="text-muted dark:text-white/60 relative z-10 inline-block bg-white px-3 text-base dark:bg-dark">
              OR
            </span>
          </span>

          <form
          // onSubmit={handleSubmit}
          >
            <div className="mb-[22px]">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                // onChange={handleChange}
                required
                className={`w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary ${errors.name ? "border-red-500" : "border-stroke"}`}
              />
              {errors.name && (
                <p className="text-red-500 dark:text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-[22px]">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                // onChange={handleChange}
                required
                className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
              />
              {errors.email && (
                <p className="text-red-500 dark:text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-[22px]">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                // onChange={handleChange}
                required
                className="w-full rounded-md border border-border dark:border-dark_border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
              />
              {errors.password && (
                <p className="text-red-500 dark:text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="mb-9">
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary hover:bg-primary/75 dark:hover:bg-darkprimary! px-5 py-3 text-base text-white font-medium transition duration-300 ease-in-out"
              >
                Sign Up {loading && <Loader />}
              </button>
            </div>
          </form>

          <p className="text-body-secondary mb-4 text-base">
            By creating an account you are agree with our{" "}
            <a
              to="/#"
              className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"
            >
              Privacy
            </a>{" "}
            and{" "}
            <a
              to="/#"
              className="text-dark dark:text-white hover:text-primary dark:hover:text-primary"
            >
              Policy
            </a>
          </p>

          <p className="text-body-secondary text-base">
            Already have an account?
            <Link
              to={"./signin"}
              className="pl-2 text-dark dark:text-white hover:text-primary dark:hover:text-primary"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
