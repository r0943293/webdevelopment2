/*Voeg een style-tag toe die ervoor zorgt dat “listitem” de tekst in het rood weergeeft.
• Itereer door de elk li-element en wijzig de class naar “listitem”.
Maak een nieuw img-element aan en geef een waarde aan het src-attribuut (bv. een pad
naar een foto van jezelf). Plaats dit img-element op het einde van de body.
*/

const setup = () => {
    let listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.setAttribute('class', 'listitem');
    })

    const style = document.createElement('style');
    style.innerText = ".listitem {color: red;}";
    document.head.appendChild(style);

}
window.addEventListener('DOMContentLoaded', setup)