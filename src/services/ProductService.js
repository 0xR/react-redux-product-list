export default (client, query, page = 1) => {
  return client.get(`/products?q=${query}&p=${page}`)
}
