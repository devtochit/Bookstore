const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BHfOudnaPrs5rpU3itrm/books';

export const getBookThunk = async (job, thunkAPI) => {
  try {
    const response = await fetch(url, job);
    const data = await response.json();
    const books = Object.entries(data).map((pair) => ({ ...pair[1][0], id: pair[0] }));
    return books;
  } catch (err) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};

export const uploadData = async (job, book, thunkAPI) => { // eslint-disable-line 
  try {
    const apiObj = { ...book };
    delete Object.assign(apiObj, { item_id: apiObj.id }).id;
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(apiObj, job),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};

export const removeData = async (id, job, thunkAPI) => { // eslint-disable-line
  try {
    await fetch(`${url}/${id}`, job, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
};
