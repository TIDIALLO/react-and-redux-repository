import { useFetchPhotosQuery } from "../store";

function PhotosList({ album }) {
    useFetchPhotosQuery(album);
    return (
        <div>Photo List</div>
    )
}

export default PhotosList;