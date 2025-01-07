function updateKey(){
    var key = [];
    key.push(textToHex(localStorage.getItem("firstName")));
    key.push("/");
    key.push(textToHex(localStorage.getItem("lastName")));
    for (let i=0;i<9;i++){
        key.push("/");
        key.push(textToHex(localStorage.getItem("answer"+(i+1).toString())));
    }
    key.push("/");
    key.push(textToHex(localStorage.getItem("gender")));
    localStorage.setItem("key",key.join(""));
}

function hexToText(hex){
    try{
    var result = [];
    for (i=0;i<hex.length;i+=2){
        result.push(String.fromCharCode(parseInt(hex[i]+hex[i+1],16)));
    }
    return result.join("")
    }catch(e){}
}

function textToHex(text){
    try{
    var result = []
    if (text!=null){
    for (i=0;i<text.length;i++){
        result.push(text.charCodeAt(i).toString(16));
    }
    }
    return result.join("");
    }catch(e){}
}