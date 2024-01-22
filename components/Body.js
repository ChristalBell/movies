"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Body = () => {
  const [shows, setShows] = useState([
    {
      show: {
        name: "",
        rating: { average: 0 },
        image: { medium: "" },
        summary: "",
        genres: [""],
        premiered: "",
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
    <div
      style={{
        backgroundColor: "#171d2f",
        color: "white",
        padding: "2.5rem",
      }}
    >
      <div>
        <Image
          src="/assets/search.png"
          alt="search"
          width={20}
          height={20}
          style={{ marginRight: "2rem" }}
        />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          size={30}
          style={{ background: "none", border: "none", color: "white" }}
        />
      </div>

      <h2>Trending</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {shows.map((show) => {
          return (
            <article
              key={show.show.name}
              style={{ marginLeft: "2rem", maxWidth: "20vw" }}
            >
              <img
                src={show.show.image.original}
                alt={show.show.name}
                width={40}
                height={40}
              />
              <p>
                {show.show.premiered} {show.show.genres}
              </p>
              <header>
                <h4>{show.show.name}</h4>
              </header>

              <p>
                Rating = {show.show.rating.average}
                {show.show.summary}
              </p>
            </article>

            // (<h3 key={show.show.name}> {show.show.name} </h3>),
            // (
            //   <Image
            //     src={show.image}
            //     alt="show cover"
            //     width={40}
            //     height={40}
            //     key={show.show.image}
            //   />
            // ),
            // (<p key={show.show.name}> Rating = {show.show.rating.average}</p>)
          );
        })}
      </div>
    </div>
  );
};

export default Body;
