function miFuncion(x){
    let mayor = x[0];
    let menor = x[0];

    for(let i=1;i<x.length;i++){
        if(x[i] > mayor){
            mayor = x[i]
        }
        if(x[i] < menor){
            menor = x[i]
        }

    }
    return {mayor: mayor, menor: menor}
}

let obj = miFuncion([3,1,5,4,2])
console.log(obj)