import { BsFilterRight } from "react-icons/bs";

import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Home = (): any => {
  return (
    <div className="w-full h-full flex items-center gap-8  flex-col">
      <nav className="flex gap-10 justify-center items-center h-16 w-full">
        <div className="bg-white text-lg gap-4 flex items-center rounded-full p-2 ">
          <HiOutlineMagnifyingGlass />
          <input className="outline-none text-lg" type="text" />
          <div className=" bg-white w-10 h-10 rounded-full border border-red-500 text-red-500 flex items-center justify-center text-lg ">
            <BsFilterRight />
          </div>
        </div>
      </nav>
      <main className="bg-white h-full w-[95%] flex-wrap rounded-lg">

      </main>
    </div>
  );
};
export default Home;
