import React from 'react';
import {Button, Stack} from "react-bootstrap";
import storeItems from '../data/items.json'
import {useShoppingCart} from "../context/ShoppingCartContext";
import {formatCurrency} from "../utilities/formatCurrency";

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem ({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(el => el.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className={'d-flex align-items-center'}>
            <img
                src={item.imgUrl}
                style={{
                    width: "125px",
                    height: "75px",
                    objectFit: "cover"
                }}/>
                <div className={'me-auto'}>
                    {item.name}
                    {quantity > 1 && <span className={'text-mutate'}> x{quantity}</span>}
                    <div className={'text-mutate'}>{formatCurrency(item.price)}</div>
                </div>
            <div className={'text-mutate'}>{formatCurrency(item.price * quantity)}</div>
            <Button variant={'danger'} onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    );
}
