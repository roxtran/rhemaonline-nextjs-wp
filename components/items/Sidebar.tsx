import Link from "next/link";
import NoteType from "types/note";
import { SidebarWrapper } from "styles/note";

interface Props {
  title: string;
  items: NoteType[];
  url: string;
}

export default function Sidebar({ title, items, url }: Props) {
  return (
    <SidebarWrapper>
      <div className="wrapper">
        <h3>{title}</h3>
        <ul>
          {items?.map((item) => (
            <li key={item.slug}>
              <Link href={`${url}/${item.slug}`}>{item.title}</Link>
              {/* <p className="date">{formatDate(item.date)}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </SidebarWrapper>
  );
}
