import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";
import {addFav, removeFav} from '../../redux/actions';
import {connect} from 'react-redux';
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorites = () =>{
    if(isFav){
      setIsFav(false);
      removeFav(id)
    }else{
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose})
    }
  }

  useEffect(() => {
      myFavorites.forEach((fav) => {
          if (fav.id === id) {
            setIsFav(true);
          }
      });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      <button onClick={handleFavorites}>{isFav ? '❤️' : '🤍' }</button>
      <div >
        <Link to={`/detail/${id}`}>
          <img src={image} alt="" className={style.image}/>
        </Link>
      </div>
      <div className={style.info}>
        <h2>Name: {name}</h2>
        <h2>Status: {status}</h2>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Origin: {origin}</h2>
      </div>
      <div  >
        <button onClick={() => {onClose(id);}} className={style.button}>X</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    myFavorites: state.myFavorites,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addFav: (character) => {dispatch(addFav(character))},
    removeFav: (id) => {dispatch(removeFav(id))},

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps

  )(Card);