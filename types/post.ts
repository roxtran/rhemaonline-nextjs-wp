type NoteType = {
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  docFile: {
    docFile: {
      mediaItemUrl: string;
    };
  };
  slug: string;
};

export default NoteType;
