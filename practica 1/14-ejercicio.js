function Saludo(){
    return new Promise(function(resolve){
        resolve("Hola alejandra !!!")
    })
}
function usarCallback(callback){
    Saludo().then(callback)
}
usarCallback(function(resultado){
    console.log(resultado)
})