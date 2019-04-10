import React from 'react';
import PropTypes from 'prop-types';
import './PokemonView.css';

const renderDetails = (pokemon) => {
    return (
        <div className="description">
            <table>
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{pokemon.id}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{pokemon.name}</td>
                    </tr>
                    <tr>
                        <td>Type:</td>
                        <td>{pokemon.types[0].type.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const PokemonView = (props) => {
    const { pokemon } = props;
    return (
        <div className="ui items">
            <div className="item">
                <div className="ui tiny image">
                    <img className="pokemon" onClick={props.onClick}
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name} />
                </div>

                {props.showDetails && renderDetails(pokemon)}
            </div>
        </div>
    );
}

PokemonView.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        types: PropTypes.array,
        sprites: PropTypes.object
    }),
    onClick: PropTypes.func,
    showDetails: PropTypes.bool
}

export default PokemonView;