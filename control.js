const form =document.getElementById("form");
const correo =document.getElementById("correo");
const contraseña =document.getElementById("contraseña");

form.addEventListener("Iniciar sesion",(e) =>{
    e.preventDefault();

    checkInputs ();
});

function checkInputs() {
    //get the values from the inputs
    const correoValue =correo.value.trim();
    const contraseñaValue=contraseña.value.trim();
    const He_leido_y_acepto_los_terminos_y_condiciones =He_leido_y_acepto_los_terminos_y_condiciones.trim();

    if(correoValue==="") {
        setErrorFor(correo, "correo no cannot be blank");
    } else  if (!iscorreo(correoValue)) {
        setErrorFor(correo, "correoValue is not valid") {
    } else {
        setSccessFor(correo);
    }

    if (contraseñaValue==="") {

   

    if (contraseñaValue ==="") {
        setErrorFor(contraseña, "contraseña cannot be blank");
    }else {
        setSuccessFor(contraseña)
    }


function setErrorFor(input,mensaje) {
     const formControl=input.parentElement;// .form-control
     const small =formControl.querySelector("small");

     // add error mensaje inside small
     small.innertext=mensaje
     
     //add error class
     formControl.classcorreo ="form-control error";
}  

function setSuccessFor(input) {
    const formControl =input.parentElement;
    formControl.classcorreo= "form-control success";


}

function iscorreo(correo {

})


