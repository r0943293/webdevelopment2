
const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let tekst = txtInput.value;
    console.log(tekst);
    let result = tekst.substring(startValue, endValue);
    console.log(result);


    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML=result;
}

let btnKopieer = document.getElementById("btnSubstring");
btnKopieer.addEventListener("click", substring);



