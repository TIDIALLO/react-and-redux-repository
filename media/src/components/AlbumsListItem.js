import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsListItem({ album }) {
    const header = <div>
        <Button>
            <GoTrashcan></GoTrashcan>
        </Button>
            {album.title}
        </div>

    return <ExpandablePanel key={album.id} header={header}>
        Liste of photo in alb
    </ExpandablePanel>
}


export default AlbumsListItem;