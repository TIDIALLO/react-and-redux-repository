import { useState } from "react";
import useBooksContext from "../hooks/use-book-context";

function BookEdit({book,onSubmit}) {

    const [title, setTitle] = useState(book.title);
    const {editBookkById} = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookkById(book.id, title);
    };


    return (
        <div>
            <form  className="book-edit" onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}></input>
                <button className="button is-primary" >Save</button>
            </form>
        </div>
    );
}

export default BookEdit;