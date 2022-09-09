const postUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function getPosts(limit) {
  let url = postUrl;
  if (limit) url = postUrl + '?_limit=' + limit;
  return fetch(url)
    .then((res) => res.json());
}
