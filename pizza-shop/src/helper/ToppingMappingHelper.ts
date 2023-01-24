import { ToppingColour } from "../enums/ToppingColourChip";

export function toppingMapper(topping: string){
    if(topping === "Bacon"){
        return ToppingColour.Bacon;
    }
    else if(topping === "Chicken"){
        return ToppingColour.Chicken;
    }
    else if(topping === "Peppers"){
        return ToppingColour.Peppers;
    }
    else if(topping === "Chilli"){
        return ToppingColour.Chilli;
    }
    else{
        return ToppingColour.Onions;
    }
}