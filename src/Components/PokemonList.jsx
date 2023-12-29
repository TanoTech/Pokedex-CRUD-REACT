import React from "react";
import axios from "axios";

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    async componentDidMount() {
        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=905&offset=0');
            const pokemonDetails = await Promise.all(res.data.results.map(async (pokemon) => {
                const pokemonRes = await axios.get(pokemon.url);
                return pokemonRes.data;
            }));

            this.setState({ data: pokemonDetails });
        } catch (err) {
            console.log('Errore durante il fetch dei dati', err);
        }
    }

    render() {
        const { data } = this.state;
        const { startSlice, endSlice } = this.props;

        if (!data) {
            return <div>Caricamento in corso...</div>;
        }

        const displayedPokemons = data.slice(startSlice, endSlice);

        return (
            <div>
                {displayedPokemons.map((pokemon, index) => (
                    <div key={index}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                ))}
            </div>
        );
    }
}

export default PokemonList;