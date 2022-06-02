import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokemonCard from './PokemonCard'
import letter from '../assets/letter.png'

const Pokemons = () => {
    const user = useSelector(state => state.user)

    const [pokemons, setPokemons] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState("");
    const [typePokemons, setTypePokemons] = useState([])
    const [actualPage, setActualPage] = useState(0)



    const navigate = useNavigate();

    useEffect(() => {


        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypePokemons(res.data?.results))
    }, [])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${actualPage}`)
            .then(res => setPokemons(res.data.results))

    }, [actualPage])


    console.log(actualPage)

    const nextPage = () => {


        setActualPage(actualPage + 13)
        console.log('paso la pagina')
    }

    const lastPage = () => {
        if (actualPage !== 0) {
            setActualPage(actualPage - 13)
        }

    }


    const search = () => {
        navigate(`/pokemons/${searchPokemon}`)
    }

    const filtrerCharacters = e => {
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon))
    }


    return (
        <div className="all-content-pokemons">

            <div className='container-xxl'>
                <img className='letter-pokemon img-fluid mx-auto d-block' src={letter} alt="" />
                <h1 className='text-start change-color-tittle'> <b>  Welcome {user}</b> here you can find your favorite pokemon </h1>
                <div className="row row-input-select">
                    <div className="col-md-6 input-pokemon text-center">
                        <input
                            type="text"
                            value={searchPokemon}
                            onChange={e => setSearchPokemon(e.target.value)}
                        />
                        <button className='text-center' onClick={search}>Search</button>

                    </div>

                    <div className="col-md-6 text-end text-center " >
                        <select className='select-pokemon text-center' onChange={filtrerCharacters} >
                            <option>All of pokemons</option>
                            {
                                typePokemons.map(typePokemon => (
                                    <option key={typePokemon.name} value={typePokemon.url}>{typePokemon.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className="row">
                    {
                        pokemons.map(pokemon => (
                            <div className='col-md-4' key={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url}>
                                <PokemonCard pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} />
                            </div>
                        ))
                    }
                </div>



                <div className="buttoms">
                    <div className="row">
                        <div className="col-6">
                            <button className='' onClick={lastPage}>last</button>
                        </div>
                        <div className="col-6">

                            <button className='' onClick={nextPage}>next</button>
                        </div>
                    </div>

                </div>




            </div>
        </div>

    )
}

export default Pokemons