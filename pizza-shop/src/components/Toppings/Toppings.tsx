import { Chip, Container } from "@mui/material"
import { ToppingColour } from "../../enums/ToppingColourChip";

interface Props{
    toppings: string[],
    setToppings: React.Dispatch<React.SetStateAction<string[]>>
}
export function Toppings(props: Props){
    function setTopping(e: any){
        props.setToppings([...props.toppings, e.target.innerText]);
    }
    return(
        <Container sx=
        {{
            display: props.toppings.length > 4 ? "none" : "flex",
            marginTop: "10px",
            gap: "2%",
            "@media(min-width: 600px)": {paddingLeft: 0}
        }}
        >        
            <Chip onClick={(e) => setTopping(e)} label="Bacon" color={ToppingColour.Bacon}/>
            <Chip onClick={(e) => setTopping(e)} label="Chicken" color={ToppingColour.Chicken}/>
            <Chip onClick={(e) => setTopping(e)} label="Peppers" color={ToppingColour.Peppers}/>
            <Chip onClick={(e) => setTopping(e)} label="Chilli" color={ToppingColour.Chilli}/>
            <Chip onClick={(e) => setTopping(e)} label="Onions" color={ToppingColour.Onions}/>
        </Container>
    )

}