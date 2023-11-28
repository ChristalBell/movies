import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div>
        <Image src="/assets/movie.png" alt="home" width={20} height={20} />
        <Image src="/assets/squares.png" alt="squares" width={20} height={20} />
        <Image src="/assets/film.png" alt="film" width={20} height={20} />
        <Image src="/assets/television.png" alt="tv" width={20} height={20} />
        <Image src="/assets/bookmark.png" alt="saved" width={20} height={20} />
        <Image src="/assets/profile.png" alt="profile" width={20} height={20} />
      </div>
      <div>
        <Image src="/assets/search.png" alt="search" width={20} height={20} />
        <input type="text" placeholder="Search for movies or TV series" />
      </div>
    </div>
  );
};

export default Header;
