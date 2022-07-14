const basePoint = () => 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const generalPoint = () => `${basePoint()}/apps/2dzOrYLGRTxiKCYCxUvD`;
const bookEndPoint = () => `${generalPoint()}/books`;
const deleteBook = (idOfBook) => `${bookEndPoint()}/${idOfBook}`;

export { bookEndPoint, deleteBook };