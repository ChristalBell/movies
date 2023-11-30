"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Body = () => {
  // const [shows, setShows] = useState([
  //   {
  //     shows: { png: "" },
  //   },
  // ]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/schedule/full")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div style={{ backgroundColor: "#171d2f", color: "white" }}>
      <div>
        <Image src="/assets/search.png" alt="search" width={20} height={20} />
        <input type="text" placeholder="Search for movies or TV series" />
      </div>
      <div>
        <h2>Trending</h2>
        {/* {image}
        {name} */}
      </div>
      <div>
        <h2>Recommended for you</h2>
      </div>
    </div>
  );
};

export default Body;
