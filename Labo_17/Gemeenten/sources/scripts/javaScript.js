const addGemeenten = () => {
    let end =false
    let gemeentes=[];
    while (end == false){
        let gemeente = prompt("Geef gemeente in", "Kortrijk");
        gemeentes.push(gemeente);

    }
    const select = document.getElementById("gemeenten");

    gemeenten.forEach(gemeente => {
        const option = document.createElement("option");
        option.value = gemeente;        // what gets submitted
        option.textContent = gemeente;  // what the user sees
        select.appendChild(option);
    });

    
}
window.onload = addGemeenten;