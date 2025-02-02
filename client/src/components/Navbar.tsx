import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logomini from "../assets/logo-mini.png";
import logo from "../assets/logo.png";
import { isMobile, isTablet } from 'react-device-detect';

interface NavbarProps {
  setVisible: (value: boolean) => void;
}

const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
  const handleClick = () => {
    props.setVisible(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    window.location.href = "/";
  };

  // const [isMobile, setIsMobile] = useState({});

  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between px-6 md:px-12 py-3 border-b-white/20 border-b-2"
      >
        <Link to="/" className="font-bold text-3xl">
        {
          isMobile&&!isTablet?<img src={logomini} className="w-9" />:<img src={logo} className="w-40 -ml-2 my-auto" />
        }
        </Link>
        {!localStorage.getItem("auth-token") && (
          <button
            onClick={handleClick}
            className="border border-[#4F00F6] px-6 rounded-xl font-semibold cursor-pointer hover:bg-white/10"
          >
            Sign In
          </button>
        )}
        {localStorage.getItem("auth-token") && (
          <>
            <div
              onClick={handleMenuOpen}
              className="rounded-full w-10 h-10 border border-[#4F00F6] flex justify-center align-middle"
            >
              <img
                src={
                  localStorage.getItem("pic") ||
                  "https://avatars.githubusercontent.com/u/1?v=4"
                }
                alt="profile"
                className="w-8 h-8 rounded-full my-auto cursor-pointer"
              />
            </div>
          </>
        )}
      </motion.nav>
      <>
        {isOpen && (
          <div className="bg-transparent w-full absolute flex justify-end pr-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className="bg-blue-400/10 backdrop-blur-md w-40 p-4 rounded-md cursor-pointer"
            >
              <ul onClick={handleMenuOpen} className="text-[0.9rem]">
                <li className="mb-1 pb-1 border-b-[0.1rem] border-b-white hover:text-[#806ce4]">
                  <Link to="/contributions">Dashboard</Link>
                </li>
                <li className="mb-1 pb-1 border-b-[0.1rem] border-b-white hover:text-[#806ce4] ">
                  <Link to="/repos">Repositories</Link>
                </li>
                <li className="hover:text-[#806ce4]" onClick={handleLogout}>
                  Logout
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </>
    </>
  );
};

export default Navbar;
