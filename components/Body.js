"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Body = () => {
  const [shows, setShows] = useState([
    {
      name: "",
      season: 0,
      number: 0,
      rating: { average: 0 },
      image: { medium: "" },
      summary: "",
    },
  ]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/singlesearch/shows?q=:query")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  console.log({ shows });

  return (
    <div style={{ backgroundColor: "#171d2f", color: "white" }}>
      <div>
        <Image src="/assets/search.png" alt="search" width={20} height={20} />
        <input type="text" placeholder="Search for movies or TV series" />
      </div>
      <div>
        <h2>Trending</h2>
        {shows.season}
        {shows.name}
        <Image src={shows.image} alt="show cover page" height={40} width={40} />
        {/* <Image
          src={shows.image.medium}
          alt="show cover"
          height={20}
          width={20}
        /> */}
      </div>
      <div>
        <h2>Recommended for you</h2>
      </div>
    </div>
  );
};

export default Body;
