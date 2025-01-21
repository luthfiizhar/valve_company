export async function loadProducts() {
  // Call an external API endpoint to get posts
  const res = await fetch("/api/products");
  const data = await res.json();

  return data;
}
