'use client'
import createApolloClient from "@/graphql/apolloClient";
import { GET_ALL_POKEMON, GET_POKEMON, SEARCH_POKEMON } from "@/graphql/gqlQueries";
import "./globals.css"
import { Pokemon } from "@/types/pokemon";
import Card from "@/components/Card";
import { useRouter } from "next/router";
import { ApolloProvider, LazyQueryHookExecOptions, OperationVariables, QueryResult, gql, useLazyQuery, useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import Icon from "../../public/pokemon_image.png"
import { ChangeEvent, useState } from "react";
import { debounce } from 'lodash'


export default function First() {
  const { data }: { data: { getAllPokemon: Pokemon[] } } = useSuspenseQuery(GET_ALL_POKEMON, { variables: { offset: 0, take: 20, reverse: true } });
  const [searchPokemon, { data: suggestions }]: [(options?: Partial<LazyQueryHookExecOptions<any, OperationVariables>> | undefined) => Promise<QueryResult<any, OperationVariables>>, { data: { getFuzzyPokemon: Pokemon[] } }] = useLazyQuery(SEARCH_POKEMON)

  const [getPokemon, { data: pokemon }]: [(options?: Partial<LazyQueryHookExecOptions<any, OperationVariables>> | undefined) => Promise<QueryResult<any, OperationVariables>>, { data: { getPokemon: Pokemon } }] = useLazyQuery(GET_POKEMON)

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      await searchPokemon({ variables: { offset: 0, take: 10, reverse: true, pokemon: e.target.value } })
    } catch (error) {
      console.log(error);

    }
  }

  const handleSearchDebounced = debounce(handleSearch, 500);

  const handlePokemonSelect = async (key: string) => {
    try {
      await getPokemon({ variables: { pokemon: key } });
    } catch (error) {
      console.log(error);

    }
  }
  const handleSuggestionClick = (key: string) => {
    handlePokemonSelect(key);
  }

  return (
    <>
      <div className="container">
        <div className="banner_container">
          <div className={pokemon ? "content_search_section" : "content_section"}>
            <img src="pokemon_image.png" alt="hello" width={169} height={54} />
            <div className="banner_content">
              {
                pokemon ?
                  (<>
                    <div className="search_card">
                      <div className="card_content">
                        <div className="card_details">
                          <div className="card_name">
                            <h1 className="heading_font">{pokemon.getPokemon.species}</h1>
                            <div className="card_subdetails">
                              <div className="card_subheading">
                                <span className="subHeading_font">Height</span>
                                <span className="subHeading_font">Weight</span>
                              </div>
                              <div className="card_subheading">
                                <span>
                                  <p className="text_font">{pokemon.getPokemon.height}m</p>
                                </span>
                                <span>
                                  <p className="text_font">{pokemon.getPokemon.weight}lbs</p>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card_img_container">
                            <img src={pokemon.getPokemon.shinyBackSprite} className="pokemon_img" alt={pokemon.getPokemon.key} />
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
                            <h1 className="subHeading_font">{pokemon.getPokemon?.abilities.first.name}</h1>
                            <h1 className="subHeading_font">
                              {pokemon.getPokemon.abilities?.hidden?.name ? pokemon.getPokemon.abilities?.hidden?.name : "No hidden ability"}
                            </h1>
                            <h1 className="subHeading_font">
                              {pokemon.getPokemon.abilities?.second?.name ? pokemon.getPokemon.abilities?.second?.name : "No second ability"}
                            </h1>
                            <h1 className="subHeading_font">
                              {pokemon.getPokemon.abilities?.special?.name ? pokemon.getPokemon.abilities?.special?.name : "No special ability"}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>) :
                  (
                    <>
                      <h1 className="heading_font">Pokemon</h1>
                      <h4 className="text_font">Pokémon are creatures of various shapes and sizes that inhabit the fictional Pokémon world. Trainers, known as Pokémon trainers, catch and train these creatures to battle each other for sport. Each Pokémon species has its own unique abilities, characteristics, and evolutionary paths.</h4>
                      <button className="banner_btn">Know More</button>
                    </>
                  )
              }
            </div>
          </div>
          <div className="image_section">
            <div className="search_container">
              <input placeholder="Search Pokemon" onChange={handleSearchDebounced} />
              {suggestions && (
                <div className="suggestions_container">
                  {suggestions.getFuzzyPokemon.map((poke: Partial<Pokemon>) => (
                    <p className="suggestion" key={poke.key} onClick={() => handleSuggestionClick(poke.key)}>{poke.species}</p>
                  ))}
                </div>
              )}

            </div>
            <div className="banner_image_container">
              <img src="banner_image.png" />
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
