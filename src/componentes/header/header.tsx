import {MdCatchingPokemon} from "react-icons/md"
const Header = () => {
    return (
        <div className=" w-full flex text-4xl text-white font-extrabold items-center gap-2 px-5 pt-5 bg-[#dc0a2d] h-[80px]">
            <MdCatchingPokemon/>
            <h1>Pokédex</h1>
        </div>
    )
}

export default Header;