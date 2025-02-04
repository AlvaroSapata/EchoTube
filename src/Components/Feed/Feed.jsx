import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { value_converter, convertDuration } from "../../data";
import moment from "moment/moment";

const API_KEY = import.meta.env.VITE_API_KEY;

const Feed = ({ category, searchQuery, regionCode }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let url;

    const currentCategory = searchQuery?.trim() === "" ? category : 0;

    if (searchQuery?.trim() !== "") {
      url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${API_KEY}`;
    } else {
      url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=${regionCode}&videoCategoryId=${currentCategory}&key=${API_KEY}`;
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
  }, [category, searchQuery, regionCode]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        const videoId = searchQuery ? item.id.videoId : item.id;
        const categoryId = searchQuery ? "search" : item.snippet.categoryId;
        const duration = item.contentDetails?.duration;

        return (
          <Link
            to={`video/${categoryId}/${videoId}`}
            className="card"
            key={index}
          >
            <div className="thumbnail-container">
              <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
              {duration && (
                <span className="video-duration">
                  {convertDuration(duration)}
                </span>
              )}
            </div>
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {searchQuery
                ? ""
                : `${value_converter(
                    item.statistics?.viewCount || 0
                  )} views • `}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
