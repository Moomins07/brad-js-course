const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

//  Convert to JSON string
const str = JSON.stringify(post);

// This converts our Obj into a JSOn string that we can send to a server.

// This is useful if we use local storage as local storage can only store strings. We use stringify to do this.

// If we then want to re-convert that string back to an object, we use parse().

// Parse JSON

const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

// Stringify also works for an ARRAY of Objects.
const str2 = JSON.stringify(posts);

console.log(str2);
