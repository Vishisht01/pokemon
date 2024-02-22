import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql`
  query (
    $offset: Int
    $take: Int
    $reverse: Boolean
  ) {
    getAllPokemon(
      offset: $offset
      take: $take
      reverse: $reverse
    ) {
      key
      abilities {
        first {
          key
          name
        }
        hidden {
          key
          name
        }
        second {
          key
          name
        }
        special {
          key
          name
        }
      }
      species
      backSprite
      shinyBackSprite
      height
      weight
    }
  }
`;


export const SEARCH_POKEMON = gql`query (
  $offset: Int
  $take: Int
  $reverse: Boolean
  $pokemon: String!
  $offsetFlavorTexts: Int
  $takeFlavorTexts: Int
  $reverseFlavorTexts: Boolean
) {
  getFuzzyPokemon(
    offset: $offset
    take: $take
    reverse: $reverse
    pokemon: $pokemon
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
  ) {
    key
    species
    sprite
  }
}`

export const GET_POKEMON = gql`
  query (
    $offsetFlavorTexts: Int
    $takeFlavorTexts: Int
    $reverseFlavorTexts: Boolean
    $pokemon: PokemonEnum!
  ) {
    getPokemon(
      offsetFlavorTexts: $offsetFlavorTexts
      takeFlavorTexts: $takeFlavorTexts
      reverseFlavorTexts: $reverseFlavorTexts
      pokemon: $pokemon
    ) {
      species
      key
      weight
      height
      abilities {
        first {
          name
        }
        hidden {
          name
        }
        second {
          name
        }
        special {
          name
        }
      }
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      shinyBackSprite
      backSprite
    }
  }
`;
