import React from 'react';
import {Button, Card} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number,
    imgUrl: string,
    name: string,
    price: number
}

export function StoreItem({id, imgUrl, name, price}: StoreItemProps){

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(id);

    return (
        <Card className="h-100">
            <Card.Img
                variant={"top"}
                src={imgUrl}
                height="200px"
                style={{objectFit: "cover"}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0
                        ?
                        <Button
                            className="w-100"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            Add to Cart
                        </Button>
                        :
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{gap: ".5rem"}}
                        >
                            <div className="d-flex align-items-center justify-content-center">
                                <Button
                                    onClick={() => decreaseCartQuantity(id)}
                                >-</Button>
                                <div className="fs-4 m-2">
                                    {quantity}
                                    <span>in cart</span>
                                </div>
                                <Button
                                    onClick={() => increaseCartQuantity(id)}
                                >+</Button>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => removeFromCart(id)}
                            >
                                Remove
                            </Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    );
}
