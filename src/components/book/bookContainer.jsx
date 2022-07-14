import React, { useEffect } from 'react'
import Book from './Book'
import { useSelector, useDispatch } from 'react-redux';
import AddButton from '../addButton/addButton';
import { deletebook, readBooks } from '../../redux/book/book'

function bookContainer() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readBooks())
    })
    const state = useSelector((configureStore) => configureStore.book);

    const handleDelete = (id) => {
        dispatch(deletebook(id))
    }
    return (
        <>
            <div>
                {state.map((bookItem) => {

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