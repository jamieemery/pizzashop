import { Badge, IconButton, Popover, Typography } from "@mui/material";
import { Pizza } from "../types/Pizza";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { BasketContains } from "./BasketContents";

interface Props {
    pizzas: Pizza[];
    setPizzas: React.Dispatch<React.SetStateAction<Pizza[]>>;
}
export function Basket(props: Props) {

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'cart' : undefined;

    return (
        <>
            <IconButton onClick={(e) => {setAnchorEl(e.currentTarget)}} aria-describedby={id}>
                <Badge badgeContent={props.pizzas.length}>
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
            <Popover
                id=""
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <BasketContains pizzas={props.pizzas} setPizzas={props.setPizzas}/>
            </Popover>
        </>
    )
}