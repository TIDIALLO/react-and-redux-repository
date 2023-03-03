import { useFetchAlbumsQuery, useAddAlbumsMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
function AlbumsList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumsMutation();

    const handlAddAlbums = () => {
        addAlbum(user);
    }

    console.log(data, error, isLoading);

    let content;

    if (isLoading) {
        content = <Skeleton times={3}></Skeleton>
    }
    else if (error) {
        <div>Error loading Album....</div>
    } else {
        content = data.map((album) => {
            const header = <div>{album.title}</div>
            return <ExpandablePanel key={album.id} header={header}>
                Liste of photo in alb
            </ExpandablePanel>
        })
    }
    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3  ">
                Albums for {user.name}
                <Button onClick={handlAddAlbums}>+Add Album</Button>
            </div>
            <div>{content}</div>
        </div>
    )
}

export default AlbumsList;