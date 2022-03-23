import React from 'react'
import { useState } from 'react'
import Book from '../ui/Book'

export default function Books({ books: initialBooks }) {

    const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter) {
        if(filter === 'LOW_TO_HIGH'){
            setBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)))   
        }
    }

  return (
    <div id="books__body">
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className='section__title books__header--title'>All Books</h2>
                            <select defaultValue="DEFAULT" id="filter">
                                <option value="DEFAULT" onCh ange={(event) => filterBooks(event.target.value)} disabled>Sort</option>
                                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                                <option value="HIGH_TO_LOW">Price, High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {
                                books.map(book => <Book book={book} key={book.id} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}
