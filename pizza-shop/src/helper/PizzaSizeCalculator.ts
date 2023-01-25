export function pizzaSizeCalculator(toppings: string[]){
    if(toppings.length <= 2){
        return "Small"
    }
    else if(toppings.length <= 4){
        return "Medium"
    }
    else{
        return "Large"
    }
}