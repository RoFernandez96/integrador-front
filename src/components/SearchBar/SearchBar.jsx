import { useState } from "react"
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (e) => {
   setId(e.target.value);
   };
   return(
      <div className= {style.contenedor} >
         <div >
            <input type="search" onChange={handleChange} value={id} />  
            <button onClick={()=> {onSearch(id)}} >Agregar</button>
         </div>
      </div>
   )
}