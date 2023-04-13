const BASE_URL = "https://cms.rhemacanada.com/rhemaonline/wp-json/wp/v2";

type Params = {
  params: {
    slug: string;
  };
};

export async function getPosts(type) {
  const postsRes = await fetch(BASE_URL + `/${type}?_embed`);
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(type, slug) {
  const posts = await getPosts(type);
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getPaths(type) {
  let posts = [];
  posts = await getPosts(type);

  const paths = posts.map((post: { slug: string }) => ({
    params: { slug: post.slug }
  }));
  return paths;
}
