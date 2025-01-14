// lib/blogs.js
export async function getBlogs() {
  const response = await fetch(
    `https://api.pervasel.com/api/blogs?populate=*&locale=en`
  );
  const data = await response.json();
  return data;
}
