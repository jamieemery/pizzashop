export function calculatePrice(toppings: string[]){
    if(toppings.length === 0){
        return "£0.00"
    }
    if(toppings.length <= 2){
        return "£7.99"
    }
    if(toppings.length <= 4){
        return "£9.99"
    }
    else{
        return "£13.99"
    }
}