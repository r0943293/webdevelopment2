const setup = () => {
    let pElement = document.querySelectorAll('p');

    pElement[0].innerText = 'Goed Gedaan!';


    console.log(pElement);
}
window.addEventListener('DOMContentLoaded', setup)