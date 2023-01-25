import { Button, Card, Container, Typography } from "@mui/material";
import { useState } from "react";
import { Pizza } from "../../types/Pizza";
import { PizzaItem } from "./PizzaItem";
import { Toppings } from "../Toppings/Toppings";

interface Props{
    pizzas: Pizza[]
    setPizzas: React.Dispatch<React.SetStateAction<Pizza[]>>
    pizzaId: number
    setPizzaId: React.Dispatch<React.SetStateAction<number>>
}
export function PizzaCard(props: Props) {

    const [toppings, setToppings] = useState<string[]>([]);

    const pizza : Pizza = { toppings: toppings, id: props.pizzaId};
    return (
      <Card sx={{padding: "1%"}}>
        <Container sx={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Typography>Choose your pizza toppings</Typography>
            <Typography>Small = 2 toppings £7.99</Typography>
            <Typography>Medium = 3 toppings £9.99</Typography>
            <Typography>Large = 5 toppings £13.99</Typography>
        </Container>
        <Toppings setToppings={setToppings} toppings={toppings}/>
        <PizzaItem toppings={toppings} setToppings={setToppings}/>
        <Button 
          variant="contained" 
          disabled={toppings.length === 0}
          onClick={() => {
              props.setPizzas([...props.pizzas, pizza ]);
              props.setPizzaId(props.pizzaId+1);
              }}
        >
                Add to basket
        </Button>
      </Card>
    );
  }