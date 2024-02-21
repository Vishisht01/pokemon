
import createApolloClient from "@/graphql/apolloClient";
import { GET_ALL_POKEMON } from "@/graphql/gqlQueries";
import "./globals.css"
import { Pokemon } from "@/types/pokemon";
import Card from "@/components/Card";
import { useRouter } from "next/router";
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
            <img src="pokemon_image.png" alt="hello" width={169} height={54} />
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
            <div className="banner_image_container">
              <img src="banner_image.png"/>
            </div>
          </div>
        </div>
        <div className="cards_container">
          {
            data.getAllPokemon.map((pokemon: Pokemon) => (
              <Card key={pokemon.key} pokemon={pokemon} />
            ))
          }
        </div>
      </div>
    </>

  );
}
