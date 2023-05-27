import style from './About.module.css'
import image from '../../Image/Roo1.ico'


export default function About() {
  return (
    <div className={style.about}>
      <img className={style.img} src={image} alt='' /> 
      <h1> Nombre: Ro  </h1>
      <h1>Apellido: Fernandez </h1>
      <h1> Edad: 27 años</h1>
      <h1>GitHub: Roof96 </h1>
    </div>
  );
};



