import { useState } from "react";
import validation from "../Validation/Validation";
import style from './Forms.module.css'

const Forms = ({login}) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
    setErrors(validation({...userData, [event.target.name]: event.target.value }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className= {style.forms}>
        <label htmlFor="email" className={style.emailL}>Email:</label>
        <input className={style.email} value={userData.email} type="text" name="email" onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="password" className={style.passwordP}>Password:</label>
        <input className={style.password} value={userData.password} type="password" name="password" onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
        <hr />
        <button type="submit" className={style.button} >Enviar</button>
      </form>
    </div>
  );
};

export default Forms;
