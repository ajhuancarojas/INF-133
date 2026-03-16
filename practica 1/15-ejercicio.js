function Numero(callback){
    callback(90*2)
}
function Promesa(){
    return new Promise(function(resolve){
        Numero(function(num){
            resolve(num)
        })
    })
}
Promesa().then(function(res){
    console.log(res)
})