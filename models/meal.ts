export class Meal {

    constructor(
        public id: string,
        public categoryIds: string[],
        public title: string,
        public affordability: Affordability,
        public complexity: Complexity,
        public imageUrl: string,
        public duration: number,
        public ingredients: string[],
        public steps: string[],
        public isGlutenFree: boolean,
        public isVegan: boolean,
        public isVegetarian: boolean,
        public isLactoseFree: boolean
    ) {}

}

export type Affordability = 'affordable' | 'pricey' | 'luxurious';
export type Complexity = 'simple' | 'challenging' | 'hard';