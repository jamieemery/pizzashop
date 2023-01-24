import { Button, Chip, Container, Typography } from "@mui/material"
import { calculatePrice } from "../helper/PizzaPriceCalculator"
import { toppingMapper } from "../helper/ToppingMappingHelper"
import { Pizza } from "../types/Pizza"

interface Props{
    toppings: string[],
    setToppings?: React.Dispatch<React.SetStateAction<string[]>>
    setPizzas?: React.Dispatch<React.SetStateAction<Pizza[]>>
    pizzas?: Pizza[]
    pizzaId?: number
}
export function ThePizza(props:Props) {
    return(
        <Container sx={{"@media(min-width: 600px)": {paddingLeft: 0, paddingRight: 0}}}>
            <Typography>Your Pizza: </Typography>
            <Container>
                {props.toppings.map((topping, index) => {
                    return(<Chip label={topping} color={toppingMapper(topping)} key={index}/>)
                })}
            </Container>
            <Typography>Price: {calculatePrice(props.toppings)}</Typography>
            <Button 
                onClick={() => {
                    props.setToppings !== undefined ? props.setToppings([]) :
                    props.setPizzas !== undefined ? props.setPizzas(props.pizzas!.filter(x => x.id !== props.pizzaId)) 
                    : console.log("error")
                }}
            >{props.pizzaId !== undefined ? "Remove " : "Clear"} pizza
            </Button>
        </Container>
    )
}