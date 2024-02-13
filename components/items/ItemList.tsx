import styled from "styled-components";
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
const ListWrapper = styled.div`
  padding: 1rem 0;
  h2 {
    padding-bottom: 1rem;
    border-bottom: 4px dashed var(--mint);
    margin-bottom: 0;
  }
  .item-detail:not(:last-child) {
    border-bottom: 1px double var(--mint);
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;
