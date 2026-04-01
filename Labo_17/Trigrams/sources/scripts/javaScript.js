// onoorbaar
const trigrams = () => {
    let woord = "onoorbaar";

    let lengte  = woord.length;
    let output = "";
    for (let i = 0; i < lengte-2; i++) {

        output+=woord.substring(i, i+3)+"-";

    }
    output = output.substring(0, output.length-1);
    console.log(output);

}
window.addEventListener("load", trigrams);