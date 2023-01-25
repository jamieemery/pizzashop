import { Button, Chip, Container, Typography } from "@mui/material"
import { calculatePrice } from "../../helper/PizzaPriceCalculator"
import { pizzaSizeCalculator } from "../../helper/PizzaSizeCalculator"
import { toppingMapper } from "../../helper/ToppingMappingHelper"
import { Pizza } from "../../types/Pizza"

interface Props{
    toppings: string[],
    setToppings?: React.Dispatch<React.SetStateAction<string[]>>
    setPizzas?: React.Dispatch<React.SetStateAction<Pizza[]>>
    pizzas?: Pizza[]
    pizza?: Pizza
}
export function PizzaItem(props:Props) {
    return(
        <Container sx={{"@media(min-width: 600px)": {paddingLeft: 0, paddingRight: 0}}}>
            {props.pizza === undefined && (<hr/>)}
            <Typography>{props.pizza === undefined ?  "Your " : pizzaSizeCalculator(props.pizza.toppings)} Pizza: </Typography>
            <Container>
                {props.toppings.map((topping, index) => {
                    return(<Chip label={topping} color={toppingMapper(topping)} key={index}/>)
                })}
            </Container>
            <Typography sx={{fontWeight: "bold"}}>Price: {calculatePrice(props.toppings)}</Typography>
            <Button 
                onClick={() => {
                    props.setToppings !== undefined ? props.setToppings([]) :
                    props.setPizzas !== undefined ? props.setPizzas(props.pizzas!.filter(x => x.id !== props.pizza?.id)) 
                    : console.log("error")
                }}
            >{props.pizza !== undefined ? "Remove " : "Clear"} pizza
            </Button>
            {props.pizza !== undefined && (<hr/>)}
        </Container>
    )
}