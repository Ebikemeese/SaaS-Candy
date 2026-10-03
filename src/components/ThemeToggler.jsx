import React from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center text-body-color duration-300 hover:cursor-pointer hover:text-primary dark:text-white bg-white rounded-full dark:bg-darklight p-2 outline-none border border-transparent dark:border-darkborder shadow-sm"
    >
      <Icon
        icon="solar:sun-2-bold"
        width="24"
        height="24"
        className="hidden dark:block text-white"
      />
      <Icon
        icon="solar:moon-bold"
        width="24"
        height="24"
        className="dark:hidden block text-dark"
      />
    </button>
  );
};

export default ThemeToggler;
