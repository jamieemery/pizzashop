import { Pizza } from "../types/Pizza";

export function calculatePrice(toppings: string[]){
    if(toppings.length === 0){
        return "£0.00"
    }
    else if(toppings.length <= 2){
        return "£7.99"
    }
    else if(toppings.length <= 4){
        return "£9.99"
    }
    else{
        return "£13.99"
    }
}

export function calculateTotal(pizzas: Pizza[]) : number{
    var total = 0;
    pizzas.forEach(pizza => {
        if(pizza.toppings.length <= 2){
            total += 7.99;
        }
        else if(pizza.toppings.length <= 4){
            total += 9.99;
        }
        else{
            total += 13.99;
        }
    });
    return total;
}