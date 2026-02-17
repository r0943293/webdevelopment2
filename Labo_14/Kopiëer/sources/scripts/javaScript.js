
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    console.log(tekst);
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML=txtInput.value;
}

let btnKopieer = document.getElementById("btnKopieer");
btnKopieer.addEventListener("click", kopieer);



