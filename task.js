function encryptArguments(...args) {
    let responseMessage = "Error. Something went wrong";
    if( !args.length ) {
        return responseMessage;
    } 
    let result = args.map( (element) => {
        if( element.length%2 === 0 ) {
            return element.split("").reverse().join("");
        }else{
            return element.split("").map((letter, idx) => {
                return idx%2===1 ?  "*" : letter;
            }).join("")
        }
    })
    return result;
}
let showResult = encryptArguments("I", "like" ,"bananas")
console.log( showResult )
