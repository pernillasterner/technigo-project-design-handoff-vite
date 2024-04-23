import { NavLink } from "react-router-dom";
import "./TopNavigation.css";
import logo from "/assets/logo/logo-desktop.svg";
import searchIcon from "/assets/icons/search.svg";
import { Button } from "../../styles/button/Button";

export const TopNavigation = () => {
  return (
    <header className="top-navigation flex justify-between items-center px-66 py-20 lg:bg-cyan-500">
      <img src={logo} alt="Crossfit Mamas Logo" />
      <nav className="navbar flex items-center">
        <ul>
          <li>
            <NavLink to="/">getting started</NavLink>
            <NavLink to="/">classes</NavLink>
            <NavLink to="/">about us</NavLink>
          </li>
        </ul>
        <img src={searchIcon} alt="Search Bar Icon" className="search-bar" />
        <Button
          classNames={
            "log_in-btn bg-crimson-light active:bg-plum-light hover:bg-terracotta  text-[25px]"
          }
          label={"log in"}
        />
      </nav>
    </header>
  );
};