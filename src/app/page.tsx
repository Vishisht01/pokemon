
import createApolloClient from "@/graphql/apolloClient";
import { GET_ALL_POKEMON } from "@/graphql/gqlQueries";
import "./globals.css"
import { Pokemon } from "@/types/pokemon";
import { ApolloProvider, gql } from "@apollo/client";
import Image from "next/image";
import Icon from "../../public/pokemon_image.png"
import { useState } from "react";


export default async function First() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: GET_ALL_POKEMON,
    variables: {
      offset: 0,
      take: 20,
      reverse: true
    }
  });


  console.log(data.getAllPokemon)

  return (
    <>
      <div className="container">
        <div className="banner_container">
          <div className="content_section">
            <img src="../../public/pokemon_image.png" />
            <div>
            <h1 className="heading_font">Lorem, ipsum.</h1>
            <h4 className="text_font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel labore, velit eius, error saepe nemo illum maxime incidunt ducimus, ea id architecto beatae. Porro, iste dolore magnam iure sint laborum, dolor quos officia, tenetur ipsum vel tempore voluptate molestias nemo?</h4>
            <button className="banner_btn">Know More</button>
            </div>
          
          </div>
          <div className="image_section">
            <div className="search_container">
              <input placeholder="Search Pokemon"/>
            </div>
          </div>
        </div>
        <div className="cards_container">
          {
            data.getAllPokemon.map((pokemon: Pokemon) => (
              <div className="card" key={pokemon.key}>
                <div className="card_content">
                  <div className="card_details">
                    <div className="card_name">
                      <h1 className="heading_font">{pokemon.species}</h1>
                      <div className="card_subdetails">
                        <div className="card_subheading">
                          <span className="subHeading_font">Height</span><span className="subHeading_font">Weight</span>
                        </div>
                        <div className="card_subheading">
                          <span><p className="text_font">{pokemon.height}m</p></span><span><p className="text_font">{pokemon.weight}lbs</p></span>
                        </div>
                      </div>
                    </div>
                    <div className="card_img_container">
                      <img src={pokemon.shinySprite} className="pokemon_img" />
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
                      <h1 className="subHeading_font">First:</h1>
                      <h1 className="subHeading_font">First:</h1>
                      <h1 className="subHeading_font">First:</h1>
                      <h1 className="subHeading_font">First:</h1>
                    </div>
                  </div>
                </div>

              </div>
            ))
          }
        </div>
      </div>
    </>

  );
}
