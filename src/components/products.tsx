import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useEffect } from "react";
import { fetchProducts } from "../store/productesSlide";
import { useAppDispatch } from "../hooks/hooks";
import { Button } from "@mui/material";
import { addToCart } from "../store/cartSlice"
import Cart from "./cart";

export default function Products() {

    const products = useSelector((state: RootState) => state.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <>
            <Cart />
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <Button onClick={() => dispatch(addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        image: product.image
                    }))} > Add To Cart </Button>
                </div>
            ))}
        </>
    )

}