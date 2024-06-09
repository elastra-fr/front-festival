const BASE_URL = 'https://backend.nationsound2024-festival.fr/api/public';



/**
 * Fetch partner categories
 * @returns {Promise<Array>}
 * @throws {Error}
 */

async function fetchPartnerCategories() {
  const response = await fetch(`${BASE_URL}/partner/category`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }
}

export { fetchPartnerCategories };


async function fetchPartnerByCategoryId(categoryId) {
    console.log(categoryId);
  let url = `${BASE_URL}/partner`;
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
  const response = await fetch(`${BASE_URL}/news?limit=${limit}`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  } 
}

export { fetchNews };


async function fetchFaq() {
  const response = await fetch(`${BASE_URL}/faq`);
  const data = await response.json();
  if (data.status === 'success') {
    return data.data;
  } else {
    throw new Error(data.error);
  }
}

export { fetchFaq };


