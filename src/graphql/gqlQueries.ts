import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql`query (
  $offset: Int
  $take: Int
  $reverse: Boolean
  $offsetFlavorTexts: Int
  $takeFlavorTexts: Int
  $reverseFlavorTexts: Boolean
) {
  getAllPokemon(
    offset: $offset
    take: $take
    reverse: $reverse
    offsetFlavorTexts: $offsetFlavorTexts
    takeFlavorTexts: $takeFlavorTexts
    reverseFlavorTexts: $reverseFlavorTexts
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
        pokemonThatHaveThisAbility {
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
        pokemonThatHaveThisAbility {
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
        pokemonThatHaveThisAbility {
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
        pokemonThatHaveThisAbility {
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
      abilities {
        first {
          key
          bulbapediaPage
          desc
          isFieldAbility
          isNonstandard
          name
          pokemonThatHaveThisAbility {
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
          pokemonThatHaveThisAbility {
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
          pokemonThatHaveThisAbility {
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
          pokemonThatHaveThisAbility {
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
      learnsets {
        generation8 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation7 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation6 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation5 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation4 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation3 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
      }
      otherFormes
      preevolutions {
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
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      types {
        name
        matchup {
          attacking {
            doubleEffectiveTypes
            doubleResistedTypes
            effectiveTypes
            effectlessTypes
            normalTypes
            resistedTypes
          }
          defending {
            doubleEffectiveTypes
            doubleResistedTypes
            effectiveTypes
            effectlessTypes
            normalTypes
            resistedTypes
          }
        }
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
    learnsets {
      generation8 {
        dreamworldMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eggMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eventMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        levelUpMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
          level
        }
        tmMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        tutorMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        virtualTransferMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
      }
      generation7 {
        dreamworldMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eggMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eventMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        levelUpMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
          level
        }
        tmMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        tutorMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        virtualTransferMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
      }
      generation6 {
        dreamworldMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eggMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eventMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        levelUpMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
          level
        }
        tmMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        tutorMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        virtualTransferMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
      }
      generation5 {
        dreamworldMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eggMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eventMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        levelUpMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
          level
        }
        tmMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        tutorMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        virtualTransferMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
      }
      generation4 {
        dreamworldMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eggMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eventMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        levelUpMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
          level
        }
        tmMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        tutorMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        virtualTransferMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
      }
      generation3 {
        dreamworldMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eggMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        eventMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        levelUpMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
          level
        }
        tmMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        tutorMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
        virtualTransferMoves {
          generation
          move {
            key
            accuracy
            basePower
            bulbapediaPage
            category
            contestType
            desc
            isFieldMove
            isGMax
            isNonstandard
            isZ
            maxMovePower
            name
            pp
            priority
            serebiiPage
            shortDesc
            smogonPage
            target
            type
            zMovePower
          }
        }
      }
    }
    otherFormes
    preevolutions {
      key
      abilities {
        first {
          key
          bulbapediaPage
          desc
          isFieldAbility
          isNonstandard
          name
          pokemonThatHaveThisAbility {
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
          pokemonThatHaveThisAbility {
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
          pokemonThatHaveThisAbility {
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
          pokemonThatHaveThisAbility {
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
      learnsets {
        generation8 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation7 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation6 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation5 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation4 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
        generation3 {
          dreamworldMoves {
            generation
          }
          eggMoves {
            generation
          }
          eventMoves {
            generation
          }
          levelUpMoves {
            generation
            level
          }
          tmMoves {
            generation
          }
          tutorMoves {
            generation
          }
          virtualTransferMoves {
            generation
          }
        }
      }
      otherFormes
      preevolutions {
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
      serebiiPage
      shinyBackSprite
      shinySprite
      smogonPage
      smogonTier
      species
      sprite
      types {
        name
        matchup {
          attacking {
            doubleEffectiveTypes
            doubleResistedTypes
            effectiveTypes
            effectlessTypes
            normalTypes
            resistedTypes
          }
          defending {
            doubleEffectiveTypes
            doubleResistedTypes
            effectiveTypes
            effectlessTypes
            normalTypes
            resistedTypes
          }
        }
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
      matchup {
        attacking {
          doubleEffectiveTypes
          doubleResistedTypes
          effectiveTypes
          effectlessTypes
          normalTypes
          resistedTypes
        }
        defending {
          doubleEffectiveTypes
          doubleResistedTypes
          effectiveTypes
          effectlessTypes
          normalTypes
          resistedTypes
        }
      }
    }
    weight
    mythical
    legendary
  }
}
`

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