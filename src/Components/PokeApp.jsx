import React, { useState, useEffect } from 'react';
import PokeballLoader from './PokeballLoader';
import { generationSlices } from './GenerationSlice';
import Pokedex from './Pokedex';

const PokeApp = () => {
    const [data, setData] = useState(null);
    const [selectedGeneration, setSelectedGeneration] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectedGeneration !== null) {
                    console.log('Selected Generation during fetch:', selectedGeneration);
    
                    const { start, end } = generationSlices[selectedGeneration];
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1015&offset=${start}`);
                    const jsonData = await res.json();
    
                    console.log('Fetched data:', jsonData);
    
                    const pokemonDetails = await Promise.all(jsonData.results.map(async (pokemon) => {
                        const pokemonRes = await fetch(pokemon.url);
                        return await pokemonRes.json();
                    }));
    
                    setData(pokemonDetails.slice(start, end));
                }
            } catch (err) {
                console.error('Errore durante il fetch dei dati', err);
            }
        };
    
        fetchData();
    }, [selectedGeneration]);
    

    if (!data) {
        return <PokeballLoader />;
    }

    return (
        <main>
            <Pokedex data={data} setSelectedGeneration={setSelectedGeneration} />
        </main>
    );
};

export default PokeApp;