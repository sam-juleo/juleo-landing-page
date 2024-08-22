import React, { useEffect, useState, useContext } from "react";
import Logo from '../assets/logo.png'
import cross from "../assets/cross.svg"
import hamburger from "../assets/hamburger.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { CSSTransition } from "react-transition-group";
import { mediumScreen } from "./utils";
import GlobalStateContext from "./GlobalStateContext";
import { Link, NavLink } from 'react-router-dom';
function Header() {
  const { width } = useWindowDimensions();
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const globalStateContext = useContext(GlobalStateContext)
  const scrollToAboutUs = () => globalStateContext.AboutUsRef.current.scrollIntoView({ block: 'start' })
  // const scrollToTeam = () => globalStateContext.TeamRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
  const scrollToContact = () => globalStateContext.ContactRef.current.scrollIntoView({ block: 'start' })


  return (
    <header className="sticky flex -mb-[8px] px-5 py-4 md:px-[120px] md:py-8 h-[130px] md:h-[136px] justify-center items-center  z-30 bg-pink-0  ">
      {/* <img className="h-10 w-16 md:h-16 md:w-24" src={logo} alt="" /> */}
      <Link to="/">
        <img className=" -ml-5 w-[150px] h-18 lg:w-52 lg:h-28 lg:mt-5" src={Logo} alt="logo" />
      </Link>
      {width <= mediumScreen ? (
        <HamburgerIcon
          hamburgerClicked={hamburgerClicked}
          setHamburgerClicked={setHamburgerClicked}
        />
      ) : (
        <nav className="ml-auto">
          {/* <button className="text-lg text-gray-100 hover:text-gray-500 mx-2" onClick={scrollToAboutUs}>
            About 
          </button>
          <button className="text-lg text-gray-100 hover:text-gray-500 mx-2" onClick={scrollToContact}>
            Contact
          </button> */}
          <ul className="flex gap-4">

            <li className="text-lg text-white opacity-80 hover:text-gray-500 "><NavLink to="/about" >About</NavLink></li>
            <li className="text-lg text-white opacity-80 hover:text-gray-500 "><NavLink to="/contact" >Contact</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

const HamburgerIcon = ({ hamburgerClicked, setHamburgerClicked }: { hamburgerClicked: any, setHamburgerClicked: any }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { width, height } = useWindowDimensions()
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    setHamburgerClicked(false)
    setShowDropdown(false)
  }, [width, height])

  const globalStateContext = useContext(GlobalStateContext)
  const scrollToAboutUs = () => {
    setHamburgerClicked(false)
    setShowDropdown(false)
    globalStateContext.AboutUsRef.current.scrollIntoView({ block: 'start' })
  }
  // const scrollToTeam = () => {
  //   setHamburgerClicked(false)
  //   setShowDropdown(false)
  //   globalStateContext.TeamRef.current.scrollIntoView({ behavior:'smooth', block: 'start' })  
  // }
  const scrollToContact = () => {
    setHamburgerClicked(false)
    setShowDropdown(false)
    globalStateContext.ContactRef.current.scrollIntoView({ block: 'start' })
  }

  return (
    <div className="ml-auto md:hidden">
      <div
        className="cursor-pointer"
        onClick={() => {
          setHamburgerClicked(!hamburgerClicked);
          toggleDropdown();
        }}
      >
        {hamburgerClicked ? (
          <img className="w-8 h-8 text-white" src={cross} alt="" />
        ) : (
          <img className="w-6 h-6 " src={hamburger} alt="" />
        )}
      </div>
      <CSSTransition
        in={showDropdown}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div className="absolute w-full h-screen top-full right-0 mt-1 bg-white dropdown-enter-done z-50">
          <div className="flex flex-col text-start bg-white h-1 z-50">
            {/* <button className="px-6 py-4 text-black box_shadow_bot_wine text-left" onClick={scrollToAboutUs}>
              About
            </button>

            <button className="block px-6 py-4 text-black text-left" onClick={scrollToContact}>
              Contact
            </button> */}
            <ul>

              {/* <button className="block px-6 py-4 text-black box_shadow_bot_wine text-left w-full"><NavLink to="/about" >About</NavLink></button>
            <button className="block px-6 py-4 text-black box_shadow_bot_wine text-left w-full"><NavLink to="/contact" >Contact</NavLink></button> */}


              <NavLink to="/about" className="block px-6 py-4 text-black box_shadow_bot_wine text-left w-full z-50">
                <button>About</button>
              </NavLink>
              <NavLink to="/contact" className="block px-6 py-4 text-black box_shadow_bot_wine text-left w-full z-50">
                <button>Contact</button>
              </NavLink>
            </ul>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Header;