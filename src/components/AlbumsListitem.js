import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";


function AlbumsListItem({ album }) {
  const [removeAlbum, result] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  }

  const header = <>
    <Button className="mr-2" loading={result.isLoading} onClick={handleRemoveAlbum}>
      <GoTrashcan />
    </Button>
    {album.title}
    </>

  return <ExpandablePanel key={album.id} header={header}>
    List of Photos in the Album
  </ExpandablePanel>
};

export default AlbumsListItem;
