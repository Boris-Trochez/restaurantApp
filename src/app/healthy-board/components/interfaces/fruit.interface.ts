/**
 * @author Boris Trochez
 * @description: interface created using https://app.quicktype.io/ according to the 
 * response given by the fruityvice public API.
 */

export interface Fruit {
    genus:      string;
    name:       string;
    id:         number;
    family:     string;
    order:      string;
    nutritions: Nutritions;
}

export interface Nutritions {
    carbohydrates: number;
    protein:       number;
    fat:           number;
    calories:      number;
    sugar:         number;
}
