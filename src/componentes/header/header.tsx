import { useEffect, useState } from "react";
import { MdCatchingPokemon } from "react-icons/md";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="{`fixed top-0 left-0 right-0 z-10 transition-all duration-300  w-full flex text-3xl md:text-4xl lg:text-6xl
     text-white font-extrabold items-center gap-2 px-5 pt-5 md:m-5 lg:10  h-[80px ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}">
        <MdCatchingPokemon />
        <h1>Pokédex</h1>
    </div>
  );
};

export default Header;
