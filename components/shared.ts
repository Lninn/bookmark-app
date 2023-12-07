export function getFullUrl(api: string, params) {
  const queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");

  // Append the query string to the URL
  const fullUrl = `${api}?${queryString}`;

  return fullUrl
}
