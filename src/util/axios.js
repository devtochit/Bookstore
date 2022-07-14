const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BHfOudnaPrs5rpU3itrm/books';

export const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const books = Object.entries(data).map((pair) => ({ ...pair[1][0], id: pair[0] }));
  return books;
};

export const uploadData = async (book) => {
  const apiObj = { ...book };
  delete Object.assign(apiObj, { item_id: apiObj.id }).id;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(apiObj),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const removeData = async (id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
