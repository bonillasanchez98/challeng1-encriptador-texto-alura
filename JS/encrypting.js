/* 
    e --> enter
    o --> ober
    i --> imes
    a --> ai
    u --> ufat
*/
function encrypt(){
    var text = document.getElementById("id-input-text").value.toLowerCase();

    var textCifrad = text.replace(/e/igm,"enter");
    var textCifrad = textCifrad.replace(/o/igm,"ober");
    var textCifrad = textCifrad.replace(/i/igm,"imes");
    var textCifrad = textCifrad.replace(/a/igm,"ai");
    var textCifrad = textCifrad.replace(/u/igm,"ufat");

    document.getElementById("right-img-id").style.display = "none";
    document.getElementById("right-h1-id").style.display = "none";

    document.getElementById("id-text-area").innerHTML = textCifrad;

    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inherit";
}

/* 
    enter --> e
    ober --> o
    imes --> i
    ai --> a
    ufat --> u
*/
function unencrypt(){
    var text = document.getElementById("id-input-text").value.toLowerCase();

    var textCifrad = text.replace(/enter/igm,"e");
    var textCifrad = textCifrad.replace(/ober/igm,"o");
    var textCifrad = textCifrad.replace(/imes/igm,"i");
    var textCifrad = textCifrad.replace(/ai/igm,"a");
    var textCifrad = textCifrad.replace(/ufat/igm,"u");

    document.getElementById("right-img-id").style.display = "none";
    document.getElementById("right-h1-id").style.display = "none";

    document.getElementById("id-text-area").innerHTML = textCifrad;

    document.getElementById("btn-copy").style.display = "show";
    document.getElementById("btn-copy").style.display = "inherit";
}

function copy(){
    var content = document.querySelector("#id-text-area");
    content.select();
    document.execCommand("copy");
    alert("MENSAJE COPIADO!!");
}