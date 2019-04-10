import React from 'react';
import pokemon from '../api/pokemon';
import WildPokemonList from './WildPokemonsList';
import CaughtPokemonList from './CatchedPokemonsList';
import { MAX_CATCHED_POKEMONS, MAX_POKEMONS_TO_REQUEST } from '../constants';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wildPokemon: [],
            caughtPokemon: []
        }
        this.nextId = 0;
    }

    componentDidMount() {
        // start request timer
        this.interval = setInterval(() =>
            this.getNextPokemon()
            , 500);
    }

    componentWillUnmount() {
        this.tearDownTimer();
    }

    getNextPokemon = async () => {
        if (this.nextId === MAX_POKEMONS_TO_REQUEST) {
            this.tearDownTimer();
            return;
        }
        const response = await pokemon.get(`/${++this.nextId}`)
        this.addWildPokemon(response.data);
    }

    tearDownTimer = () => {
        clearInterval(this.interval);
    }

    addWildPokemon = (pokemon) => {
        this.setState((prevState) => ({
            wildPokemon: prevState.wildPokemon.concat(pokemon)
        }));
    }

    catchPokemon = (pokemon) => {
        if (this.state.caughtPokemon.length === MAX_CATCHED_POKEMONS) {
            return;
        }
        this.setState((prevState) => ({
            caughtPokemon: prevState.caughtPokemon.concat(pokemon),
            wildPokemon: prevState.wildPokemon.filter(p => p.id !== pokemon.id)
        }));
    }

    releasePokemon = (pokemon) => {
        this.setState((prevState) => ({
            caughtPokemon: prevState.caughtPokemon.filter(p => p.id !== pokemon.id),
            wildPokemon: prevState.wildPokemon.concat(pokemon)
        }));
    }

    render() {
        return (
            <div className="ui grid container">
                <div className="ui two column relaxed grid">
                    <div className="column">
                        <WildPokemonList pokemons={this.state.wildPokemon} onCatch={this.catchPokemon} />
                    </div>
                    <div className="column">
                        <CaughtPokemonList pokemons={this.state.caughtPokemon} onRelease={this.releasePokemon} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;