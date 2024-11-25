import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold text-center">Books: {books.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book 
                        book ={book}
                        key={book.bookId}
                        ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;