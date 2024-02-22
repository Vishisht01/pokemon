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

export const GET_POKEMON = gql`query (
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
    key
    abilities {
      first {
        key
        bulbapediaPage
        desc
        isFieldAbility
        isNonstandard
        name
        serebiiPage
        shortDesc
        smogonPage
      }
      hidden {
        key
        bulbapediaPage
        desc
        isFieldAbility
        isNonstandard
        name
        serebiiPage
        shortDesc
        smogonPage
      }
      second {
        key
        bulbapediaPage
        desc
        isFieldAbility
        isNonstandard
        name
        serebiiPage
        shortDesc
        smogonPage
      }
      special {
        key
        bulbapediaPage
        desc
        isFieldAbility
        isNonstandard
        name
        serebiiPage
        shortDesc
        smogonPage
      }
    }
    backSprite
    baseForme
    baseSpecies
    baseStats {
      attack
      defense
      hp
      specialattack
      specialdefense
      speed
    }
    baseStatsTotal
    bulbapediaPage
    catchRate {
      base
      percentageWithOrdinaryPokeballAtFullHealth
    }
    color
    cosmeticFormes
    eggGroups
    evolutionLevel
    evolutions {
      key
      backSprite
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      catchRate {
        base
        percentageWithOrdinaryPokeballAtFullHealth
      }
      color
      cosmeticFormes
      eggGroups
      evolutionLevel
      evolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
        mythical
        legendary
      }
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      flavorTexts {
        flavor
        game
      }
      forme
      formeLetter
      gender {
        female
        male
      }
      height
      isEggObtainable
      levellingRate
      maximumHatchTime
      minimumHatchTime
      num
      otherFormes
      preevolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
        mythical
        legendary
      }
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      types {
        name
      }
      weight
      mythical
      legendary
    }
    evYields {
      attack
      defense
      hp
      specialattack
      specialdefense
      speed
    }
    flavorTexts {
      flavor
      game
    }
    forme
    formeLetter
    gender {
      female
      male
    }
    height
    isEggObtainable
    levellingRate
    maximumHatchTime
    minimumHatchTime
    num
    otherFormes
    preevolutions {
      key
      backSprite
      baseForme
      baseSpecies
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      baseStatsTotal
      bulbapediaPage
      catchRate {
        base
        percentageWithOrdinaryPokeballAtFullHealth
      }
      color
      cosmeticFormes
      eggGroups
      evolutionLevel
      evolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
        mythical
        legendary
      }
      evYields {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      flavorTexts {
        flavor
        game
      }
      forme
      formeLetter
      gender {
        female
        male
      }
      height
      isEggObtainable
      levellingRate
      maximumHatchTime
      minimumHatchTime
      num
      otherFormes
      preevolutions {
        key
        backSprite
        baseForme
        baseSpecies
        baseStatsTotal
        bulbapediaPage
        color
        cosmeticFormes
        eggGroups
        evolutionLevel
        forme
        formeLetter
        height
        isEggObtainable
        levellingRate
        maximumHatchTime
        minimumHatchTime
        num
        otherFormes
        serebiiPage
        shinyBackSprite
        shinySprite
        smogonPage
        smogonTier
        species
        sprite
        weight
        mythical
        legendary
      }
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      types {
        name
      }
      weight
      mythical
      legendary
    }
    serebiiPage
    shinyBackSprite
    shinySprite
    smogonPage
    smogonTier
    species
    sprite
    types {
      name
    }
    weight
    mythical
    legendary
  }
}
`