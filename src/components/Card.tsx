import { Pokemon } from "@/types/pokemon";

interface Card {
  pokemon: Pokemon;
}

const Card: React.FC<Card> = ({ pokemon }) => {
  return (
    <div className="card" key={pokemon.key} >
      <div className="card_content">
        <div className="card_details">
          <div className="card_name">
            <h1 className="heading_font">{pokemon.species.substring(0, 10)}</h1>
            <div className="card_subdetails">
              <div className="card_subheading">
                <span className="subHeading_font">Height</span>
                <span className="subHeading_font">Weight</span>
              </div>
              <div className="card_subheading">
                <span>
                  <p className="text_font">{pokemon.height}m</p>
                </span>
                <span>
                  <p className="text_font">{pokemon.weight}lbs</p>
                </span>
              </div>
            </div>
          </div>
          <div className="card_img_container">
            <img src={pokemon.shinyBackSprite} className="pokemon_img" alt={pokemon.key} />
          </div>
        </div>
        <span className="subHeading_font">Abilities</span>
        <div className="ability_container">
          <div className="ability_details">
            <h1 className="subHeading_font">First:</h1>
            <h1 className="subHeading_font">Hidden:</h1>
            <h1 className="subHeading_font">Second:</h1>
            <h1 className="subHeading_font">Special:</h1>
          </div>
          <div className="ability_details">
            <h1 className="subHeading_font">{pokemon.abilities?.first.name}</h1>
            <h1 className="subHeading_font">
              {pokemon.abilities?.hidden?.name ? pokemon.abilities?.hidden?.name : "No hidden ability"}
            </h1>
            <h1 className="subHeading_font">
              {pokemon.abilities?.second?.name ? pokemon.abilities?.second?.name : "No second ability"}
            </h1>
            <h1 className="subHeading_font">
              {pokemon.abilities?.special?.name ? pokemon.abilities?.special?.name : "No special ability"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
