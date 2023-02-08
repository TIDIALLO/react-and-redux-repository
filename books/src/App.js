import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/Books";

function App() {
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="app">
            <h1>Reading list</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;