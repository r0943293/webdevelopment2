const setup = () => {
    let input = "De man van An geeft geen hand aan ambetante verwanten";
    let teZoeken = "an";
    let aantal = 0;
    let position = input.indexOf(teZoeken);


    while (position !== -1) {
        aantal++;
        position = input.indexOf(teZoeken, position + 1);
    }
    console.log(`an komt ${aantal} keer voor in de tekst`);
    const resultIndexOf = document.createElement("p");
    resultIndexOf.textContent = `an komt ${aantal} keer voor in de tekst |grbuik van indexOf`;
    document.body.appendChild(resultIndexOf);

    let aantal2 = 0;
    let position2 = input.lastIndexOf(teZoeken);
    while (position2 !== -1) {
        aantal2++;
        position2 = input.lastIndexOf(teZoeken, position2 - 1);
    }

    console.log(`an komt ${aantal2} keer voor in de tekst`);

    const resultLastIndexOf = document.createElement("p");
    resultLastIndexOf.textContent = `an komt ${aantal2} keer voor in de tekst | gebruik lastIndexOf`;
    document.body.appendChild(resultLastIndexOf);
};

window.addEventListener("load", setup);