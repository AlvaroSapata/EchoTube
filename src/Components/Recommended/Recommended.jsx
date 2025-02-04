import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { value_converter } from "../../data";
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_API_KEY;

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const relatedVideo_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(relatedVideo_API);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();

        if (data.items) {
          setApiData(data.items);
        } else {
          throw new Error("No items found in API response");
        }
      } catch (err) {
        console.error("Error fetching recommended videos:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  if (loading) return <p>Loading recommended videos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!apiData) return <p>No recommended videos found.</p>;

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="side-video-list"
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
