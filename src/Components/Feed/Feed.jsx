import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { value_converter } from "../../data";
import moment from "moment/moment";

const API_KEY = import.meta.env.VITE_API_KEY;

const Feed = ({ category, searchQuery }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let url;
  
    // If searchQuery is empty or only has spaces, use the current category
    const currentCategory = (searchQuery?.trim() === "") ? category : 0;
  
    console.log("Fetching data for category:", currentCategory);  // Checks the current category
  
    if (searchQuery?.trim() !== "") {
      url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${API_KEY}`;
    } else {
      url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${currentCategory}&key=${API_KEY}`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [category, searchQuery]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        const videoId = searchQuery ? item.id.videoId : item.id;
        const categoryId = searchQuery ? "search" : item.snippet.categoryId;

        return (
          <Link to={`video/${categoryId}/${videoId}`} className="card" key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail1" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {searchQuery ? "" : `${value_converter(item.statistics?.viewCount || 0)} views • `}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
