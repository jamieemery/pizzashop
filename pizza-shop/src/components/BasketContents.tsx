import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import { calculateTotal } from "../helper/PizzaPriceCalculator";
import { Pizza } from "../types/Pizza";
import { ThePizza } from "./ThePizza";

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
                            <ThePizza 
                                toppings={pizza.toppings}
                                setPizzas={props.setPizzas}
                                pizzaId={pizza.id}
                                pizzas={props.pizzas}
                                key={key} 
                            />
                            )
                        })}
                    <Typography>Total: £{calculateTotal(props.pizzas)}</Typography>
                </>
            )}
            </Card>
    )
}