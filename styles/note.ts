import styled from "styled-components";
import { ImgWrapper, def, rem } from "./GlobalStyle";

export const imgWidth = `
  width: 51.375rem;
  max-width: 90vw;
`;

export const imgProperties = `
  ${imgWidth}
  height: 18.75rem;
  border-radius: 0.625rem;
`;

export const ListWrapper = styled.div`
  padding: 1rem 0;
  h2 {
    padding-bottom: 1rem;
    border-bottom: 0.25rem dashed var(--mint);
    margin-bottom: 0;
  }
  .item-detail:not(:last-child) {
    border-bottom: 0.0625rem double var(--mint);
  }
  @media screen and (max-width: 48rem) {
    padding-bottom: 0;
  }
`;

export const ItemWrapper = styled.div`
  position: relative;
  padding: 2rem 0 1rem;
  ${imgWidth}

  .img-container {
    position: relative;

    ${ImgWrapper} {
      ${imgProperties}
      z-index: 0;
    }

    .hover {
      ${imgProperties}
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      opacity: 0;
      z-index: 1;

      &:hover {
        opacity: 0.4;
      }
    }
  }

  .text {
    margin-top: 1rem;
  }

  p {
    margin: 1rem;
  }

  .date {
    color: var(--blue);
  }
`;

export const NotesContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: ${def.wrapper.width};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 48rem) {
    justify-content: center;
  }
`;

export const NoteContainer = styled(NotesContainer)`
  .note-wrapper {
    position: relative;
    ${imgWidth}
    padding: 3rem 0;
    height: 100%;
    .date {
      font-style: italic;
      margin-bottom: 0;
    }
    .line {
      margin: 0.5rem 0;
      width: 100%;
      height: 0.0625rem;
      background: rgba(0, 0, 0, 0.2);
    }
    ${ImgWrapper} {
      margin-top: 2rem;
      ${imgProperties}
    }
    article {
      margin: 2rem 0;
      ol > li {
        margin-bottom: 1rem;
      }
      li > ul {
        margin-top: 0.5rem;
      }
    }
    .btn-wrapper {
      position: relative;
      z-index: 1;
      &:before {
        content: "";
        position: absolute;
        top: -0.0625rem;
        left: 20%;
        right: 20%;
        height: 1rem;
        border-radius: 50%;
        box-shadow: 0 0 0.75rem rgb(0 0 0 / 15%);
        z-index: -1;
      }
      .btn-bg {
        background: #fff;
        display: flex;
        padding: 2rem;
      }
      .btn {
        margin: auto;
      }
    }
  }
  @media screen and (max-width: 48rem) {
    .note-wrapper {
      padding: 3rem 0 0;
    }
  }

  @media screen and (max-width: 40rem) {
    ${ImgWrapper} {
      height: 15rem;
    }
  }
`;

export const SidebarWrapper = styled.div`
  position: sticky;
  top: 5rem;
  /* margin-top: 6.65rem; */
  width: ${rem(325)};
  padding: 2rem 1rem 0;
  h3 {
    padding-bottom: 1rem;
    border-bottom: 0.25rem dashed var(--mint);
    margin-bottom: 0;
  }
  ul {
    padding-left: 0;
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
