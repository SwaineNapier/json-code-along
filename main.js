/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */
console.log(data)

/** @TODO - Update the page data using a single pokemon */
/**  
 *      1. Update the #poke_name heading with the name and dex number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the 
 *          pokemon's base stats
 */
let pokemonNameHeading= document.querySelector("#poke_name")
let pokemonImage=document.querySelector("#poke_img")
let pokemonTypeHeading = document.querySelector("#poke_types")

pokemonNameHeading.innerHTML=data[0].name
pokemonImage.src=data[0].image[0]
pokemonTypeHeading.innerHTML=data[0].type[0]+"/"+ data[0].type[1]

let statDivs = document.querySelectorAll("#poke_stats div")
for(let i=0;i<statDivs.length;i++){
    let stat =statDivs[i].id;
    let scale =(data[0].base[stat]/100)*400
    statDivs[i].style["width"]= scale +"px";
}

/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 * 
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */

let randomButton= document.querySelector("#random_btn")

randomButton.onclick = function(event){
event.preventDefault();
let randomIndex = Math.floor(Math.random()*data.length)

pokemonNameHeading.innerHTML=data[randomIndex].name
pokemonImage.src=data[randomIndex].image[0]
pokemonTypeHeading.innerHTML= data[randomIndex].type[0]+"/"+data[randomIndex].type[1];
console.log(statDivs.length)
for(let i=0; i<statDivs.length;i++){
    let stat =statDivs[i].id;
    let scale= (data[randomIndex].base[stat]/100)*400;
    statDivs[i].style["width"]=scale+"px";
    console.log(i)
}
}
