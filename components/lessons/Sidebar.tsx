import Link from "next/link";
import styled from "styled-components";
import NoteType from "types/post";
import { rem } from "styles/GlobalStyle";

interface Props {
  title: string;
  notes: NoteType[];
}

export default function Sidebar({ title, notes }: Props) {
  const formatDate = (date: string) => {
    const newDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return newDate;
  };
  return (
    <SidebarWrapper>
      <div className="wrapper">
        <h3>{title}</h3>
        <ul>
          {notes?.map((note) => (
            <li key={note.slug}>
              <Link
                href={`/lessons/${title.toLowerCase().includes("notes") ? "notes" : "studies"}/${
                  note.slug
                }`}
              >
                {note.title.rendered}
              </Link>
              <p className="date">{formatDate(note.date)}</p>
            </li>
          ))}
        </ul>
      </div>
    </SidebarWrapper>
  );
}
const SidebarWrapper = styled.div`
  position: sticky;
  top: 5rem;
  margin-top: 6.65rem;
  width: ${rem(325)};
  border-top: ${rem(4)} dashed var(--mint);
  padding: 1rem 1rem 0;
  h3 {
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: none;
  }
  li {
    padding: ${rem(16)} 0;
    &:not(:last-child) {
      border-bottom: ${rem(1)} solid var(--mint);
    }
  }
  p {
    margin-bottom: 0;
  }
  .date {
    font-style: italic;
    margin-top: 0.25rem;
  }
  @media screen and (max-width: ${rem(1024)}) {
    width: ${rem(325)};
    padding: 2rem 3%;
  }
  @media screen and (max-width: ${rem(768)}) {
    padding: 2rem 0;
    margin-top: 2rem;
  }
`;
