import React, { useState } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, CardImg, ButtonGroup, Button } from 'react-bootstrap';

import { generationSlices } from './GenerationSlice';

const Pokedex = ({ data }) => {
    const [selectedType, setSelectedType] = useState('all');
    const [selectedGeneration, setSelectedGeneration] = useState('all');
    const [sortBy, setSortBy] = useState('id');
    const [sortOrder, setSortOrder] = useState('asc');

    const displayedPokemons = data
        ? selectedType === 'all'
            ? selectedGeneration === 'all'
                ? data
                : data.filter((pokemon) => {
                    const { start, end } = generationSlices[selectedGeneration];
                    return pokemon.id >= start && pokemon.id <= end;
                })
            : data.filter((pokemon) => pokemon.types.some((type) => type.type.name === selectedType))
        : [];

    const handleTypeChange = (type) => {
        setSelectedType(type);
    };

    const handleGenerationChange = (generation) => {
        setSelectedGeneration(generation);
    };

    const handleSortChange = (field) => {
        if (sortBy === field) {
            setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortBy(field);
            setSortOrder('asc');
        }
    };

    const types = [
        'all',
        'grass',
        'fire',
        'water',
        'rock',
        'bug',
        'flying',
        'normal',
        'ground',
        'electric',
        'psychic',
        'dragon',
        'ghost',
        'fairy',
        'fighting',
        'steel',
        'ice',
        'dark',
    ];

    const generations = ['all', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return (
        <Container>
            <Row>
                <Col>
                    <div className='sortingPokedex'>
                        <ButtonGroup className="mb-2">
                            {generations.map((gen) => (
                                <Button
                                    key={gen}
                                    variant="primary"
                                    onClick={() => handleGenerationChange(gen)}
                                    active={selectedGeneration === gen}
                                >
                                    {gen === 'all' ? 'All' : `Gen ${gen}`}
                                </Button>
                            ))}
                        </ButtonGroup>

                        <ButtonGroup className="mb-2">
                            <Button
                                key="alphabetical"
                                variant="primary"
                                onClick={() => handleSortChange('name')}
                                active={sortBy === 'name'}
                            >
                                Alphabetical
                                {sortBy === 'name' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
                            </Button>
                            <Button
                                key="id"
                                variant="primary"
                                onClick={() => handleSortChange('id')}
                                active={sortBy === 'id'}
                            >
                                ID
                                {sortBy === 'id' && (sortOrder === 'asc' ? ' ▲' : ' ▼')}
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup className="mb-2">
                            {types.map((type) => (
                                <Button
                                    key={type}
                                    variant="primary"
                                    onClick={() => handleTypeChange(type)}
                                    active={selectedType === type}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </Button>
                            ))}
                        </ButtonGroup>

                    </div>
                    {displayedPokemons
                        .filter((pokemon) => {
                            const { start, end } = generationSlices[selectedGeneration];
                            return pokemon.id >= start && pokemon.id <= end;
                        })
                        .sort((a, b) => {
                            const factor = sortOrder === 'asc' ? 1 : -1;
                            if (sortBy === 'name') {
                                return factor * (a.name && b.name ? a.name.localeCompare(b.name) : 0);
                            } else {
                                return factor * ((a.id && b.id) ? (a.id - b.id) : 0);
                            }
                        })
                        .map((pokemon, index) => (
                            <Card className="singlePokemon" key={index}>
                                <CardHeader>
                                    <h2>
                                        #{pokemon.id} - {pokemon.name}
                                    </h2>
                                </CardHeader>
                                <CardImg
                                    src={
                                        pokemon.sprites.other['official-artwork'].front_default ||
                                        pokemon.sprites.front_default
                                    }
                                    alt={pokemon.name}
                                />
                                <CardBody>
                                    {pokemon.stats.slice(0, 3).map((stat, index) => (
                                        <p key={index}>
                                            {stat.stat.name}: {stat.base_stat}
                                        </p>
                                    ))}
                                </CardBody>
                                <CardFooter className="d-flex">
                                    {pokemon.types.map((type, index) => (
                                        <p className={`type type-${type.type.name}`} key={index}>
                                            {type.type.name}
                                        </p>
                                    ))}
                                </CardFooter>
                            </Card>
                        ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Pokedex;
