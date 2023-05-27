const validation = (userData) => {
    const errors = {};
    if (!/\S+@\S+\.\S+/.test(userData.email)) {
        errors.email= "El email es invalido";
    }
    if(!userData.email){
        errors.email = 'debe ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email = 'El email es muy largo';
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'La contraseña debe contener entre 6 y 10 caracteres';
    }



    return errors;
  };

  export default validation; 
