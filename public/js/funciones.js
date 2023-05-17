const validarFechas = () => {

    //Definimos la fecha actual
    var fechaActual = new Date();var ano = fechaActual.getFullYear().toString();
    var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    var dia = fechaActual.getDate().toString().padStart(2, '0');
  
    let errores = '';
    var fecha = ano + '-' + mes + '-' + dia;

    
    const partida = document.getElementById('partida').value;
    const retorno = document.getElementById('retorno').value;

    //Validamos las fechas ingresadas
    if (partida < fecha) {
      errores += "La fecha de partida es inferior a la fecha actual \n";
    } 
    
    if (retorno < fecha) {
      errores += "La fecha de retorno es inferior a la fecha actual \n";
    } 
    
    if (partida > retorno) {
      errores += "La fecha de partida es mayor a la fecha de retorno \n";
    } 
    
    if (partida == retorno){
      errores += "La fecha de partida es igual a la fecha de retorno";
    }

    document.getElementById('error').innerText = errores

  }
  
  document.querySelector('#vuelos-btn')
  .addEventListener('click', () => validarFechas());
  


