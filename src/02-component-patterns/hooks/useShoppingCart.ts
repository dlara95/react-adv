import React from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = React.useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCart(oldShoppingCart => {

            const productIncart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};

            if (Math.max(productIncart.count + count, 0) > 0) {
                productIncart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productIncart
                }
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;


            // if (count === 0) {

            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //     return rest;
            // }

            // const newShoppingCart = { ...oldShoppingCart };
            // newShoppingCart[product.id] = {
            //     ...product,
            //     count
            // }
            // return newShoppingCart;
        });
    }

    return {
        onProductCountChange,
        shoppingCart
    }


}