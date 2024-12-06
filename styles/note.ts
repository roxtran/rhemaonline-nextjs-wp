import { ImgWrapper, def } from "./GlobalStyle";

import styled from "styled-components";

export const ItemListWrapper = styled.div`
  h2 {
    padding-top: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.25rem dashed var(--mint);
    margin-bottom: 0;
  }
  .item-detail:not(:last-child) {
    border-bottom: 0.0625rem double var(--mint);
  }
`;

export const ItemWrapper = styled.div`
  position: relative;
  padding: 1rem 0;

  .img-container {
    margin: 1rem 0;
    position: relative;
  }

  p {
    margin: 1rem;
  }

  .date {
    color: var(--blue);
  }
`;

export const NoteImage = styled(ImgWrapper)`
  width: 100%;
  height: 12rem;
  border-radius: 0.625rem;
  z-index: 0;

  @media screen and (min-width: 48rem) {
    height: 18rem;
  }
  @media screen and (min-width: 64rem) {
    height: 20rem;
  }
`;

export const NoteImageHover = styled(NoteImage)`
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  opacity: 0;
  z-index: 1;

  &:hover {
    opacity: 0.25;
  }
`;

export const NotesContainer = styled.section`
  max-width: ${def.wrapper.width};
  position: relative;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 64rem) {
    grid-template-columns: auto 18rem;
    gap: 4rem;
  }
`;

export const NoteContainer = styled(NotesContainer)`
  .note-wrapper {
    .date {
      font-style: italic;
      margin-bottom: 0;
    }
    .category-name {
      padding-top: 1rem;
      padding-bottom: 0.5rem;

      @media screen and (min-width: 64rem) {
        padding-top: 4rem;
      }
    }
    .line {
      height: 0.0625rem;
      background: rgba(0, 0, 0, 0.2);
    }
    ${NoteImage} {
      margin-top: 2rem;
    }
    article {
      margin: 2rem 0 3rem;
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
`;

export const SidebarWrapper = styled.div`
  position: sticky;
  align-self: start;
  top: 5rem;

  h3 {
    padding-top: 3rem;
    padding-bottom: 1rem;
    border-bottom: 0.25rem dashed var(--mint);
    margin-bottom: 0;
  }
  ul {
    padding-left: 0;
    list-style: none;
  }
  li {
    padding: 1rem 0;
    &:not(:last-child) {
      border-bottom: 0.0625rem solid var(--mint);
    }
    a {
      text-decoration: none;
    }
  }
  p {
    margin-bottom: 0;
  }
  .date {
    font-style: italic;
    margin-top: 0.25rem;
  }
`;
