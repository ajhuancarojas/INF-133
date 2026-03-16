let x = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("mensaje exitoso");
    },3000)
})
x.then(function(mensaje){
    console.log(mensaje)
})