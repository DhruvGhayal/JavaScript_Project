function changeBG (colour){
    document.body.style.backgroundColor = colour;
    let txt = document.getElementsByClassName("text");
    if(colour == "#000000"){
        for(let elm of txt){
            elm.style.color = "white";
        }
    }else{
        for(let elm of txt){
            elm.style.color = "black";
        }
    }
}