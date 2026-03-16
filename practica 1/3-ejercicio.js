function miFuncion(x){
    let par= [];
    let imp= [];
    for(let i=0;i<x.length;i++){
        if(x[i] % 2 == 0){
            par.push(x[i]);// agrega el número al arreglo pares
        }else{
            imp.push(x[i]);
        }
    }
    return {pares : par, impares: imp}
}
let obj = miFuncion([1,2,3,4,5,6,7,8,9,10])
console.log(obj)