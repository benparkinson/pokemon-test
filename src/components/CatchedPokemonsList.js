import React from 'react';
import PropTypes from 'prop-types';
import PokemonView from './PokemonView';
import './CatchedPokemonsList.css';

class CatchedPokemonsList extends React.Component {
    renderPokemon = (pokemons) => {
        return pokemons.map(pokemon => {
            return (
                <div className="column" key={pokemon.id}>
                    <PokemonView
                        pokemon={pokemon}
                        onClick={() => this.props.onRelease(pokemon)}
                        showDetails
                    />
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                <h3 className="ui center aligned header">Catched Pokémons</h3>
                <div className="ui one column grid catched-list">
                    {this.renderPokemon(this.props.pokemons)}
                </div>
            </div>
        );
    }
}

CatchedPokemonsList.propTypes = {
    pokemons: PropTypes.array,
    onRelease: PropTypes.func
};

export default CatchedPokemonsList;