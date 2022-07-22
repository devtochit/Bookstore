import React, { useEffect } from 'react'
import Book from './Book'
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../addButton/addButton';
import { removeBook, getBook,  } from '../../redux/book/book'

function bookContainer() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBook())
    }, [dispatch])
    const { bookItems } = useSelector((configureStore) => configureStore.book);
    console.log(bookItems)

    const handleDelete = (id) => {
        dispatch(removeBook(id))
    }
    return (
        <>
            <div>
                {bookItems.map((bookItem) => {

                    return (
                        <Book
                         key={bookItem.id}
                            {...bookItem}
                            deletebook={handleDelete}

                        />

                    )

                })}
                <AddButton />
            </div>
        </>

    )
}

export default bookContainer