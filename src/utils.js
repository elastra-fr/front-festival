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

/*
  export const getConcerts = () => {
    fetch("http://festival.local/wp-json/wp/v2/concert?per_page=100")
      .then((response) => response.json())
      .then((data) => {
    
        data.sort((a, b) => {
          return a.acf.horaire - b.acf.horaire;
        });
   
return data;

      });
  };
*/
  //Fonction qui ajoute un nombre de jours à une date
export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
    //return result;
  return result.toISOString().split('T')[0];
}

//Fonction qui ajoute un nombre de jours à une date et retourne une date en format texte
export function addDaysTxt(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
    return txtDate(result);
  //return result.toISOString().split('T')[0];
}



