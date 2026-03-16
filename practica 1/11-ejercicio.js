// dato de usuario a mayuscula
function usuario(){
    return new Promise(function(resolve){
        resolve("Alejandra")
    })
}
usuario()
.then(function(nomb){
    return nomb.toUpperCase();
})
.then(function(nomb){
    return "Usuario: " + nomb;
})
.then(function(resultado){
    console.log(resultado)
})