import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async () =>{
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const createBoot = async (title) =>{
        const response = await axios.post("http://localhost:3001/books", 
            title,
        )
        console.log(response);
        const updatedBooks = [...books, response.data];   
        setBooks(updatedBooks);
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        
        const updateBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updateBooks);
    }

    const editBooById = async (id, newTitlle) => {
        const response = await axios.put(`http://localhost:3001/${id}`,{
            title:newTitlle,
        });
        console.log(response);

        const updatedBook = books.map((book) =>{
            if(book.id === id){
                return {...book, ...response.data}
            }
            return book;
        });
        setBooks(updatedBook);
    };

    return (
        <div className="app">
            <h1>Reading list</h1>
            <BookList  onDelete={deleteBookById} books={books} onEdit={editBooById}/>
            <BookCreate onCreate={createBoot}/>
        </div>
    );
}

export default App;