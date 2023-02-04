import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);
    
    const createBoot =(title) =>{
        const updatedBooks = [
            ...books,
            {id:Math.round(Math.random() * 9999), title:title}
        ];   
        setBooks(updatedBooks);
    }

    const deleteBookById = (id) => {
        const updateBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updateBooks);
    }

    const editBooById = (id, newTitlle) => {
        const updatedBook = books.map((book) =>{
            if(book.id === id){
                return {...book, title:newTitlle}
            }
            return book;
        });
        setBooks(updatedBook);
    };

    return (
        <div className="app">
            <h1>Reading list</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBooById}/>
            <BookCreate onCreate={createBoot}/>
        </div>
    );
}

export default App;