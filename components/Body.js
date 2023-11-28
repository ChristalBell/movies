import React from "react";
import Image from "next/image";

const Body = () => {
  return (
    <div style={{ backgroundColor: "#171d2f", color: "white" }}>
      <div>
        <Image src="/assets/search.png" alt="search" width={20} height={20} />
        <input type="text" placeholder="Search for movies or TV series" />
      </div>
      <div>
        <h2>Trending</h2>
      </div>
      <div>
        <h2>Recommended for you</h2>
      </div>
    </div>
  );
};

export default Body;
