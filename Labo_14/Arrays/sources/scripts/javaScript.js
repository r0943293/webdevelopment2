const familie = ["Nona", "Maaike", "Kim","John","Ine"];
const voegNaamToe = () => {
    familie.push( prompt("What is the name?"));


}
console.log(familie[0]);
console.log(familie[2]);
console.log(familie[4]);
voegNaamToe();
console.log(familie[5]);
console.log(familie.join(" - "));