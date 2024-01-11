"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Body = () => {
  const [shows, setShows] = useState([
    {
      show: {
        name: "",
        season: 0,
        number: 0,
        rating: { average: 0 },
        image: { medium: "" },
        summary: "",
      },
    },
  ]);

  const showList = [];

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=the")
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  console.log(shows);

  return (
    <div style={{ backgroundColor: "#171d2f", color: "white" }}>
      <div>
        <Image src="/assets/search.png" alt="search" width={20} height={20} />
        <input type="text" placeholder="Search for movies or TV series" />
      </div>
      <div>
        <h2>Trending</h2>
        {shows.map((show) => {
          return (
            (<h3 key={show.show.name}> {show.show.name} </h3>),
            (
              <Image
                src={show.image}
                alt="show cover"
                width={40}
                height={40}
                key={show.show.image}
              />
            ),
            (<p key={show.show.name}> Rating = {show.show.rating.average}</p>)
          );
        })}
      </div>
    </div>
  );
};

export default Body;
