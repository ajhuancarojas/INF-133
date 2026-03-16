function op(){
    return new Promise(resolve=>{
        resolve(2+2)
    })
}
op()
.then(function(num){
    return num * 4;
})
.then(function(num){
    console.log(num);
})
//funcion async/await
async function calcular(){
    let num = await op()
    num = num * 4;
    console.log(num)
}
calcular()