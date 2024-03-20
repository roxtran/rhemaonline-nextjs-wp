import { ListWrapper } from "styles/note";
import ItemDetail from "./ItemDetail";
import NoteType from "types/note";

interface Props {
  title: string;
  items: NoteType[];
  url: string;
}

export default function ItemList({ title, items, url }: Props) {
  return (
    <ListWrapper>
      <h2>{title}</h2>
      {items?.map((item) => (
        <div key={item.slug} className="item-detail">
          <ItemDetail item={item} url={url} />
        </div>
      ))}
    </ListWrapper>
  );
}
