import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ pokemonUrl }) => {

    const [pokemon, setPokemon] = useState({});
    const [changeBackground, setChangeBackground] = useState("radial-gradient(circle, #1fc34d, #00c571, #00c68e, #00c5a6, #32c4b7)");

    useEffect(() => {

        axios.get(pokemonUrl)
            .then(res => setPokemon(res.data))
    }, [pokemonUrl])


    useEffect(() => {

        if (pokemon.types?.[0].type.name === 'grass') {
            setChangeBackground('radial-gradient(circle, #1fc34d, #00c571, #00c68e, #00c5a6, #32c4b7)')
        } else if (pokemon.types?.[0].type.name === 'fire') {
            setChangeBackground('radial-gradient(circle, #9b2626, #c55520, #e4890c, #f5c100, #f5fc1f)')
        } else if (pokemon.types?.[0].type.name === 'water' || pokemon.types?.[0].type.name === 'ice') {
            setChangeBackground('radial-gradient(circle, #b2b3bd, #a1b7cf, #7ebfda, #4dc7d6, #29cdbe)')
        } else if (pokemon.types?.[0].type.name === 'normal') {
            setChangeBackground('radial-gradient(circle, #9898aa, #9facbe, #a7c0cf, #b2d4dc, #c2e8e5)')
        } else if (pokemon.types?.[0].type.name === 'fighting' || pokemon.types?.[0].type.name === 'dragon') {
            setChangeBackground('radial-gradient(circle, #af1a1a, #a5202e, #982a3d, #883347, #773a4d)')
        } else if (pokemon.types?.[0].type.name === 'flying') {
            setChangeBackground('radial-gradient(circle, #33c7d4, #00aedf, #0092e9, #0070e7, #1d44d0)')
        } else if (pokemon.types?.[0].type.name === 'poison' || pokemon.types?.[0].type.name === 'psychic') {
            setChangeBackground(' radial-gradient(circle, #8033d4, #8b2fd3, #962ad2, #a024d1, #aa1dd0)')
        } else if (pokemon.types?.[0].type.name === 'ground') {
            setChangeBackground('radial-gradient(circle, #e9e9a8, #c8c58e, #a7a375, #86825d, #676246)')
        } else if (pokemon.types?.[0].type.name === 'rock' || pokemon.types?.[0].type.name === 'steel') {
            setChangeBackground('radial-gradient(circle, #d3d3c6, #b2b1a6, #929187, #73726a, #55544e)')
        } else if (pokemon.types?.[0].type.name === 'bug') {
            setChangeBackground('radial-gradient(circle, #21f32f, #59f35a, #7af27a, #96f096, #afeeb0)')
        } else if (pokemon.types?.[0].type.name === 'ghost') {
            setChangeBackground('radial-gradient(circle, #ec34e6, #dc31e7, #cc2ee7, #ba2de8, #a72de8)')
        } else if (pokemon.types?.[0].type.name === 'electric') {
            setChangeBackground('radial-gradient(circle, #d3d922, #d7df53, #dce577, #e1ea97, #e7efb6)')
        } else if (pokemon.types?.[0].type.name === 'dark') {
            setChangeBackground('radial-gradient(circle, #2f2a20, #585345, #85816d, #b3b299, #e2e6c8)')
        } else if (pokemon.types?.[0].type.name === 'fairy') {
            setChangeBackground('radial-gradient(circle, #e71df6, #e240e8, #dc56db, #d567cf, #cc76c3)')
        }
    }, [pokemon.types])



    const navigate = useNavigate();

    return (
        <div className='card card-pokemon' style={{ backgroundImage: changeBackground }} onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
            <img className='img-pokemon img-fluid' src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
            <div className="card-body text-center info-pokemon">
                <h1>{pokemon.name}</h1>
                <h4>{pokemon.types?.[1] === undefined ? pokemon.types?.[0].type.name : pokemon.types?.[0].type.name + "/" + pokemon.types?.[1].type.name}</h4>
                <h4 className='text-muted'>Type</h4>
                <div className="row">
                    <div className="col-6">
                        <h5 className=' text-muted'>HP</h5>
                        <h5>{pokemon.stats?.[0].base_stat}</h5>
                    </div>
                    <div className="col-6">
                        <h5 className='text-muted'>Attack</h5>
                        <h5>{pokemon.stats?.[1].base_stat}</h5>
                    </div>
                    <div className="col-6">
                        <h5 className='text-muted'>Defense</h5>
                        <h5>{pokemon.stats?.[2].base_stat}</h5>
                    </div>
                    <div className="col-6">
                        <h5 className='text-muted'>Velocity</h5>
                        <h5>{pokemon.stats?.[5].base_stat}</h5>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PokemonCard