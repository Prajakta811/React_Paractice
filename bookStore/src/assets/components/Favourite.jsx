import React, { useContext } from 'react'
import { FavoriteContext } from '../../context/FavouriteContext'

const Favourite = () => {
  const{favorite}=useContext(FavoriteContext)

  
  return (
    <div>
   {favorite.length==0 ?
   (<p>No Favourite Added</p>):
   
   (<div className='book'>
    {favorite.map((item)=>(
        <div key={item.id} >
        <h1>Title:{item.title}</h1>
        <p>Author:{item.author}</p>
        <h3>Price:${item.price}</h3>
      </div>
     ))}
   </div>)}
    </div>
  )
}

export default Favourite
