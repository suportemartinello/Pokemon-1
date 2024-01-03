// import { useState } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getPokemonsById } from "../../APIs/pokemons/Poke";
import {  DetalhesPokemon }  from "../../APIs/interfaces";

const Detalhes = ( ) =>{

    const [detalhes, setDetalhes]=useState<DetalhesPokemon>();

    const pokemonsDetalhes = async (id : any ) => {
        const response = await getPokemonsById(id);
        console.log (response)
      };

    // const [pokemonDetalhes, setPokemonDetalhes]=useState();
     const {id}  = useParams();
    useEffect(() => {
        pokemonsDetalhes(id);

      }, []);

    return (
        <p>oi né</p>
    )
}

export default Detalhes;