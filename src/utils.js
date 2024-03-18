//Fonction qui retourne  une date en format texte
export const txtDate= (date) => {

let dateLoc = new Date(date);
let jourSemaine= dateLoc.getDay();

let days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
let months = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];    

let mois = dateLoc.getMonth();


let jour = dateLoc.getDate();

let annee = dateLoc.getFullYear();





let texDate=days[jourSemaine]+" "+jour+" "+months[mois] +" "+annee;

return texDate;



} 