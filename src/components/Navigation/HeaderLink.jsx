import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderLink = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive =
    item.href === path ||
    (item.label && path.startsWith(`/${item.label.toLowerCase()}`));

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.href}
        className={`text-base flex items-center font-normal hover:text-primary dark:hover:text-primary ${
          isActive
            ? "!text-primary dark:!text-primary"
            : "text-black dark:text-white"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="ml-1"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <ul className="absolute py-2 left-0 mt-0.5 w-60 bg-white dark:bg-darklight shadow-lg rounded-lg z-50">
          {item.submenu?.map((subItem, index) => (
            <li key={index}>
              <Link
                to={subItem.href}
                className="block px-4 py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-darkmode"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default HeaderLink;
