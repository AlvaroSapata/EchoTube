import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";

export const Home = ({ sidebar, searchQuery, setSearchQuery }) => {
  const [category, setCategory] = useState(0);

  const handleCategoryChange = (newCategory) => {
    console.log("Cambiando categoría a:", newCategory);
    setCategory(newCategory);
    setSearchQuery(""); // Clean search query
  };

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={handleCategoryChange}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default Home;
