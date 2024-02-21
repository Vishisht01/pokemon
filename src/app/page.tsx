import createApolloClient from "@/graphql/apolloClient";
import { GET_ALL_POKEMON } from "@/graphql/gqlQueries";
import image from "../../public/pokemon_image.png"
import "./globals.css"
import { Pokemon } from "@/types/pokemon";
import { ApolloProvider, gql } from "@apollo/client";
import Image from "next/image";

export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: GET_ALL_POKEMON,
    variables: {
      offset: 0,
      take: 20,
      reverse: false
    }
  });


  console.log(data.getAllPokemon)

  return (
    <>
<div className="container">
<div className="banner_container">
<div className="content_section">
  <img src="../../public/pokemon_image.png"/>
</div>
<div className="image_section">
Image
</div>
</div>
</div>

      {/* {
        data.getAllPokemon.map((pokemon: Pokemon) =>
        (
          <div>{pokemon.species}</div>
        ))

      } */}
    </>

  );
}
