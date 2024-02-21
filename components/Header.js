import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#5c6990",
        display: "flex",
        justifyContent: "space-between",
        padding: "2.5rem",
      }}
    >
      <div
        className="header-first"
        style={{ paddingRight: ".15rem", paddingLeft: ".15rem" }}
      >
        <Image
          src="/assets/movie.png"
          alt="home"
          width={20}
          height={20}
          style={{ marginRight: "4rem" }}
        />
      </div>

      <Image
        src="/assets/squares.png"
        alt="squares"
        width={20}
        height={20}
        style={{ marginRight: "1rem" }}
      />
      <Image
        src="/assets/film.png"
        alt="film"
        width={20}
        height={20}
        style={{ marginRight: "1rem" }}
      />
      <Image
        src="/assets/television.png"
        alt="tv"
        width={20}
        height={20}
        style={{ marginRight: "1rem" }}
      />
      <Image
        src="/assets/bookmark.png"
        alt="saved"
        width={20}
        height={20}
        style={{ marginRight: "1rem" }}
      />

      <div style={{ paddingLeft: "3rem", paddingRight: ".15rem" }}>
        <Image src="/assets/user.png" alt="profile" width={20} height={20} />
      </div>
    </div>
  );
};

export default Header;
