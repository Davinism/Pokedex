import React from 'react';

const PokemonDetail = ({params}) => {
  return (
    <section className="pokemon-detail">
      <ul>
        <img src={params.image_url} alt="image"/>
          <li><h2>{params.name}</h2></li>
          <li>Type: {params.poke_type}</li>
          <li>Attack: {params.attack}</li>
          <li>Defense: {params.defense}</li>
          <li>Moves: &#34;{params.moves}&#34;</li>
        <section className="toys">
            <h3>Toys</h3>
          <ul className="toy-list">
            {"Toy"}
          </ul>
        </section>
      </ul>
    </section>
  );
};
