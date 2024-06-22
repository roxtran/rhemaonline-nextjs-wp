import { ItemListWrapper } from "styles/note";
import NoteType from "types/note";
import ItemDetail from "./ItemDetail";

interface Props {
  title: string;
  items: NoteType[];
  url: string;
}

export default function ItemList({ title, items, url }: Props) {
  return (
    <ItemListWrapper>
      <h2>{title}</h2>
      {items?.map((item) => (
        <div key={item.slug} className="item-detail">
          <ItemDetail item={item} url={url} />
        </div>
      ))}
    </ItemListWrapper>
  );
}
