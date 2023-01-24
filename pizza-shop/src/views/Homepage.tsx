import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { Basket } from "../components/Basket";
import { PizzaCard } from "../components/PizzaCard";
import { Pizza } from "../types/Pizza";

export function Homepage() {

    const [pizzaId, setPizzaId] = useState(0);
    const [pizzas, setPizzas] = useState<Pizza[]>([]);

    console.log(pizzaId);

    return (
      <Container sx={{
        width: "80%",
        margin: "5%",
      }}>
        <Container sx={{marginLeft: "90%"}}>
            <Basket pizzas={pizzas} setPizzas={setPizzas}/>
        </Container>
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <PizzaCard
                setPizzas={setPizzas}
                pizzas={pizzas}
                 pizzaId={pizzaId}
                 setPizzaId={setPizzaId}
                 />
        </Grid>
      </Container>
    );
  }