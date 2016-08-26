import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({router, pokemon}) => {

  
  const _handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (<li onClick={ _handleClick } className="pokemon-index-item">
          <span>{pokemon.id}</span>
          <img src={pokemon.image_url} alt={'image'}/>
          <span>{pokemon.name}</span>
        </li>);
};

export default withRouter(PokemonIndexItem);
// _handleClick(props.router, `/${props.pokemon.id}`)
