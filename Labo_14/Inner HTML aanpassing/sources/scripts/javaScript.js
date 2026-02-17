

const build = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

let btn=document.getElementById("btn");
btn.addEventListener("click", build);