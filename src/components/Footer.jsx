import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-Dark-primary dark:bg-darklight py-17 pb-6">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-12 sm:gap-1.875 gap-5">
          <div className="lg:col-span-4 col-span-12">
            <div className="md:pe-7.5">
              <Link to="#">
                <img
                  src="/images/logo/logo-white.svg"
                  alt="Logo"
                  width={151}
                  height={32}
                />
              </Link>
              <p className="mb-0 font-medium text-lg text-white/50 pt-2.188 pb-1.875">
                Rakon is a simple, elegant, and secure way to build your bitcoin
                and crypto portfolio.
              </p>
              <p className="text-lg font-medium text-white mb-0">
                1989 Don Jackson Lane
              </p>
              <p className="text-white/50 text-lg font-medium mb-0">
                Call us:{" "}
                <Link to="#" className="text-primary hover:text-orange-600">
                  808-956-9599
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium mb-2.375">
              Services
            </h4>
          </div>
          <div className="lg:col-span-2 sm:col-span-6 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium mb-2.375">
              Company
            </h4>
            <ul>
              <li className="pb-1.563">
                <Link
                  to="/portfolio"
                  className="text-lg font-medium text-white/50 hover:text-primary"
                >
                  Portfolio
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  to="/pricing"
                  className="text-lg font-medium text-white/50 hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  to="/blogs"
                  className="text-lg font-medium text-white/50 hover:text-primary"
                >
                  Blogs
                </Link>
              </li>
              <li className="pb-1.563">
                <Link
                  to="/contact"
                  className="text-lg font-medium text-white/50 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-7 col-span-12">
            <h4 className="text-lg text-white dark:text-white font-medium sm:mb-2.375 mb-6">
              Subscribe
            </h4>
            <p className="text-lg text-white/50 font-medium mb-4">
              Subscribe to get the latest news form us
            </p>
            <div className="flex sm:flex-nowrap flex-wrap items-center gap-2">
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Enter email address"
                className="text-base font-medium py-4 px-5 !rounded-lg dark:text-white dark:bg-darkmode h-full border border-border_color focus:border-primary dark:border-border_color dark:focus:border-primary"
              />
              <Link
                to="/contact"
                className="py-4 px-2.188 bg-primary text-white hover:bg-orange-600 rounded-lg duration-500 sm:w-fit w-full"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap gap-6 items-center justify-between sm:pt-17 pt-10">
          <p className="text-lg font-medium text-white/50 ">
            @2025 - All Rights Reserved by{" "}
            <Link to="#" className="hover:text-primary">
              SaaS Cande
            </Link>
          </p>
          <div className="flex gap-6 items-center">
            <Link
              to="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              <Icon
                icon="grommet-icons:facebook-option"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
            <Link
              to="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              <Icon
                icon="mage:twitter"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
            <Link
              to="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              <Icon
                icon="jam:google-plus"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
            <Link
              to="#"
              className="p-2 border-2 bg-transparent border-primary rounded-full group hover:bg-primary hover:border-primary"
            >
              <Icon
                icon="typcn:social-linkedin"
                width="24"
                height="24"
                className="text-primary group-hover:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
