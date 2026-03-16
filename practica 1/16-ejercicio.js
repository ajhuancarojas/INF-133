function Datos(){
    return new Promise(resolve=>{
        resolve("rosaa")
    })
}
Datos().then(function(nomb){
    console.log(nomb)
})

//async/await
async function mostrar(){
    let nomb1 = await Datos()
    console.log(nomb1)
}
mostrar()














