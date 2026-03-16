function miFuncion(X){
    let R = {a:0, e:0, i:0, o:0, u:0}
    for(let i=0;i<X.length;i++){
        let letra = X[i].toLowerCase()
        if(letra=="a") R.a++
        if(letra=="e") R.e++
        if(letra=="i") R.i++
        if(letra=="o") R.o++
        if(letra=="u") R.u++
    }
    return R;
}
let obj = miFuncion("euforiaAAA")
console.log("palabra euforiaAAA")
console.log(obj)