import { useEffect, useState } from "react";
import { getAllPokemons } from "../../APIs/pokemons/Poke";
import { Pokemon } from "./home";

export const Home = () => {
  const [load, setLoad] = useState(false);
  const [allPokemons, setAllPokemons] = useState<Pokemon>();
  const getPokemons = async () => {
    setLoad(true);
    const response = await getAllPokemons();
    setAllPokemons(response);
    setLoad(false);
  };

  useEffect(() => {
    getPokemons();
    console.log(allPokemons);
  }, []);

  return (
    <div className="bg-[#dc0a2d] flex  flex-col h-full w-full">
      <div className=" w-full p-2 flex items-center justify-around">
        <input
          type="text"
          className="rounded-3xl text-sm p-2 "
          placeholder="Search" />

        <div className="rounded-full h-10 w-10 text-center text-2xl flex justify-center items-center' bg-white">
          <p className="text-center flex items-center text-red-500">#</p>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-2  bg-white p-5">
        {allPokemons?.results.map((poke) => (
          <div className="flex border rounded-lg shadow-sm justify-between h-24 w-24 flex-col">
            <p className="text-right text-sm text-gray-400">#000</p>
            <div className="text-center"></div>
            <div className=" rounded-lg flex items-end justify-center bg-[#efefef] h-[50%] ">
              <p className="">{poke.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
