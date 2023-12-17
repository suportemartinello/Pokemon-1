import { SlMagnifier } from "react-icons/sl";

import { useEffect, useState } from "react";
import { getAllPokemons } from "../../APIs/pokemons/Poke";

interface allPokeInterface {
  name: string;
  url: string;
}

const Home = () => {
  const [poke, setPoke] = useState<any>([]);

  const pokemons = async () => {
    const response = await getAllPokemons();
    const pokemonArray = response.results;
    setPoke(pokemonArray);
  };

  useEffect(() => {
    pokemons();
  }, []);

  return (
    <body className=" m-1 md:m-3 lg:m-10">
      <nav className="p-5 w-full flex justify-center">
        <div className=" h-9 bg-white w-[70%] lg:w-[50%] flex items-center p-3 gap-5  rounded-full">
          <input type="text" className="w-[95%]" />
          <SlMagnifier />
        </div>
      </nav>
      <div className=" grid mt-2 grid-cols-3 lg:grid-cols-5 gap-5 ">
        {poke.map((items: allPokeInterface) => (
          <div className=" h-40 lg:h-96 lg:w-80 p-5 flex flex-col justify-between items-center bg-gray-400     transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 hover:bg-purple-400 duration-75 ...">
            <div className="h-[80%] flex items-center">
              <h1>Imagem</h1>
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-white">{items.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </body>
  );
};

export default Home;
