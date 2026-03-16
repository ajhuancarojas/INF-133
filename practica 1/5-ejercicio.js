function miFuncion(x){
    let v = ""

    for(let i=x.length-1;i>=0;i--){
        v = v + x[i]
    }
    if(x == v){
        return true// es un palíndromo
    }else{
        return false
    }

}

let band = miFuncion("oruro")
console.log(band)
let band2 = miFuncion("hola")
console.log(band2)