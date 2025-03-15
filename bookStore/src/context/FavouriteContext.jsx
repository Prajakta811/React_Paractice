import { children, createContext, useState } from "react";

export const FavoriteContext=createContext();
export const FavoriteProvider=({children})=>{
    const[favorite,setFavorite]=useState([])
    const addFav=(book)=>{
        if(!favorite.some(fav=>fav.id==book.id))
        {
            setFavorite((pre)=>[...pre,book])
        }
        else{
            setFavorite((item)=>item.filter(fav=>fav.id!==book.id))
        }
    }
    return(
        <FavoriteContext.Provider value={{favorite,addFav}}>
            {children}
        </FavoriteContext.Provider>
    )
}
