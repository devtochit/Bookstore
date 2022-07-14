import React from 'react'
import Book from './Book'
import { useSelector } from 'react-redux';
import AddButton from '../addButton/addButton';


function bookContainer() {
    const { bookItems } = useSelector((configureStore) => configureStore.book);


    return (
        <>
            <div>
                {bookItems.map((bookItem) => {

                    return (
                        <Book key={bookItem.id} {...bookItem} />

                    )

                })}
                <AddButton />
            </div>
        </>

    )
}

export default bookContainer