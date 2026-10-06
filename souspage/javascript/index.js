const divElement=document.getElementById("div");
const superlink=document.getElementById("link");
const displayDivElement=document.getElementById("display");

superlink.addEventListener('click',()=>{
    divElement.style.display="none";
});

displayDivElement.addEventListener('click',()=>{
    divElement.style.display="flex";
});


const bibliothèque=[
    {livre:'Medecine cardiovasculaire'},
    {livre:'chirurgie generale'},
    {livre:'300 Diagnostique'},
    {livre:'Examen Clinique'},
    {livre:'Gynecologie Obstetrique'},
];
const inputseach=document.getElementById('inputchamp');


