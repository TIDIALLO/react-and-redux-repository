import { 
    useFetchAlbumsQuery, 
    useAddAlbumsMutation,  } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
    
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumsMutation();

    const handlAddAlbum = () => {
        addAlbum(user);
    }
    console.log(data, error, isFetching);
    let content;

    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={3}></Skeleton>
    }
    else if (error) {
        <div>Error loading Album....</div>
    } else {
        content = data.map((album) => {
            return <AlbumsListItem key={album.id} album={album}>

            </AlbumsListItem>
        })
    }
    return (
        <div>
            <div className="flex flex-row justify-between items-center m-2  ">
                <h3 className="text-lg font-bold">Albums for {user.name}</h3>
                <Button loading={results.isLoading} onClick={handlAddAlbum}>+Add Album</Button>
            </div>
            <div>{content}</div>
        </div>
    )
}

export default AlbumsList;