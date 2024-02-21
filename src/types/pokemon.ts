export type Pokemon = {
    "key": string,
    "abilities": Abilities,
    "backSprite": string,
    "baseForme"?: string|null,
    "baseSpecies"?: string|null,
    "baseStats": BaseStat,
    "baseStatsTotal": number,
    "bulbapediaPage": string,
    "catchRate"?: {
        "base"?: number,
        "percentageWithOrdinaryPokeballAtFullHealth"?: string
    },
    "color": string,
    "cosmeticFormes"?: null,
    "eggGroups"?: [
        string
    ],
    "evolutionLevel"?: null,
    "evolutions"?: null,
    "evYields": {
        "attack"?: number,
        "defense"?: number,
        "hp"?: number,
        "specialattack"?: number,
        "specialdefense"?: number,
        "speed"?: number
    },
    "flavorTexts"?: [],
    "forme"?: null,
    "formeLetter"?: null,
    "gender": {
        "female"?: string,
        "male"?: string
    },
    "height": number,
    "isEggObtainable": false,
    "levellingRate"?: null,
    "maximumHatchTime"?: null,
    "minimumHatchTime"?: null,
    "num"?: number,
    "otherFormes"?: null,
    "preevolutions"?: null,
    "serebiiPage"?: string,
    "shinyBackSprite"?: string,
    "shinySprite"?: string,
    "smogonPage"?: string,
    "smogonTier"?: string,
    "species": string,
    "sprite": string,
    "types": {
        "name"?: string
    }[],
    "weight": number,
    "mythical": boolean,
    "legendary": boolean
}

type Abilities = {
    "first": Ability,
    "hidden"?: Ability | null,
    "second"?: Ability | null,
    "special"?: Ability | null
}

type Ability = {
    "key": string,
    "bulbapediaPage"?: string,
    "desc"?: string,
    "isFieldAbility"?: boolean | null,
    "isNonstandard"?: boolean | null,
    "name": string,
    "serebiiPage"?: string,
    "shortDesc": string,
    "smogonPage"?: string
}

type BaseStat = {
    "attack": number,
    "defense": number,
    "hp": number,
    "specialattack": number,
    "specialdefense": number,
    "speed": number
}