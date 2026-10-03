import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Hero = () => {
  const ref = useRef(null);

  const leftAnimation = {
    initial: { x: "-25%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };
  const rightAnimation = {
    initial: { x: "25%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  };

  const [isModalOpen, setIsSignInOpen] = useState(false);
  const openModal = () => {
    setIsSignInOpen(true);
  };

  const closeModal = () => {
    setIsSignInOpen(false);
  };
  return (
    <section className="overflow-x-hidden before:content-[''] before:absolute lg:before:h-full sm:before:h-2/3 before:h-3/5 before:bg-no-repeat before:bg-[url('/images/hero/right-background.svg')] before:bg-cover before:right-0 lg:before:top-0 before:bottom-0 lg:before:w-40% before:w-full lg:before:z-0 before:z-1 sm:before:block before:hidden after:content-[''] after:absolute after:bg-grey dark:after:bg-darklight after:h-full lg:after:w-60% after:w-full after:left-0 after:top-0 relative h-full lg:py-9.375! pt-24! pb-0!">
      <div className="container mx-auto lg:max-w-xl md:max-w-screen-md">
        <div className="grid-cols-12 grid z-1 items-center relative">
          <div className="lg:col-span-6 col-span-12 px-4">
            <motion.div
              {...leftAnimation}
              className="relative before:content-[''] before:absolute before:h-full before:w-full before:bg-[url('/images/hero/leftside-backlayer-icons.svg')] before:-left-9.375 before:bg-contain before:bg-no-repeat before:-z-1"
            >
              <h1 className="text-dark dark:text-white mb-0 md:text-65 sm:text-4xl text-3xl">
                Build Innovative Apps For Your Business
              </h1>
              <p className="text-lg font-medium text-black/50 dark:text-white/50 sm:py-1.875 py-5">
                Build smarter, move faster, and grow stronger with custom apps
                designed to support your business every step of the way.
              </p>
              <Link
                to="/services"
                className="sm:px-2.188 px-4 sm:py-1.125 py-2 rounded-lg text-base hover:cursor-pointer font-semibold bg-primary text-white hover:bg-orange-600 duration-500 inline-block sm:mb-0 mb-4"
              >
                Browse our services
              </Link>
            </motion.div>
          </div>
          <div className="lg:col-span-6 col-span-12 sm:bg-none bg-[url('/images/hero/right-background.svg')] px-4">
            <motion.div {...rightAnimation}>
              <img
                src="/images/hero/right-image.png"
                alt="hero Image"
                width={700}
                height={700}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
