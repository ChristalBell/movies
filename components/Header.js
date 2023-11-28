import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div>
        <Image src="/movie.png" alt="home" width={4} height={4} />
        <Image src="/squares.png" alt="squares" width={4} height={4} />
        <Image src="/film.png" alt="film" width={4} height={4} />
        <Image src="/television.png" alt="tv" width={4} height={4} />
        <Image src="/bookmark.png" alt="saved" width={4} height={4} />
        <Image src="/profile.png" alt="profile" width={4} height={4} />
      </div>
      <div>
        <Image src="/search.png" alt="search" width={4} height={4} />
        <input type="text" placeholder="Search for movies or TV series" />
      </div>
    </div>
  );
};

export default Header;
