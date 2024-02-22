import React from "react";
import { Pokemon } from "@/types/pokemon";

interface SearchCardProps {
    pokemon: Pokemon;
}

const SearchCard: React.FC<SearchCardProps> = ({ pokemon }) => {
    return (
        <div className="search_card">
            <div className="card_content">
                <div className="search_card_details">
                    <div className="card_name">
                        <h1 className="heading_font">{pokemon.species}</h1>
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
                        <img src={pokemon.shinyBackSprite ? pokemon?.shinyBackSprite : pokemon?.backSprite} className="pokemon_img" alt={pokemon.key} />
                    </div>
                    <div className="close_btn">X</div>
                </div>
                <span className="subHeading_font">Abilities</span>
                <div className="details_container">
                    <div className="ability_container">
                        <div className="ability_details">
                            <h1 className="subHeading_font">First:</h1>
                            <h1 className="subHeading_font">Hidden:</h1>
                            <h1 className="subHeading_font">Second:</h1>
                            <h1 className="subHeading_font">Special:</h1>
                        </div>
                        <div className="ability_details">
                            <h1 className="subHeading_font">{pokemon.abilities?.first.name.substring(0, 10)}</h1>
                            <h1 className="subHeading_font">
                                {pokemon.abilities?.hidden?.name ? pokemon.abilities?.hidden?.name : "None"}
                            </h1>
                            <h1 className="subHeading_font">
                                {pokemon.abilities?.second?.name ? pokemon.abilities?.second?.name : "None"}
                            </h1>
                            <h1 className="subHeading_font">
                                {pokemon.abilities?.special?.name ? pokemon.abilities?.special?.name : "None"}
                            </h1>
                        </div>
                    </div>
                    <div className="ability_container">
                        <div className="ability_details">
                            <h1 className="subHeading_font">Attack:</h1>
                            <h1 className="subHeading_font">Defense:</h1>
                            <h1 className="subHeading_font">HP:</h1>
                            <h1 className="subHeading_font">Speed:</h1>
                        </div>
                        <div className="ability_details">
                            <h1 className="subHeading_font">{pokemon.baseStats.attack}</h1>
                            <h1 className="subHeading_font">
                                {pokemon.baseStats.defense}
                            </h1>
                            <h1 className="subHeading_font">
                                {pokemon.baseStats.hp}
                            </h1>
                            <h1 className="subHeading_font">
                                {pokemon.baseStats.speed}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
