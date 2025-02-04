import React, { useState } from "react";
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

const Navbar = ({ setSidebar, setSearchQuery }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchQuery(query);
    }
  };

  const clearSearch = () => {
    setQuery(""); // Limpiar el input
    setSearchQuery(""); // Limpiar la búsqueda
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menu_icon}
          alt="Menu icon"
        />
        <Link to={"/"}>
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
          {/* Mostrar "X" solo si hay texto en la barra */}
          {query && (
            <img
              src={erase_icon} // Usa un icono de "X" o algo similar
              alt="Clear icon"
              onClick={clearSearch}
              className="clear-icon"
            />
          )}
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload icon" />
        <img src={more_icon} alt="More icon" />
        <img src={notification_icon} alt="Notification icon" />
        <img src={profile_icon} className="user-icon" alt="Profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
