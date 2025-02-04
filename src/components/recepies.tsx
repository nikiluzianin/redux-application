import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { useEffect } from "react";
import { fetchRecipes } from "../store/receiptsSlice";
import { useAppDispatch } from "../hooks/hooks";

export default function Recipes() {

    const recipes = useSelector((state: RootState) => state.recipes);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch])

    return (
        <div>
            {recipes.map((recipe) => {
                return <p key={recipe.name}> {recipe.name} </p>
            })}
        </div>
    )

}

