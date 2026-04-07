let personen = [];
let huidigePersoonIndex = -1;

// Hulpfunctie: formulier leegmaken
const maakFormulierLeeg = () => {
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    clearAllErrors();
};

// Hulpfunctie: formulier vullen met gegevens van een persoon
const toonPersoonInFormulier = (persoon) => {
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = persoon.geboorteDatum;
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;
    clearAllErrors();
};

// Hulpfunctie: lijst opnieuw opbouwen
const vulLijst = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = "";

    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("id", i);
        option.textContent = `${personen[i].familienaam} ${personen[i].voornaam}`;
        lstPersonen.appendChild(option);
    }

    if (huidigePersoonIndex >= 0 && huidigePersoonIndex < personen.length) {
        lstPersonen.selectedIndex = huidigePersoonIndex;
    } else {
        lstPersonen.selectedIndex = -1;
    }
};

// Event listener (btnBewaar click)
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

    // Alleen bewaren als er geen velden met class "invalid" zijn
    if (document.getElementsByClassName("invalid").length > 0) {
        console.log("Er zijn validatiefouten");
        return;
    }

    let persoon = {
        voornaam: document.getElementById("txtVoornaam").value.trim(),
        familienaam: document.getElementById("txtFamilienaam").value.trim(),
        geboorteDatum: document.getElementById("txtGeboorteDatum").value.trim(),
        email: document.getElementById("txtEmail").value.trim(),
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value.trim(), 10)
    };

    if (huidigePersoonIndex === -1) {
        // nieuwe persoon
        personen.push(persoon);
        huidigePersoonIndex = personen.length - 1;
    } else {
        // bestaande persoon aanpassen
        personen[huidigePersoonIndex].voornaam = persoon.voornaam;
        personen[huidigePersoonIndex].familienaam = persoon.familienaam;
        personen[huidigePersoonIndex].geboorteDatum = persoon.geboorteDatum;
        personen[huidigePersoonIndex].email = persoon.email;
        personen[huidigePersoonIndex].aantalKinderen = persoon.aantalKinderen;
    }

    vulLijst();
    toonPersoonInFormulier(personen[huidigePersoonIndex]);
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    huidigePersoonIndex = -1;
    document.getElementById("lstPersonen").selectedIndex = -1;
    maakFormulierLeeg();
};

// Event listener voor select
const selecteerPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let geselecteerdeOption = lstPersonen.options[lstPersonen.selectedIndex];

    if (geselecteerdeOption) {
        huidigePersoonIndex = parseInt(geselecteerdeOption.id, 10);
        toonPersoonInFormulier(personen[huidigePersoonIndex]);
    }
};

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", selecteerPersoon);

    vulLijst();
};

window.addEventListener("load", setup);