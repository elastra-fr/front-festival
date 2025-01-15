
const PUBLIC_URL= import.meta.env.VITE_API_PUBLIC_URL;
const USER_URL= import.meta.env.VITE_API_USER_URL;  



/****************************Appels API routes publiques ***************************************/


/**
 * Fetch partner categories
 * @returns {Promise<Array>}
 * @throws {Error}
 */

async function fetchPartnerCategories() {




  const response = await fetch(`${PUBLIC_URL}/partner/category`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }
}

export { fetchPartnerCategories };


async function fetchPartnerByCategoryId(categoryId) {
    
  let url = `${PUBLIC_URL}/partner`;
  if (categoryId !== "all") {
    url += `/category/${categoryId}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  if (data.status === "success") {
    return data.data;
  } else {
    throw new Error(data.error);
  }
}
export { fetchPartnerByCategoryId };


async function fetchNews(limit = 5) {
  const response = await fetch(`${PUBLIC_URL}/news?limit=${limit}`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  } 
}


export { fetchNews };

/**
 * Récupération des évènement qui donneront lieu à un bandeau rouge
 * @returns {Promise<Array>}
 */
async function fetchRedBandEvents() {
  const response = await fetch(`${PUBLIC_URL}/news/alert`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }

}

export { fetchRedBandEvents };



/**
 * Recupération des données de la FAQ depuis l'API
 * @returns {Promise<Array>}
 */
async function fetchFaq() {
  const response = await fetch(`${PUBLIC_URL}/faq`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }
}

export { fetchFaq };

/**
 * Récupération des filtres pour la programmation
 * Jours et horaires
 *
 */

async function fetchFilters() {
  const response = await fetch(`${PUBLIC_URL}/concert/filters`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }

}

export { fetchFilters };

/**
 * Récupération de la programmation
 */

async function fetchConcerts(filterJour, filterScene, filterHoraire, filterGenre) {
  const response = await fetch(`${PUBLIC_URL}/concert?jour=${filterJour}&scene=${filterScene}&horaire=${filterHoraire}&genre=${filterGenre}`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }
}

export { fetchConcerts };

/**
 * Récupération des concerts en cours
 * 
 * 
 * 
 */

async function fetchLiveConcerts() {
  const response = await fetch(`${PUBLIC_URL}/concert/now`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }
}

export { fetchLiveConcerts };


/*Récupération des catégories de points pour la carte*/

async function fetchMapCategories() {

  const response = await fetch(`${PUBLIC_URL}/map/points/category`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }

}

export { fetchMapCategories };

//Récupération des points pour la carte

async function fetchMapPoints(categoryId) {

  let url = `${PUBLIC_URL}/map/marker`;
  if (categoryId !== "") {
    url += `/${categoryId}`;
  }

else {
  url = `${PUBLIC_URL}/map/marker`;
}

  const response = await fetch(url);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }

}

export { fetchMapPoints };

/***************************Appels API Routes user ***************************/


