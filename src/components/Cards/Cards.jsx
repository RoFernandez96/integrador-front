import Card from '../Card/Card';
import Style from './Cards.module.css'

export default function Cards ({characters, onClose}) {
   return(
   <div className={Style.cards} >
      {
         characters.map(({id, name, status, species, gender, origin,image}) => {
            return(
               <Card 
                  key ={id} 
                  id = {id}
                  name = {name}
                  status = {status}
                  species = {species}
                  gender = {gender}
                  origin = {origin.name}
                  image = {image}
                  onClose={onClose}
               />
            )
         })
      }
   </div>
   )
};
