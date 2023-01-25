import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { calculateTotal } from "../../helper/PizzaPriceCalculator";
import { Pizza } from "../../types/Pizza";
import { PizzaItem } from "../Pizza/PizzaItem";

interface Props {
    pizzas: Pizza[];
    setPizzas: React.Dispatch<React.SetStateAction<Pizza[]>>;
}

export function BasketContains(props: Props) {
    return (
        <Card sx={{padding: "10px"}}>
            {props.pizzas.length === 0 && (<Typography>ORDER SOME PIZZA.</Typography>)}
            {props.pizzas.length > 0 && (
                <>
                    {props.pizzas.map((pizza, key) => {
                        return (
                            <PizzaItem 
                                toppings={pizza.toppings}
                                setPizzas={props.setPizzas}
                                pizza={pizza}
                                pizzas={props.pizzas}
                                key={key} 
                            />
                            )
                        })}
                    <Typography sx={{fontWeight: "bold"}}>Total: £{calculateTotal(props.pizzas)}</Typography>
                </>
            )}
            </Card>
    )
}