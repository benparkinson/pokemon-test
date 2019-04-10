import React from 'react';
import PropTypes from 'prop-types';
import PokemonView from './PokemonView';
import './WildPokemonsList.css';

class WildPokemonsList extends React.Component {
    renderPokemon = (pokemons) => {
        return pokemons.map(pokemon => {
            return (
                <div className="column" key={pokemon.id}>
                    <PokemonView
                        pokemon={pokemon}
                        onClick={() => this.props.onCatch(pokemon)} />
                </div>
            );
        })
    }

    render() {
        const sortedPokemon = this.props.pokemons.slice()
            .sort((a, b) => a.id - b.id);
        return (
            <div>
                <h3 className="ui center aligned header">Wild Pokémons</h3>
                <div className="ui three column centered grid wild-list">
                    {this.renderPokemon(sortedPokemon)}
                </div>
            </div>
        );
    }
}

WildPokemonsList.propTypes = {
    pokemons: PropTypes.array,
    onCatch: PropTypes.func
}

export default WildPokemonsList;