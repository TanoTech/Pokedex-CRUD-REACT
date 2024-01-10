import React from "react";
import axios from "axios";
import { Card, CardBody, CardImg, Container, Row, Col, CardFooter, CardHeader } from 'react-bootstrap'
import './PokemonList.css';
import './PokemonTypes.css';
import PokeballLoader from "./PokeballLoader";



class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    async componentDidMount() {
        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1015&offset=0');
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
            return <PokeballLoader />;
        }

        const displayedPokemons = data.slice(startSlice, endSlice); 

        return (
            <Container>
                <Row>
                    <Col>
                        {displayedPokemons.map((pokemon, index) => (
                            <Card className="singlePokemon" key={index}>
                                <CardHeader>
                                    <h2>{pokemon.name}</h2>
                                </CardHeader>
                                {pokemon.sprites.other['official-artwork'].front_default ? (
                                    <CardImg
                                        src={pokemon.sprites.other['official-artwork'].front_default}
                                        alt={pokemon.name}
                                    />
                                ) : (
                                    <CardImg src={pokemon.sprites.front_default} alt={pokemon.name} />
                                )}
                                <CardBody>
                                    {pokemon.stats.slice(0, 3).map((stat, index) => (
                                        <p key={index}>
                                            {stat.stat.name}: {stat.base_stat}
                                        </p>
                                    ))}
                                </CardBody>
                                <CardFooter className="d-flex">
                                    {pokemon.types.map((types, Index) => {
                                        const typeName = types.type.name;
                                        let typeClass = '';
                                        switch (typeName) {
                                            case 'fire':
                                                typeClass = 'type-fire';
                                                break;
                                            case 'poison':
                                                typeClass = 'type-poison';
                                                break;
                                            case 'water':
                                                typeClass = 'type-water';
                                                break;
                                            case 'rock':
                                                typeClass = 'type-rock';
                                                break;
                                            case 'grass':
                                                typeClass = 'type-grass';
                                                break;
                                            case 'bug':
                                                typeClass = 'type-bug';
                                                break;
                                            case 'flying':
                                                typeClass = 'type-flying';
                                                break;
                                            case 'normal':
                                                typeClass = 'type-normal';
                                                break;
                                            case 'ground':
                                                typeClass = 'type-ground';
                                                break;
                                            case 'electric':
                                                typeClass = 'type-electric';
                                                break;
                                            case 'psychic':
                                                typeClass = 'type-psychic';
                                                break;
                                            case 'dragon':
                                                typeClass = 'type-dragon';
                                                break;
                                            case 'ghost':
                                                typeClass = 'type-ghost';
                                                break;
                                            case 'fairy':
                                                typeClass = 'type-fairy';
                                                break;
                                            case 'fighting':
                                                typeClass = 'type-fighting';
                                                break;
                                            case 'steel':
                                                typeClass = 'type-steel';
                                                break;
                                            case 'ice':
                                                typeClass = 'type-ice';
                                                break;
                                            case 'dark':
                                                typeClass = 'type-dark';
                                                break;
                                            default:
                                                break;
                                        }
                                        return (
                                            <p className={`type ${typeClass}`} key={Index}>
                                                {typeName}
                                            </p>
                                        );
                                    })}
                                </CardFooter>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PokemonList;