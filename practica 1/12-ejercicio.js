setTimeout(function(){
    console.log("tres")
    setTimeout(function(){
        console.log("dos ")
        setTimeout(function(){
            console.log("uno")
        },500)
    },500)
},500)

//con async/await 
function cuenta(x){
    return new Promise(resolve => setTimeout(resolve,x))
}
async function proceso(){
    await cuenta(500)
    console.log("tres ")
    await cuenta(500)
    console.log("dos ")
    await cuenta(500)
    console.log("uno ")
}
proceso()
