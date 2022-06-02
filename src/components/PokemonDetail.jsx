import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import letter from '../assets/letter.png'

const PokemonDetail = () => {

  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setPokemon(res.data))
  }, [])

  console.log(pokemon)

  return (
    <div className='all-content-pokemon-detail'>

      <div className="container px-2">

        <img className='letter-pokemon-detail img-fluid  ' src={letter} alt="" />

        <div className="card-one position-relative text-center">
          <img className=' img-fluid position-absolute translate-middle' src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
          <div className="row">
            <div className="col weight">
              <h3>{pokemon.weight}</h3>
              <h4 className='text-muted'>weight</h4>
            </div>
            <div className="col height">
              <h3>{pokemon.height}</h3>
              <h4 className='text-muted'>Height</h4>
            </div>
          </div>
          <h1>{pokemon.name}</h1>
          <h1># {id}</h1>
        </div>


        <div className="row">

          <div className="col card-two text-center ">

            <div className="row">
              <h1>Types</h1>
              {
                pokemon.types?.map(type => (
                  <div className="col">
                    {type.type.name}
                  </div>
                ))
              }
            </div>
          </div>

          <div className="col card-two text-center">
            <h1>Abilities</h1>
            <div className="row">
              {
                pokemon.abilities?.map(ability => (
                  <div className="col ">
                    {ability.ability.name}
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="movements">

          <h1 className='text-center'>Movements</h1>
          <div className="row">

            {
              pokemon.moves?.map(allmovements => (
                <div className="col align-self-center item-movement text-center ">
                  {allmovements.move.name}
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  )
}


export default PokemonDetail