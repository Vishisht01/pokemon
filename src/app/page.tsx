'use client'
import Card from "@/components/Card";
import { GET_ALL_POKEMON, GET_POKEMON, SEARCH_POKEMON } from "@/graphql/gqlQueries";
import { Pokemon } from "@/types/pokemon";
import { LazyQueryHookExecOptions, OperationVariables, QueryResult, useLazyQuery, useSuspenseQuery } from "@apollo/client";
import { debounce } from 'lodash';
import { ChangeEvent, useState } from "react";
import "./globals.css";
import SearchCard from "@/components/SearchCard";


export default function First() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [modal, setModal] = useState(false);
  const { data }: { data: { getAllPokemon: Pokemon[] } } = useSuspenseQuery(GET_ALL_POKEMON, { variables: { offset: 0, take: 20, reverse: false } });
  const [searchPokemon, { data: suggestions }]: [(options?: Partial<LazyQueryHookExecOptions<any, OperationVariables>> | undefined) => Promise<QueryResult<any, OperationVariables>>, { data: { getFuzzyPokemon: Pokemon[] } }] = useLazyQuery(SEARCH_POKEMON)

  const [getPokemon, { data: pokemon }]: [(options?: Partial<LazyQueryHookExecOptions<any, OperationVariables>> | undefined) => Promise<QueryResult<any, OperationVariables>>, { data: { getPokemon: Pokemon } }] = useLazyQuery(GET_POKEMON)

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setShowSuggestions(true);
      await searchPokemon({ variables: { offset: 0, take: 40, reverse: true, pokemon: e.target.value } })
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchDebounced = debounce(handleSearch, 500);

  const handlePokemonSelect = async (key?: string) => {
    try {
      await getPokemon({ variables: { pokemon: key } });
      setShowSuggestions(!showSuggestions);
      setModal(true)
    } catch (error) {
      console.log(error);
    }
  }
  const handleSuggestionClick = (key?: string) => {
    handlePokemonSelect(key);
  }
  const handleModal = () => {
    setModal(false)
  }

  return (
    <>
      <div className="container " onClick={handleModal}>
        <div className="banner_container">
          {
            modal && pokemon &&
            <div className="search_result">
              <SearchCard pokemon={pokemon.getPokemon} />
            </div>
          }
          <div className="content_section">
            <img src="images/pokemon_image.png" alt="hello" width={169} height={54} />
            <div className="banner_content">
              <h1 className="heading_font">Pokemon</h1>
              <h4 className="text_font">Pokémon are creatures of various shapes and sizes that inhabit the fictional Pokémon world. Trainers, known as Pokémon trainers, catch and train these creatures to battle each other for sport. Each Pokémon species has its own unique abilities, characteristics, and evolutionary paths.</h4>
              <button className="banner_btn">Know More</button>
            </div>
          </div>
          <div className="image_section">
            <div className="search_container">
              <input placeholder="Search Pokemon" onChange={handleSearchDebounced} />
              {showSuggestions && suggestions && (
                <div className="suggestions_container">
                  {suggestions.getFuzzyPokemon.map((poke: Partial<Pokemon>) => (
                    <p className="suggestion" key={poke.key} onClick={() => handleSuggestionClick(poke.key)}>{poke.species}</p>
                  ))}
                </div>
              )}
            </div>
            <div className="banner_image_container">
              <img src="images/banner_image.png" />
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
