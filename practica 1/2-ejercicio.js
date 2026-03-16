function miFuncion(X){
    let inv= ""
    for(let i=X.length-1;i>=0;i--){
        inv = inv + X[i]
    }
    return inv
}
let cad = miFuncion("ALEJANDRA")
console.log(cad)