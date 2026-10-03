import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileHeaderLink = ({ item, onNavigate }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const handleToggle = (e) => {
    if (item.submenu) {
      e.preventDefault();
      setSubmenuOpen(!submenuOpen);
    } else if (onNavigate) {
      onNavigate();
    }
  };

  const isActive = item.href === path;

  return (
    <div className="relative w-full">
      <Link
        to={item.href}
        onClick={handleToggle}
        className={`flex items-center justify-between w-full py-2 text-black dark:text-white focus:outline-none ${
          isActive ? "!text-primary dark:!text-primary" : ""
        }`}
      >
        <span>{item.label}</span>
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
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
      {submenuOpen && item.submenu && (
        <div className="bg-gray-50 dark:bg-darkmode p-2 w-full rounded">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href}
              onClick={() => onNavigate && onNavigate()}
              className="block py-2 px-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
