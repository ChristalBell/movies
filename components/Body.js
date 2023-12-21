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

  const showList = [];

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
        <img src={shows.image} alt="show cover top" />

        {shows.map((show) => {
          return <img src={shows.name} alt="show cover" key={shows.name} />;
        })}
      </div>
    </div>
  );
};

export default Body;
