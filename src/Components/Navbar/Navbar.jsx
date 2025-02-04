import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo_compressed.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload_compressed.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import erase_icon from "../../assets/close.png";
import { Link } from "react-router-dom";
import ESFlag from "../../assets/spain.png";
import FRFlag from "../../assets/france.png";
import DEFlag from "../../assets/germany.png";
import GBFlag from "../../assets/united-kingdom.png";
import USFlag from "../../assets/united-states.png";

const Navbar = ({ setSidebar, setSearchQuery, setRegionCode }) => {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("US"); // Default country is US
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Ref for menu

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(query);
    }
  };

  const clearSearch = () => {
    setQuery(""); // Clear input
    setSearchQuery(""); // Clear search
  };

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setRegionCode(selectedCountry); // Send selected country to parent
    setMenuOpen(false); // Close select
  };

  // Click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="Menu icon"
        />
        <Link to={"/"} onClick={clearSearch}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch} // Detect Enter
          />
          <img
            src={search_icon}
            alt="Search icon"
            onClick={() => setSearchQuery(query)}
          />
          {/* Show X if there's text */}
          {query && (
            <img
              src={erase_icon}
              alt="Clear icon"
              onClick={clearSearch}
              className="clear-icon"
            />
          )}
        </div>
      </div>

      <div className="nav-right flex-div">

        <div
          className="country-flag-container"
          onClick={() => setMenuOpen((prev) => !prev)} // Change menu state
        >
          <img
            src={
              country === "US"
                ? USFlag
                : country === "ES"
                ? ESFlag
                : country === "GB"
                ? GBFlag
                : country === "DE"
                ? DEFlag
                : FRFlag
            }
            alt="Country flag"
            className="country-flag"
          />
        </div>

        {menuOpen && (
          <div ref={menuRef} className="country-select-dropdown">
            <div className="country-flag-display">
              <img
                src={USFlag}
                alt="US flag"
                onClick={() => handleCountryChange("US")}
                className="country-flag"
              />
              <p>US</p>
            </div>

            <div className="country-flag-display">
              <img
                src={ESFlag}
                alt="Spain flag"
                onClick={() => handleCountryChange("ES")}
                className="country-flag"
              />
              <p>ES</p>
            </div>
            <div className="country-flag-display">
              <img
                src={GBFlag}
                alt="UK flag"
                onClick={() => handleCountryChange("GB")}
                className="country-flag"
              />
              <p>GB</p>
            </div>
            <div className="country-flag-display">
              <img
                src={DEFlag}
                alt="Germany flag"
                onClick={() => handleCountryChange("DE")}
                className="country-flag"
              />
              <p>DE</p>
            </div>
            <div className="country-flag-display">
              <img
                src={FRFlag}
                alt="France flag"
                onClick={() => handleCountryChange("FR")}
                className="country-flag"
              />
              <p>FR</p>
            </div>
          </div>
        )}

        <img className="icons" src={upload_icon} alt="Upload icon" />
        <img className="icons" src={more_icon} alt="More icon" />
        <img className="icons" src={notification_icon} alt="Notification icon" />
        <img src={profile_icon} className="user-icon" alt="Profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
