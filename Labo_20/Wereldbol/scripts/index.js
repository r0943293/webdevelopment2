const setup = () => {
  let geboorteDatum= new Date(2002,0,10);
  let vandaag = Date.now();


    console.log(geboorteDatum);
    console.log(vandaag);
let result =(vandaag-geboorteDatum)
    console.log(Math.floor(result/86400000) + " Dagen oud");
}
addEventListener('DOMContentLoaded', setup)