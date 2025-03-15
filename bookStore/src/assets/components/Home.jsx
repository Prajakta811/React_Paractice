import React, { useContext } from 'react'
import { Heart,HeartOff } from 'lucide-react';
import { FavoriteContext } from '../../context/FavouriteContext';

 const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", price: 499 },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 399 },
  { id: 3, title: "The Alchemist", author: "Paulo Coelho", price: 299 },
  { id: 4, title: "Deep Work", author: "Cal Newport", price: 599 },
  { id: 5, title: "Ikigai", author: "Héctor García", price: 349 }
]
{/* <HeartOff /> */}
const Home = () => {
const{favorite,addFav} = useContext(FavoriteContext)
const isFav=(bookid)=>favorite.some((fav)=>fav.id==bookid)
  function handleClick(book){
      addFav(book)
  }
  return (
    <div className="book">
    {books.map((item)=>(
      <div key={item.id} >
        <h1>Title:{item.title}</h1>
        <p>Author:{item.author}</p>
        <h3>Price:${item.price}</h3>
        <button id="heart" onClick={()=>handleClick(item)}>{isFav(item.id)?<Heart />:<HeartOff />}</button>
      </div>
    ))}
    </div>
  )
}

export default Home
