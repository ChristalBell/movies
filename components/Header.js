import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#5c6990  ",
        }}
      >
        <Image src="/assets/movie.png" alt="home" width={20} height={20} />
        <div>
          <Image
            src="/assets/squares.png"
            alt="squares"
            width={20}
            height={20}
          />
          <Image src="/assets/film.png" alt="film" width={20} height={20} />
          <Image src="/assets/television.png" alt="tv" width={20} height={20} />
          <Image
            src="/assets/bookmark.png"
            alt="saved"
            width={20}
            height={20}
          />
        </div>
        <Image src="/assets/user.png" alt="profile" width={20} height={20} />
      </div>
    </div>
  );
};

export default Header;
